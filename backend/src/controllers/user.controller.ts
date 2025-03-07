import { Request, Response } from 'express';
import * as userService from '../services/user.service.ts';
import logger from '../utils/logger.ts';

export const registerUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await userService.register(req.body);
    logger.success('Пользователь успешно зарегистрирован');
    res.status(201).json({ message: 'Пользователь успешно зарегистрирован', user });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { token } = await userService.login(req.body);

    // Если нужно устанавливать в cookie:
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.nodeEnv === 'production',
    });
    res.status(200).json({ token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const logoutUser = async (req: Request, res: Response): Promise<void> => {
  try {
    res.cookie('token', '', { httpOnly: true }); // Очищаем куки
    res.redirect('/login');
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getUsersController = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
