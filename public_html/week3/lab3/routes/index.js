var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Home Page',
        numberChosen: 0});
});

/* POST home page. */
router.post('/index', function (req, res, next) {
    res.render('index', {title: 'Home Page',
        numberChosen: req.body.number});
});


module.exports = router;