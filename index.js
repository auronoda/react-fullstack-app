const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys.js");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./models/User.js");
require("./services/passport.js");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 3 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes.js")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, process.env.IP, function() {
  console.log("started");
});
