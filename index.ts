import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 8000;

app.get('/', (req: Request, res: Response) => {
  res.send(`Hello from express + TS`);
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
