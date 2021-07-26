import express from "express";
const router = express.Router();
import { authUser, getUserProfile, registerUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
//products
// This will now be '/api/products' by default Hence name of file

//@desc authenticate user
//@route get req to /api/users
//@access Public
//router.route('/').post(registerUser)
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile)
router.route('/register').get(registerUser);


export default router;
