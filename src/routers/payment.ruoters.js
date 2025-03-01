import { Router } from "express";
import {createPayment} from "../controllers/payment.controllers.js"

const router = Router();

router.post("/checkout",createPayment)
router.get("/success", (req, res) => res.send("success"))
router.get("/cancel", (req, res)=> res.send("cancel"))


export default router;