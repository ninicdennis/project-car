import { prisma } from '@utils/prisma';
import sanitizeHtml from 'sanitize-html';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { title, body, user_id } = req.body;
	if (!title || !user_id) {
		res.status(400).json({
			error: true,
			message: 'Missing: title, user_id.',
		});
	}
	const message = sanitizeHtml(body);
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
}
