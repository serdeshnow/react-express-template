import {
  getUsersController,
  loginUser,
  logoutUser,
  registerUser,
} from '../controllers/user.controller.ts';
import { Router } from 'express';

export const userRoutes = Router();

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: Регистрация нового пользователя
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Пользователь успешно зарегистрирован
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 user:
 *                   type: object
 *       500:
 *         description: Ошибка сервера
 */
userRoutes.post('/register', registerUser);

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: Вход пользователя
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Успешный вход
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Неверные учетные данные
 */
userRoutes.post('/login', loginUser);

/**
 * @swagger
 * /user/logout:
 *   get:
 *     summary: Выход пользователя
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Успешный выход
 *       500:
 *         description: Ошибка сервера
 */
userRoutes.get('/logout', logoutUser);

userRoutes.get('/all', getUsersController);
