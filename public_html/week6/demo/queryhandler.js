
var debug = require('debug')('demo:queryHandler');

function search(query) {
    debug('search setup');

    var where = {};  //changed
    //added
    var key;
    for (key in query) {
        if (key.indexOf('_') === -1) {
            // (test1|test3) = .replace(/[\W_]+/g,'')
            // where[key] =  { $regex: new RegExp('.*?'+req.query[key]+.replace(/[\W_]+/g,'''.*') };     /////or
            where[key] = {$regex: new RegExp('.*?' + query[key] + '.*')};
        }
    }

    return where;
}

function sort(query) {
    debug('sort setup');
    var sort = {};
    if (query._sort) {
        var prefix = 1;
        if (query._sort.match(/-/))
            prefix = -1;
        var field = query._sort.replace(/-|\s/g, '');
        sort = {};
        sort[field] = prefix;
    }
    return sort;


}

//changed ***** from week 5 app.js
module.exports.cors = function (reg, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    next();
};


// enable Cross-Origin Resource Sharing (CORS) *****
//app.use(function(reg, res, next){
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
//    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');   
//    next();
//});



module.exports.search = function () {
    return function (req, res, next) {
        // Add the search functionality to the request object
        req.where = search(req.query);

        next();
    };
};

module.exports.sort = function () {
    return function (req, res, next) {
        // Add the options sort functionality to the request object
        if (!req.options)
            req.options = {};
        req.options.sort = sort(req.query);

        next();
    };
};