var mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    department: {
        type: String,
        required: [true, 'Department is required'],
        min: 0,
        max: 5
    },
    startDate: {
        type: Date,
        required: [true, 'Start Date is required']
    },
    jobTitle: {
        type: String,
        required: [true, 'Job Title is required']
    },
    salary: {
        type: Number,
        required: [true, 'Salary is required'],
        min: 0,
        max: 10000000
    }
    
});

var Review = mongoose.model('employee', reviewSchema);  // table name

module.exports = Review;