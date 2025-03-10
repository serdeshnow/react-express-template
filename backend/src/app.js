import { auth } from './middlewares/auth.middleware.js';
import { noteRoutes } from './routes/note.routes.js';
import { userRoutes } from './routes/user.routes.js';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerConfig from './config/swagger.js';

export const app = express();
swaggerConfig(app);

// // Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(morgan('dev'));
app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);

app.use('/user', userRoutes);
app.use('/note', noteRoutes);

// Middleware ограничивает доступ к иным ресурсам пока пользователь не залогинен
// app.use(auth);
