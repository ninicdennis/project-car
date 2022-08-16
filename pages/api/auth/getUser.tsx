import { prisma } from '@utils/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { id } = req.body;
	const response = await prisma.user_data.findUnique({ where: { id } });
	res.status(200).json(response);
}
