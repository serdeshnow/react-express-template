import chalk from 'chalk';

/**
 * Логгер для приложения.
 */
const logger = {
  info: (message) => console.log(chalk.blue('[INFO]'), message),
  success: (message) => console.log(chalk.green('[OK]'), message),
  warn: (message) => console.warn(chalk.yellow('[WARN]'), message),
  error: (message) => console.error(chalk.red('[ERROR]'), message),
};

export default logger;
