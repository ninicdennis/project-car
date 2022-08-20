import { AuthRegister } from '@stores/types';
import { prisma } from '@utils/prisma';
import { randomUUID } from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { username, email, id }: AuthRegister = req.body;
	if (id && email && username) {
		const response = await prisma.user_data.create({
			data: {
				id,
				username,
				email,
			},
		});
		const user_id = response.id;
		await prisma.user_profile.create({
			data: {
				id: randomUUID(),
				user_id,
				banner_image: null,
				about: JSON.stringify(''),
			},
		});

		res.status(200).json(response);
	} else {
		res.status(400).json({
			error: true,
			message: 'Missing data, id, email, username.',
		});
	}
}
