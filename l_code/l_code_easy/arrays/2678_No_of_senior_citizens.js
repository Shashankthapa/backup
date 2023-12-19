// The first ten characters consist of the phone number of passengers.
// The next character denotes the gender of the person.
// The following two characters are used to indicate the age of the person.
// The last two characters determine the seat allotted to that person.

// Return the number of passengers who are strictly more than 60 years old.

details = ["7868190130M7522","5303914400F9211","9273338290F4010"]

// console.log(details.filter(e => e.slice(11,13) > 60).map(e => e.slice(11,13)).length);
console.log(details.filter(e => e.substring(11,13) > 60))