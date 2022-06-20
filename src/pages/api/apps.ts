import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function postApp(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req;
  try {
    const newEntry = await prisma.app.create({
      data: {
        name: body.name,
        priority: +body.priority,
        type: body.type,
        notes: body.notes,
      },
    });
    return res.status(200).json({ data: newEntry, success: true });
  } catch (error) {
    console.error('Request error', error);
    res.status(500).json({ error: 'Error adding application', success: false });
  }
}

async function getApps(req: NextApiRequest, res: NextApiResponse) {
  try {
    const apps = await prisma.app.findMany();
    return res.status(200).json({ data: apps, success: true });
  } catch (error) {
    res.status(500).json({ error: 'Error getting applications', success: false });
  }
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return await postApp(req, res);
  } else if (req.method === 'GET') {
    return await getApps(req, res);
  } else {
    return res.status(405).json({ message: 'Method not allowed', success: false });
  }
}
