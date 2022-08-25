import { prisma } from '@utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		// Post new like dislike
		const { post_id, user_id, type } = req.body;
		let liked = false;
		let disliked = false;
		if (type === 'liked') {
			liked = true;
			disliked = false;
		} else if (type === 'disliked') {
			liked = false;
			disliked = true;
		}
		await prisma.post_like_dislike.create({
			data: {
				post_id,
				user_id,
				liked,
				disliked,
			},
		});
		res.send(200);
	} else if (req.method === 'PUT') {
		// adjust to either like or dislike
		const { id } = req.query;
		if (id && typeof id === 'string') {
			const { type } = req.body;
			let liked = false;
			let disliked = false;
			if (type === 'liked') {
				liked = true;
				disliked = false;
			} else if (type === 'disliked') {
				liked = false;
				disliked = true;
			}
			await prisma.post_like_dislike.update({
				where: {
					id,
				},
				data: {
					liked,
					disliked,
				},
			});
			res.send(200);
		} else return res.send(400);
	} else if (req.method === 'DELETE') {
		// delete like or dislike
		const { id } = req.query;
		if (id && typeof id === 'string') {
			await prisma.post_like_dislike.delete({
				where: {
					id,
				},
			});
			res.send(200);
		} else res.send(400);
	}
}
