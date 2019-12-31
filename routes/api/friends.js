const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Friend = require("../../models/Friend");
const validateFriendInput = require("../../validation/friends");

function _normalized(friends) {
  const normalizedObj = {};
  friends.forEach((friend) => {
    normalizedObj[friend._id] = friend;
  });
  return normalizedObj;
}

// A user's index of friends
router.get(
  "/user/:user_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Friend.find({ user: req.params.user_id })
      .then(friends => res.json(_normalized(friends)))
      .catch(err =>
        res
          .status(404)
          .json({ nofriendsfound: "No friends found from that user" })
      );
  }
);

// A friend show page
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Friend.findById(req.params.id)
      .then(friend => res.json(friend))
      .catch(err =>
        res.status(404).json({ nofriendfound: "No friend found with that ID" })
      );
  }
);

// Create a friend
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateFriendInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const newFriend = new Friend({
      name: req.body.name,
      user: req.user.id,
      dateOfBirth: req.body.dateOfBirth,
      children: req.body.children,
      siblings: req.body.siblings,
      pets: req.body.pets,
      parents: req.body.parents,
      hobbies: req.body.hobbies,
      currentCity: req.body.currentCity,
      currentCityYears: req.body.currentCityYears,
      pastCity: req.body.pastCity,
      pastCityYears: req.body.pastCityYears,
      undergradSchool: req.body.undergradSchool,
      undergradSchoolYears: req.body.undergradSchoolYears,
      gradSchool: req.body.gradSchool,
      gradSchoolYears: req.body.gradSchoolYears,
      employmentHistory: req.body.employmentHistory,
      currentEmploymentStatus: req.body.currentEmploymentStatus,
      notes: req.body.notes
    });

    newFriend.save().then(friend => res.json(friend));
  }
);

// Update a friend
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateFriendInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Friend.findByIdAndUpdate(req.params.id, req.body, (err) => {
      if (err) res.status(400).send(err);
    }).then(friend => res.json(friend));
  }
);

// Delete a friend
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Friend.findByIdAndDelete(req.params.id, (err) => {
      if (err) res.status(400).send(err);
    }).then(() => res.json({Success: "Deleted"}));
  }
);

// Search for friends
router.get(
  "/user/:user_id/search",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Friend.find({
      name: { $regex: req.query.result, $options: "i" },
      user: req.params.user_id
    })
      .then(friends => {
        res.json(_normalized(friends));
      })
      .catch(err =>
        res
          .status(404)
          .json({ nofriendsfound: "No friends found from the search." })
      );
  }
);

module.exports = router;