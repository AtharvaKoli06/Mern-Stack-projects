import { Router } from "express";
import {
  registerUser,
  loginUser,
  google,
  signout,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/googleLogin").post(google);
router.route("/signOut").post(signout);

export default router;
