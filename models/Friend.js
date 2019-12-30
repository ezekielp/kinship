const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FriendSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    dateOfBirth: {
      type: Date
    },
    children: {
      type: Array
    },
    siblings: {
      type: Array
    },
    pets: {
      type: Array
    },
    parents: {
      type: Array
    },
    hobbies: {
      type: Array
    },
    currentCity: {
      type: String
    },
    currentCityYears: {
      type: Number
    },
    pastCity: {
      type: String
    },
    pastCityYears: {
      type: Number
    },
    undergradSchool: {
      type: String
    },
    undergradSchoolYears: {
      type: Number
    },
    gradSchool: {
      type: String
    },
    gradSchoolYears: {
      type: Number
    },
    employmentHistory: {
      type: String
    },
    currentEmploymentStatus: {
      type: String
    },
    notes: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

module.exports = Friend = mongoose.model("Friend", FriendSchema);
