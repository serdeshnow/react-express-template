import * as userService from '../services/user.service.js';
import logger from '../utils/logger.js';

export const registerUser = async (req, res) => {
  try {
    const user = await userService.register(req.body);
    logger.success('Пользователь успешно зарегистрирован');
    res.status(201).json({ message: 'Пользователь успешно зарегистрирован', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { token } = await userService.login(req.body);

    // Если нужно устанавливать в cookie:
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.nodeEnv === 'production',
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.cookie('token', '', { httpOnly: true }); // Очищаем куки
    res.redirect('/login');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
