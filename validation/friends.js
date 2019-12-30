const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateFriendInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : "";
  data.dateOfBirth = validText(data.dateOfBirth.toString())
    ? data.dateOfBirth.toString()
    : "";

  if (!Validator.isLength(data.name, { min: 2, max: 50 })) {
    errors.name = "Name must be between 2 and 50 characters.";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (Validator.isAfter(data.dateOfBirth, Date().toString())) {
    errors.dateOfBirth = `Date of birth must be before ${Date().toString()}`;
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
