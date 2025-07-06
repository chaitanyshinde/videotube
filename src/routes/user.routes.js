import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router();

router.route("/register").post(
  upload.fields([ //upload middleware before registerUser.
    { 
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
//in app.js we have "/users". so now url becomes "/users/register".

router.route("/login").post(loginUser);
router.route("/logout").post(verifyJWT, logoutUser);


export default router;