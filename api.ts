import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());

// run css
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/form', (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, '../public/view/index.html'));
});

app.get('/form/submit', (req: Request, res: Response) => {
  const { username, password, email } = req.query;

  return res.json({
    username,
    password,
    email,
  });
});

app.post('/form/submit', (req: Request, res: Response) => {
  const { username, password, email } = req.body;
  return res.redirect(
    `/form/submit/?username=${username}&password=${password}&email=${email}`
  );
});

app.listen(3232);
