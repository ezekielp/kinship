const express = require("express");
const mongoose = require('mongoose');
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const passportAuth = require("./config/passport");

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
passportAuth(passport);

app.use("/api/users", users);
app.use("/api/friends", friends);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));