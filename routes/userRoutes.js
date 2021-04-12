import express from "express";
const router = express.Router();
import { authUser } from "../controllers/userController.js";
//products
// This will now be '/api/products' by default Hence name of file

//@desc authenticate user
//@route get req to /api/users
//@access Public
router.post("/login", authUser);

export default router;
