import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";
import dotenv from "dotenv";

export default function validate(handler: any) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const token = req.cookies.TOKEN;

    if (token) {
      let user: User | null;
      try {
        const { id }: any = jwt.verify(token, process.env.API_KEY as string);
        user = await prisma.user.findUnique({
          where: { id },
        });

        if (!user) throw new Error("User not found");
      } catch (e) {
        res.status(401);
        res.json({ e: "User Not Authorized" });
        return;
      }

      return handler(req, res, user);
    } else {
      res.status(401);
      res.json({ e: "Not Valid Token" });
    }
  };
}

export function validaeToken(token: string) {
  const user: string | jwt.JwtPayload = jwt.verify(
    token,
    process.env.API_KEY as string
  );
  return user;
}
