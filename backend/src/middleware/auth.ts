
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../prisma/client";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export const verifyAuth = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "No token" });

  const parts = authHeader.split(" ");
  if (parts.length !== 2)
    return res.status(401).json({ message: "Invalid token format" });

  const token = parts[1];
  try {
    const payload: any = jwt.verify(token, JWT_SECRET);
    // fetch user if needed
    const user = await prisma.user.findUnique({ where: { id: payload.id } });
    if (!user) return res.status(401).json({ message: "User not found" });
    // attach safe user
    (req as any).user = {
      id: user.id,
      email: user.email,
      username: user.username,
      mobile: user.mobile,
    };
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
