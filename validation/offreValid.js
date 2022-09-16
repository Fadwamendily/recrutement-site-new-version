const isEmpty = require('./isEmpty');
const validator = require("validator");

module.exports = function validateOffre(data) {

    let errors = {};

    data.title = !isEmpty(data.title) ? data.title : "";
    data.jobType = !isEmpty(data.jobType) ? data.jobType : "";
    data.duration = !isEmpty(data.duration) ? data.duration : "";
    data.salary = !isEmpty(data.salary) ? data.salary : "";
    data.appDeadline = !isEmpty(data.appDeadline) ? data.appDeadline : "";
    data.maxApplicant = !isEmpty(data.maxApplicant) ? data.maxApplicant : "";
    data.posAvailable = !isEmpty(data.posAvailable) ? data.posAvailable : "";
    data.skills = !isEmpty(data.skills) ? data.skills : "";
    data.bio = !isEmpty(data.bio) ? data.bio : ""


    if (validator.isEmpty(data.tilte)) {
        errors = "Required title";
    }
    if (validator.isEmpty(data.jobType)) {
        errors = "Required jobType";
    }
    if (validator.isEmpty(data.duration)) {
        errors = "Required duration"
    }
    if (validator.isEmpty(data.salary)) {
        errors = "Required salary"
    }
    if (validator.isEmpty(data.appDeadline)) {
        errors = "Required Application deadline"
    }
    if (validator.isEmpty(data.maxApplicant)) {
        errors = "Required maximum number of applicants"
    }
    if (validator.isEmpty(data.posAvailable)) {
        errors = "Required posAvailable"
    }
    if (validator.isEmpty(data.skills)) {
        errors = "Required skills"
    }
    if (validator.isEmpty(data.bio)) {
        errors = "Required bio"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}