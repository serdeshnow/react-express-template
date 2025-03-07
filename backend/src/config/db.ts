import mongoose from 'mongoose';
import logger from '../utils/logger.ts';
// import { config } from './config.ts';

export const connectDB = async () => {
  const mongoURI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}?authSource=admin`;

  try {
    await mongoose.connect(mongoURI);
    logger.info('MongoDB connected successfully.');
  } catch (error) {
    logger.error('Error connecting to MongoDB:');
    console.error(error);
    process.exit(1);
  }
};
