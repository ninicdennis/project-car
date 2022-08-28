import { prisma } from '@utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import sanitize from 'sanitize-html';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { id: post_id } = req.query;
	if (req.method === 'GET') {
		if (typeof post_id !== 'string') res.send(400);
		else {
			const response = await prisma.post_comments.findMany({
				include: {
					CommentAuthor: true,
				},
				where: {
					post_id,
				},
			});
			res.status(200).send(response);
		}
	} else if (req.method === 'POST') {
		const { user_id, message } = req.body;
		if (!user_id || !message || typeof post_id !== 'string') res.send(400);
		else {
			await prisma.post_comments.create({
				data: {
					user_id,
					post_id,
					message: sanitize(message),
				},
			});
			res.send(200);
		}
	} else if (req.method === 'DELETE') {
		res.send(200);
	}
}
