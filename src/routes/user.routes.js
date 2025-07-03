import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();

router.route("/register").post(registerUser); //in app.js we have "/users". so now url becomes "/users/register".



export default router;
