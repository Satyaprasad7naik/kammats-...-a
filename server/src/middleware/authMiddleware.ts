import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      admin?: any;
    }
  }
}

const JWT_SECRET: string = (process.env.JWT_SECRET as string) || 'dev-secret';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.admin_token;

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized - No token provided' });
    }

    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      req.admin = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ error: 'Unauthorized - Invalid token' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'Authentication error' });
  }
};
