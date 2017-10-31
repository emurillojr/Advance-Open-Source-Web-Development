var Review = require('./review.model');
var debug = require('debug')('lab5:employee');

function sendJSONresponse(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.employeesReadAll = function(req, res) {
        
    debug('Getting all employees');
    Review
     .find()
     .exec()
     .then(function(results){
        sendJSONresponse(res, 200, results);
     })
     .catch(function(err){
        sendJSONresponse(res, 404, err);         
     });
    
};

module.exports.employeesReadOne = function(req, res) {
    
    if (req.params && req.params.employeeid) {
        debug('Getting single employee with id =', req.params.employeeid );
        
        Review
        .findById(req.params.employeeid)
        .exec()
        .then(function(results){
            sendJSONresponse(res, 200, results);
        }).catch(function(err){
            sendJSONresponse(res, 404, {
                "message": "employeeid not found"
            });
        });

    } else {
        sendJSONresponse(res, 404, {
            "message": "employeeid not found"
        });
    }
};

/*   POST a new review
 *   /api/v1/reviews 
 */
module.exports.employeesCreate = function(req, res) {
    
    debug('Creating a employee with data ', req.body);
    
    Review.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        department: req.body.department,
        startDate: req.body.startDate,
        jobTitle: req.body.jobTitle,
        salary: req.body.salary
    })
    .then(function(dataSaved){
        debug(dataSaved);
        sendJSONresponse(res, 201, dataSaved);
    })
    .catch(function(err){ 
        debug(err);
        sendJSONresponse(res, 400, err);
    });
     
};

module.exports.employeesUpdateOne = function(req, res) {
    
  if ( !req.params.employeeid ) {
    sendJSONresponse(res, 404, {
        "message": "Not found, employeeid is required"
    });
    return;
  }
  
  Review
    .findById(req.params.employeeid)
    .exec()
    .then(function(reviewData) {        
        //reviewData.author = req.body.author;
        //reviewData.rating = req.body.rating;
        //reviewData.reviewText = req.body.reviewText;
        reviewData.firstName = req.body.firstName;
        reviewData.lastName = req.body.lastName;
        reviewData.department = req.body.department;
        reviewData.startDate = req.body.startDate;
        reviewData.jobTitle = req.body.jobTitle;
        reviewData.salary = req.body.salary;

        return reviewData.save();
    })
    .then(function(data){
        sendJSONresponse(res, 200, data);
    })
    .catch(function(err){
        sendJSONresponse(res, 400, err);
    });
        
};

module.exports.employeesDeleteOne = function(req, res) {
  if ( !req.params.employeeid ) {
    sendJSONresponse(res, 404, {
        "message": "Not found, employeeid is required"
    });
    return;
  }
  
  Review
    .findByIdAndRemove(req.params.employeeid)
    .exec()
    .then(function(data){
        debug("employeeid id " + req.params.employeeid + " deleted");
        debug(data);
        sendJSONresponse(res, 204, null);
    })
    .catch(function(err){
        sendJSONresponse(res, 404, err);
    });
    
};