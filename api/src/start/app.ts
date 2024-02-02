import express, { Application } from "express";
import morgan from "morgan";
import usersRouter from "../routes/users.routes";

const app: Application = express();

app.use(express.json());
app.use(morgan("dev"));

const baseURL = "/api";
app.use(baseURL + "/users", usersRouter);

export default app;
