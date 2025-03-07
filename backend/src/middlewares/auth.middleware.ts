import { NextFunction, Request, Response } from 'express';
import { config } from '../config/config.ts';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import logger from '../utils/logger.ts';

function isJwtPayload(obj: unknown): obj is JwtPayload {
  return (
    typeof obj === 'object' &&
    obj !== null &&
    'email' in obj
  );
}

export interface AuthenticatedRequest extends Request {
  user?: {
    // id: string;
    email?: string;
  };
}

export function auth(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
  const token = req.cookies.token;

  try {
    const verifyResult: string | JwtPayload = jwt.verify(token, config.jwtSecret);

    if (isJwtPayload(verifyResult)) {
      req.user = {
        email: verifyResult.email,
      };
    }

    next();
  } catch (error) {
    logger.error(error);
    res.redirect('/login'); // Токен неправильный, редирект на логин
  }
}
