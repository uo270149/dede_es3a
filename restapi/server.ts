import express from 'express';
import cors from "cors";
import mongoose, { ConnectOptions } from 'mongoose';
import { json } from 'body-parser';
import { productRouter } from './routes/ProductRoutes';

const app = express()
app.use(json())

app.use(cors())

app.use(productRouter)


/* app.set('db', 'mongodb+srv://admin:admin1234@dede-es3a.thyhc.mongodb.net/dede?retryWrites=true&w=majority');

mongoose.connect(app.get('db'), () => {
  console.log('connected to database');
}) */

const db = process.env.DB_CONNECTION_STRING || 'mongodb+srv://admin:admin1234@dede-es3a.thyhc.mongodb.net/dede?retryWrites=true&w=majority';

mongoose.connect(db, () => {
  console.log('connected to database');
})


/* mongoose.connect('mongodb+srv://admin:admin1234@dede-es3a.thyhc.mongodb.net/dede?retryWrites=true&w=majority', () => {
  console.log('connected to database')
}) */

app
  .listen(5000, (): void => {
    console.log("Restapi listening on " + 5000);
  })
  .on("error", (error: Error) => {
    console.error("Error occured: " + error.message);
  });
