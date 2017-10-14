var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Home Page',
        lorenIpsumParagraph: 'Ut eget ullamcorper velit. Nullam volutpat odio vitae quam tristique tincidunt. Pellentesque facilisis ante id ex lobortis, ultrices fermentum ex malesuada. Nam pretium sem sed risus finibus dignissim. Donec aliquam erat eros, ut ultricies tortor vehicula id. Aenean ultrices erat nec nibh tincidunt commodo quis at est. Curabitur feugiat tellus quis varius dapibus. Aenean sollicitudin massa orci, non sodales quam placerat sed. Integer luctus libero in auctor molestie. Sed facilisis eu risus ut lacinia. Integer at porttitor turpis. Phasellus finibus ac augue eu aliquam. Morbi quis consectetur turpis. Integer laoreet molestie dapibus. Praesent at tortor elit. Mauris molestie ipsum ut augue porta, eu placerat urna sollicitudin.'});
});

/* GET home page. */
router.get('/index', function (req, res, next) {
    res.render('index', {title: 'Home Page',
        lorenIpsumParagraph: 'Ut eget ullamcorper velit. Nullam volutpat odio vitae quam tristique tincidunt. Pellentesque facilisis ante id ex lobortis, ultrices fermentum ex malesuada. Nam pretium sem sed risus finibus dignissim. Donec aliquam erat eros, ut ultricies tortor vehicula id. Aenean ultrices erat nec nibh tincidunt commodo quis at est. Curabitur feugiat tellus quis varius dapibus. Aenean sollicitudin massa orci, non sodales quam placerat sed. Integer luctus libero in auctor molestie. Sed facilisis eu risus ut lacinia. Integer at porttitor turpis. Phasellus finibus ac augue eu aliquam. Morbi quis consectetur turpis. Integer laoreet molestie dapibus. Praesent at tortor elit. Mauris molestie ipsum ut augue porta, eu placerat urna sollicitudin.'});
});

/* GET about page */
router.get('/about', function (req, res, next) {
    res.render('about',
            {
                title: 'About Page',
                lorenIpsumParagraph: 'Ut eget ullamcorper velit. Nullam volutpat odio vitae quam tristique tincidunt. Pellentesque facilisis ante id ex lobortis, ultrices fermentum ex malesuada. Nam pretium sem sed risus finibus dignissim. Donec aliquam erat eros, ut ultricies tortor vehicula id. Aenean ultrices erat nec nibh tincidunt commodo quis at est. Curabitur feugiat tellus quis varius dapibus. Aenean sollicitudin massa orci, non sodales quam placerat sed. Integer luctus libero in auctor molestie. Sed facilisis eu risus ut lacinia. Integer at porttitor turpis. Phasellus finibus ac augue eu aliquam. Morbi quis consectetur turpis. Integer laoreet molestie dapibus. Praesent at tortor elit. Mauris molestie ipsum ut augue porta, eu placerat urna sollicitudin.',
                lorenIpsumParagraph2: 'Ut eget ullamcorper velit. Nullam volutpat odio vitae quam tristique tincidunt. Pellentesque facilisis ante id ex lobortis, ultrices fermentum ex malesuada. Nam pretium sem sed risus finibus dignissim. Donec aliquam erat eros, ut ultricies tortor vehicula id. Aenean ultrices erat nec nibh tincidunt commodo quis at est. Curabitur feugiat tellus quis varius dapibus. Aenean sollicitudin massa orci, non sodales quam placerat sed. Integer luctus libero in auctor molestie. Sed facilisis eu risus ut lacinia. Integer at porttitor turpis. Phasellus finibus ac augue eu aliquam. Morbi quis consectetur turpis. Integer laoreet molestie dapibus. Praesent at tortor elit. Mauris molestie ipsum ut augue porta, eu placerat urna sollicitudin.'
            });
});

/* GET form page */
router.get('/form', function (req, res, next) {
    res.render('form', {title: 'Form Page'});
});

/* POST result page from form page */
router.post('/result', function (req, res, next) {
    res.render('result', {title: 'Result Page',
        name: req.body.name,
        email: req.body.email,
        comments: req.body.comments});
});



module.exports = router;
