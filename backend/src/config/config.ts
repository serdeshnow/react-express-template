import dotenv from 'dotenv';
import chalk from 'chalk';

dotenv.config();

export const config = {
  nodeEnv: process.env.NODE_ENV || '', // development | stage | production
  host: process.env.HOST || '', // localhost | 0.0.0.0 | 0.0.0.0
  port: process.env.PORT || 5000, // 8080 by default
  mongoUser: process.env.MONGO_USER || '',
  mongoPass: process.env.MONGO_PASSWORD || '',
  mongoHost: process.env.MONGO_HOST || '',
  mongoPort: process.env.MONGO_PORT || '',
  mongoDatabase: process.env.MONGO_DATABASE || '',
  jwtSecret: process.env.JWT_SECRET || '',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '',
};

console.log(chalk.green('Application configured successfully.'));
