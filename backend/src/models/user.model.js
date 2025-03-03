import mongoose from 'mongoose';
import validator from 'validator';

// /**
//  * TS style:
//  * @typedef {import('mongoose').Schema} Schema
//  * */

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: validator.isEmail,
        message: 'Invalid email',
      },
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const User = mongoose.model('User', userSchema);
