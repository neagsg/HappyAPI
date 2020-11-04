import 'reflect-metadata';
import express from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

import './database';
import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'tmp')));
app.use(routes);
app.use(errorHandler);

app.listen(3333, () => console.log('Server started'));
