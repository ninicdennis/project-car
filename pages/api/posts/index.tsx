import { prisma } from '@utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const { title, body: message, user_id } = req.body;
		if (!title || !user_id) {
			res.status(400).json({
				error: true,
				message: 'Missing: title, user_id.',
			});
		}
		const result = await prisma.posts.create({
			data: {
				title,
				message,
				user_id: user_id,
			},
		});
		if (result.id) res.status(200).json(result);
		else {
			res.status(400).json({
				error: true,
				message: 'Error posting data.',
			});
		}
	} else if (req.method === 'GET') {
		// console.log(req.headers);
		const response = await prisma.posts.findMany({
			take: 10,
			select: {
				id: true,
				title: true,
				message: true,
				image_url: true,
				created_at: true,
				Author: true,
			},
			orderBy: [
				{
					created_at: 'desc',
				},
			],
		});
		res.status(200).json(response);
	}
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
