// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import usersData from "@/mock/users.json";

export interface UsersData {
  users: {
    id: number;
    profilePicture: string;
    username: string;
  }[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UsersData>
) {

  res.status(200).send(usersData);
}