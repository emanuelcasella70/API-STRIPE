import Stripe from "stripe"
import { KEY_PRIVATE_STRIPE } from "../config.js"

const sprite = new Stripe(KEY_PRIVATE_STRIPE)

export const createPayment = async(req, res) => {
    console.log(req.body)
    const session = await sprite.checkout.sessions.create({
        line_items:[{
            price_data:{
                product_data:{
                    name: req.body.nombre,
                    description:"articulo" ,
                },
                currency:"usd",
                unit_amount: req.body.valor,
            },
            quantity: 1,
        }],
        mode:"payment",
        success_url: "http://localhost:3000/success"
    })
    return res.json(session)
}