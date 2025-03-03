import mongoose from 'mongoose';
import logger from '../utils/logger.js';
import { config } from './config.js';

export const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('MongoDB connected successfully.');
  } catch (error) {
    logger.error('Error connecting to MongoDB:');
    console.error(error);
    process.exit(1);
  }
};
