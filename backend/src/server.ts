import express, { type Express, type Request, type Response } from 'express';
import authRouter from './routes/auth.routes';
import roomsRouter from './routes/rooms.routes';


const morgan = require('morgan');

const app: Express = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/auth', authRouter);
app.use('/rooms', roomsRouter);
const port = process.env.PORT || 8080;

console.log(`Server is running on port ${port}`);


app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Welcome to the API' });
});


app.listen(port);