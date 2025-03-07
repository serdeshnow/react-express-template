import mongoose, { Schema, Document, Model, InferSchemaType } from 'mongoose';
import validator from 'validator';

// export interface IUser extends Document {
//   username: string;
//   email: string;
//   password: string;
// }

const userSchema = new Schema(
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
        validator: (value: string) => validator.isEmail(value),
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

export type IUser = InferSchemaType<typeof userSchema> & Document;

export const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);
