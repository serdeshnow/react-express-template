import { type IUser, User } from '../models/user.model.ts';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config/config.ts';
import validator from 'validator';

export const register = async ({ username, email, password }: IUser) => {
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

export const login = async ({ email, password }: IUser) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('Неверные учетные данные');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Неверные учетные данные');
  }

  // const token: string = jwt.sign(
  //   { data: 'user.id.toString()' },
  //   config.jwtSecret,
  //   { expiresIn: config.jwtExpiresIn, }
  // );

  const token: string = jwt.sign(email, config.jwtSecret, {})


  return { user, token };
};

export const getUsers = async () => {
  return User.find();
};
