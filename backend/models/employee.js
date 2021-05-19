const mongoose = require('../db.js');
const router = require('../routes/routes.js');

const Employee = mongoose.model('Employee',{
    firstName : {type: String},
    lastName :{type: String},
    dob : {type: String},
    gender : {type: String},
    dept : {type: String}
})

module.exports = Employee;