import 'reflect-metadata';
import express from 'express';

import './database';

const app = express();

app.post('/orphanages', (request, response) => {
  return response.json({ message: 'Hello World' });
});


app.listen(3333, () => console.log('Server started'));
