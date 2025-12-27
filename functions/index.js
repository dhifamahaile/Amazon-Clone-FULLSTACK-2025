const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripeSec = process.env.STRIPE_KEY;
const stripe = require("stripe")(stripeSec);
const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

setGlobalOptions({ maxInstances: 10 });

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
  });
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    res.status(200).json({
      clientPaymentSecret: paymentIntent.client_secret,
    });
    console.log(clientPaymentSecret);
  } else {
    res.status(403).json({
      message: "Payment amount must be greater than zero, 0.",
    });
  }
});
exports.api = onRequest(app);
