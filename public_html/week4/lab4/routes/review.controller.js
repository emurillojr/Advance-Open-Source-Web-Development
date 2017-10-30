
var Review = require('./review.model');
var debug = require('debug')('lab4:employee'); // changed

module.exports.home = function (req, res) {

    if (req.method === 'POST') {

        var msg = '';

        Review.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            department: req.body.department,
            startDate: req.body.startDate,
            jobTitle: req.body.jobTitle,
            salary: req.body.salary

        })
                .then(function () {
                    msg = 'employee was Saved';
                    return;
                })
                .catch(function (err) {
                    msg = 'employee was not Saved, All fields required.';
                    return err;
                    //return err.message;   
                }).then(function (err) {
            res.render('index', {
                title: 'Add Employees',
                message: msg,
                error: err
            });
        });

    } else {
        res.render('index', {
            title: 'Add Employees',
            message: ''
        });
    }

};

module.exports.view = function (req, res) {

    Review
            .find()
            .exec()
            .then(function (results) {
                res.render('view', {
                    title: 'View Employees',
                    results: results
                });
            });

};

//added delete page and controller
module.exports.delete = function (req, res) {
    var id = req.params.id,
            removed = 'ID was not found';
    if (id) {
        Review.remove({_id: id})
                .then(function () {
                    removed = `${id} has been removed`;
                    finish();
                })
                .catch(function (err) {
                    removed = `${id} has not been removed`;
                    finish();
                });
    } else {
        finish();

    }
    function finish() {
        res.render('delete', {
            title: removed

        });
    }

};



module.exports.update = function (req, res) {

    var id = req.params.id;
    var msg = '';

    if (req.method === 'POST') {

        id = req.body._id;

        Review
                .findById(id)
                .exec()
                .then(function (reviewData) {

                    //debug(req.body);
                    // figure out why the data is not saving.        
                    reviewData.firstName = req.body.firstName;
                    reviewData.lastName = req.body.lastName;
                    reviewData.department = req.body.department;
                    reviewData.startDate = req.body.startDate,
                    reviewData.jobTitle = req.body.jobTitle;
                    reviewData.salary = req.body.salary;

                    return reviewData.save();

                })
                .then(function () {
                    msg = 'data has been updated';
                    finish();
                })
                .catch(function () {
                    msg = 'data has NOT been updated';
                    finish();
                });

    }
    else{
        finish();
        
    }
    function finish() {
        Review
                .findOne({'_id': id})
                .exec()
                .then(function (results) {
                    res.render('update', {
                        title: 'Update Results',
                        message: msg,
                        results: results
                    });
                })
                .catch(function () {
                    res.render('notfound', {
                        message: 'Sorry ID not found'
                    });
                });
    }
    
};