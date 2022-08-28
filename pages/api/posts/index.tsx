import { prisma } from '@utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { user_id, limit = 10, offset = 0 } = req.body;

	const response = await prisma.$queryRaw`
with like_dislike as (
	select
	posts.id as post_id,
	count(CASE WHEN liked THEN 1 END) as liked,
	count(CASE WHEN disliked THEN 1 END) as disliked
	from posts
	join post_like_dislike as pld on pld.post_id = posts.id
	group by posts.id
)
select
posts.*,
user_data.username,
like_dislike.liked::int,
like_dislike.disliked::int,
user_ld.*
from posts
join user_data on user_data.id = posts.user_id
left join like_dislike on posts.id = like_dislike.post_id
left join (
	select pld.post_id as post_id,
		json_build_object(
			'id', id,
			'liked', liked,
			'disliked', disliked
		)
	as post_data
	from post_like_dislike as pld
	where user_id = ${user_id}::uuid
	group by pld.post_id, liked, disliked, pld.id
) as user_ld on user_ld.post_id = posts.id
order by created_at desc
limit ${limit}
offset ${offset} 
	`;
	res.status(200).send(response);
}
// ? keeping for later, find all posts for user.
// const response = await prisma.user_data.findMany({
// 	take: 10,
// 	select: {
// 		username: true,
// 		posts: {
// select: {
// 	title: true,
// 	message: true,
// 	image_url: true,
// 	created_at: true,
// },
// 		},
// 	},
// orderBy: [
// 	{
// 		created_at: 'desc',
// 	},
// ],
// });
