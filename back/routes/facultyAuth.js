import express from "express";
import { registerFaculty, loginFaculty, checkAuth ,facultyLogOut} from "../controllers/facultyController.js";


const router = express.Router();

router.post("/faculty-register", registerFaculty);
router.post("/facultylogin", loginFaculty);
router.get("/checkToken", checkAuth);
router.post("/faculty-logout",facultyLogOut);

export default router;