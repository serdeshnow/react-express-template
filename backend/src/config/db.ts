import mongoose from 'mongoose';
import logger from '../utils/logger.ts';
import { config } from './config.ts';

export const connectDB = async () => {
  const mongoURI = `mongodb://${config.mongoUser}:${config.mongoPass}@${config.mongoHost}:${config.mongoPort}/${config.mongoDatabase}?authSource=admin`;

  try {
    await mongoose.connect(mongoURI);
    logger.info('MongoDB connected successfully.');
  } catch (error) {
    logger.error('Error connecting to MongoDB:');
    console.error(error);
    process.exit(1);
  }
};
