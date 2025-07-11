import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'dotenv/config';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';

import testRoutes from './routes/test.routes';
import loggerMiddleware from './middlewares/logger';
import errorHandler from './middlewares/errorHandler';

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(loggerMiddleware);

// Swagger setup
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas
app.use('/api/test', testRoutes);

// Error handler
app.use(errorHandler);

const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
  console.log(`📚 Documentación Swagger en http://localhost:${PORT}/api-docs`);
});
