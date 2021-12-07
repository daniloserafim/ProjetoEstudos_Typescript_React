import express from 'express';
import cors from 'cors'; //5.2k (gzipped: 2.1k)
import routes from './routes';

const app = express();

app.use(cors());
app.use(routes);

app.listen(3333);