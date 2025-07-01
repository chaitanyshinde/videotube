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
app.use(cookieParser())

//for configuration app.use() used above

export { app };


//why app.use()?
//cors?