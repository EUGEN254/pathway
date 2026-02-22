import express from "express";
import {
  getUser,
  googleLoginUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userControllers.js";
import { userAuth } from "../middleware/userAuth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/user-data", userAuth, getUser);
userRouter.post("/google-login", googleLoginUser);
userRouter.post("/logout", logoutUser);

export default userRouter;
