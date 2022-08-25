import { prisma } from '@utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { user_id } = req.body;
	const data = await prisma.posts.findMany({
		take: 10,
		select: {
			id: true,
			title: true,
			message: true,
			image_url: true,
			created_at: true,
			Author: true,
			post_like_dislike: {
				select: {
					id: true,
					liked: true,
					disliked: true,
				},
				where: {
					user_id,
				},
			},
		},
		orderBy: [
			{
				created_at: 'desc',
			},
		],
	});
	const post_data = data.map(async (post) => {
		const liked = await prisma.post_like_dislike.count({
			where: {
				post_id: post.id,
				liked: true,
			},
		});
		const disliked = await prisma.post_like_dislike.count({
			where: {
				post_id: post.id,
				disliked: true,
			},
		});
		return {
			...post,
			post_data: { liked, disliked },
		};
	});
	await Promise.all(post_data).then((response) => res.status(200).json(response));
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
