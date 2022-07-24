import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { id } = req.body;
	const response = await prisma.user.findUnique({ where: { id } });
	res.status(200).json(response);
}
