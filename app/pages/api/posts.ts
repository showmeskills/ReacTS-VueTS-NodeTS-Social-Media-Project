// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import posts from "@/mock/posts.json";
export interface PostsData {
  posts: {
    id: number;
    desc?: string;
    photo: string;
    date: string;
    userId: number;
    like: number;
    comment: number;
  }[]
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PostsData>
) {
  res.status(200).send(posts);
}