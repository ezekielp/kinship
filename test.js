const Validator = require("validator");

const dob = new Date('December 2, 2020');

const emptyStr = "";

const currentTime = Date().toString();
console.log(dob.toString());
console.log(currentTime);

console.log(`test 1: ${Validator.isAfter(dob.toString(), currentTime)}`);
console.log(`test 2: ${Validator.isAfter(emptyStr, currentTime)}`);