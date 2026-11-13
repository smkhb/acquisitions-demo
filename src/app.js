import express from 'express';  

export const app = express();

app.get('/', (_, res) => {
  res.status(200).json({message: 'Hello, World!'});
});

export default app;