import { AuthRegister } from '@stores/types';
import { prisma } from '@utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { username, email, id }: AuthRegister = req.body;
	if (id) {
		const response = await prisma.user_data.create({
			data: {
				id,
				username,
				email,
			},
		});

		res.status(200).json(response);
	}
	// ? TODO: Figure out why this doesnt send a response back
	res.status(400).json({
		error: true,
	});
}
