import express from "express"
import paymentRouters from "./routers/payment.ruoters.js"
import { PORT } from "./config.js";
import path from "path"
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.json());
app.use(paymentRouters);
app.use(express.static(path.resolve("public")))


app.listen(PORT);

console.log("server on port", PORT)