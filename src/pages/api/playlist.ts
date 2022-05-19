import { Playlist } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const playlists: Playlist[] = await prisma.playlist.findMany({
    where: {},
    orderBy: {
      name: "asc",
    },
  });
  res.json(playlists);
};
