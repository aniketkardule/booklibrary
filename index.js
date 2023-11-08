import express from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import dbConnect from './config/db.js';
import router from './routes/router.js';

const app = express();
dotenv.config();
app.use(bodyParser.json());

const port = process.env.PORT;
dbConnect();

app.use('/api', router)

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
})