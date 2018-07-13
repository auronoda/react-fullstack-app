const keys = require("../config/keys");
const stripe = require("stripe")(keys.StripeSecretKey);
const requireLogin = require("../middlewares/requireLogin.js");

module.exports = app => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "for credits",
      source: req.body.id
    });
    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
  });
};