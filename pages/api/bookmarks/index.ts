// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Bookmark, PrismaClient } from "@prisma/client";
import { extract } from "@extractus/article-extractor";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Bookmark[] | Bookmark>
) {
  switch (req.method) {
    case "POST":
      const { link } = req.body;
      try {
        const parsedResult = await extract(link);
        const response = await prisma.bookmark.create({
          data: {
            title: parsedResult.title || link,
            link: parsedResult.url || link,
            author: parsedResult.author,
            content: parsedResult.content,
            publishedAt: parsedResult.published || new Date(),
            archived: false,
          },
        });
        res.status(200).json(response);
      } catch (error) {
        console.log(error);
      }
      break;
    case "GET":
    default:
      const bookmarks = await prisma.bookmark.findMany();
      res.status(200).json(bookmarks);
  }
}
