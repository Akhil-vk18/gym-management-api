import express from 'express';
import dotenv from 'dotenv';
import connectdb from './utils/db.js';
import membersRouter from './routes/members.js';



const app = express();
dotenv.config();
connectdb();
app.use(express.json());
app.use('/api', membersRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));