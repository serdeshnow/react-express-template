import { User } from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import validator from 'validator';

/**
 * Регистрирует нового пользователя.
 * @param {Object} userData - Данные пользователя { username, email, password }
 * @returns {Promise<Object>} - Зарегистрированный пользователь.
 * @throws {Error} - Если данные некорректны или пользователь уже существует.
 */
export const register = async ({ username, email, password }) => {
  if (!validator.isEmail(email)) {
    throw new Error('Неверный email');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error('Пользователь уже существует');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return await User.create({ email: email, password: hashedPassword });
};

export const login = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Неверные учетные данные');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Неверные учетные данные');
  }

  const token = jwt.sign({ id: user._id }, config.jwtSecret, {
    expiresIn: config.jwtExpiresIn,
  });

  return { user, token };
};
