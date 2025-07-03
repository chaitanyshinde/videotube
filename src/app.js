import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"; // to do crud applications on browser cookies of user

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json({ limit: "16kb" })); // data coming in json form
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //data coming from url
app.use(express.static("public")); //public assets
app.use(cookieParser());

//routes import:
import userRouter from "./routes/user.routes.js";

//routes declaration:
app.use("/api/v1/users", userRouter); //middleware passes control to userRouter."/users/and then what ever specific route is" from userRouter.

export { app };