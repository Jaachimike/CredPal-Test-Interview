import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import config from "../config/config";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

export default authMiddleware;
