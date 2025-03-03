import { config } from '../config/config.js';
import jwt from 'jsonwebtoken';
import logger from '../utils/logger.js';

// /**
//  * TS style:
//  * @typedef {import('express').Request} ExpressRequest
//  * @typedef {import('express').Response} ExpressResponse
//  * @typedef {import('express').NextFunction} ExpressNextFunction
//  */

// /**
//  * Middleware для проверки JWT токена.
//  * @param {Object} req
//  * @param {Object} res
//  * @param {Function} next
//  */
export function auth(req, res, next) {
  const token = req.cookies.token;

  try {
    const verifyResult = jwt.verify(token, config.jwtSecret);
    // console.log('verifyResult', verifyResult);

    req.user = {
      email: verifyResult.email,
    };

    next();
  } catch (error) {
    logger.error(error);
    res.redirect('/login'); // Токен неправильный, редирект на логин
  }
}
