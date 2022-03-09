import express, { Application, RequestHandler } from "express";
import cors from "cors";
import bp from "body-parser";
import promBundle from "express-prom-bundle";
import apiProducts from "./routes/ProductRoutes";

const app: Application = express();
const port: number = 5000;

const mongoose = require("mongoose");
const mongoConnection = "mongodb+srv://admin:admin1234@dede-es3a.thyhc.mongodb.net/dede?retryWrites=true&w=majority";

const options: cors.CorsOptions = {
  origin: ["http://localhost:3000"],
};

const metricsMiddleware: RequestHandler = promBundle({ includeMethod: true });
app.use(metricsMiddleware);

app.use(cors(options));
app.use(bp.json());

app.use(apiProducts);

app
  .listen(process.env.PORT, (): void => {
    console.log("Restapi listening on " + process.env.PORT);
  })
  .on("error", (error: Error) => {
    console.error("Error occured: " + error.message);
  });

mongoose
  .connect(mongoConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err: Error) => {
    console.error(err);
  });