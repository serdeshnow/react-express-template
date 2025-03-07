import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

export const config = {
  nodeEnv: process.env.NODE_ENV || 'production', // development | production
  host: process.env.HOST || '0.0.0.0', // localhost | 0.0.0.0
  port: process.env.PORT || 5000,
  mongoURI: process.env.MONGO_URI || '',
  jwtSecret: process.env.JWT_SECRET || '',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1d',
};

console.log(chalk.green('Application configured successfully.'));
