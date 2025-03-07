import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Express Swagger API',
      version: '1.0.0',
      description: 'API documentation for my Express.js template',
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Local server',
      },
    ],
  },
  apis: ['./src/routes/user.routes.ts'], // Укажите путь к вашим файлам с роутами
};

const swaggerSpec = swaggerJSDoc(options);

export default (app: any) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
