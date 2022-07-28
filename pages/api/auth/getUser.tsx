import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const prisma = new PrismaClient();

	const { id } = req.body;
	const response = await prisma.user_data.findUnique({ where: { id } });
	res.status(200).json(response);
}
