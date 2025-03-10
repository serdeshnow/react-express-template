import { app } from './app.js';
import { connectDB } from './config/db.js';
import { config } from './config/config.js';
import chalk from 'chalk';

const startServer = async () => {
  await connectDB();

  app.listen(config.port, () => {
    console.log(chalk.greenBright(`\nServer started on port ${config.port}`));
    console.log(chalk.greenBright(`Docs >> http://localhost:${config.port}/api-docs`));
    console.log(chalk.greenBright(`To terminate process, press ctrl + C\n\r`));
  });
};

startServer();
