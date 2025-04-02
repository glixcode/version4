import express from "express";
import { userList } from "../controller/User.Controller.js";

const router = express.Router();

router.get('/', userList, (req,res) => {
    res.send(req.body.users)
})

export default router;