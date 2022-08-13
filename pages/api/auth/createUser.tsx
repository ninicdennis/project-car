import { AuthRegister } from '@stores/types';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const prisma = new PrismaClient();

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
	res.status(400);
}
