var express = require('express');
var router = express.Router();
var ctrlReviews = require('./review.controller');

// reviews
router.get('/employees', ctrlReviews.employeesReadAll);
router.get('/employees/:employeeid', ctrlReviews.employeesReadOne);
router.post('/employees', ctrlReviews.employeesCreate);
router.put('/employees/:employeeid', ctrlReviews.employeesUpdateOne);
router.delete('/employees/:employeeid', ctrlReviews.employeesDeleteOne);


module.exports = router;


