import { app } from './app.ts';
import { connectDB } from './config/db.js';
import { config } from './config/config.ts';
import chalk from 'chalk';

const startServer = async (): Promise<void> => {
  await connectDB();

  app.listen(Number(config.port), config.host, () => {
    console.log(chalk.greenBright(`\nServer started on port ${config.port}`));
    console.log(chalk.greenBright(`Docs >> http://${config.host}:${config.port}/api-docs`));
    console.log(chalk.greenBright(`To terminate process, press ctrl + C\n\r`));
  });
};

startServer();
