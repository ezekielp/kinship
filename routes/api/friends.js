const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Friend = require("../../models/Friend");
const validateFriendInput = require("../../validation/friends");

router.get("/user/:user_id", (req, res) => {
  Friend.find({ user: req.params.user_id })
    .then(friends => res.json(friends))
    .catch(err =>
      res.status(404).json({ nofriendsfound: "No friends found from that user" })
    );
});

router.get("/:id", (req, res) => {
  Friend.findById(req.params.id)
    .then(friend => res.json(friend))
    .catch(err =>
      res.status(404).json({ nofriendfound: "No friend found with that ID" })
    );
});

