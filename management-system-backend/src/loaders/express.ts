import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import morgan from "morgan";
const routes = require("../api/routes");
const configs = require("../configs");
interface AppProps {
  app: Application;
}
module.exports = async ({ app }: AppProps) => {
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  //logging the request
  app.use(morgan(":method :url :response-time"));

  //routes
  app.use(`/api/${configs.apiVersion}/`, await routes());

  //handling errors
  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log("error");
    const error = new Error("Not found");
    next(error);
  });

  //handling all errors
  app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(req.path, error.message);
    res.status(500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });
};
