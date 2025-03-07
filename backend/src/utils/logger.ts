import chalk from 'chalk';

/**
 * Логгер для приложения.
 */
const logger = {
  info: (...messages: any) => console.log(chalk.blue('[INFO]'), messages),
  success: (message: any) => console.log(chalk.green('[OK]'), message),
  warn: (message: any) => console.warn(chalk.yellow('[WARN]'), message),
  error: (message: any) => console.error(chalk.red('[ERROR]'), message),
};

export default logger;
