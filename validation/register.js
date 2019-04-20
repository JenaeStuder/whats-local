const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.userName = !isEmpty(data.userName) ? data.userName : "";
    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    data.zipCode = !isEmpty(data.zipCode) ? data.zipCode : "";
    data.userType = !isEmpty(data.userType) ? data.userType : "";
    // Name checks
    if (Validator.isEmpty(data.userName)) {
        errors.userName = "You must choose a user name";
    }
    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "Name fields cannot be blank";
    }
    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "Name fields cannot be blank";
    }
    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }
    // additional checks
    if (Validator.isEmpty(data.zipCode)) {
        errors.zipCode = "You must enter your zip code";
    }
    if (Validator.isEmpty(data.userType)) {
        errors.userType = "Please let us know if you are an artist";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};