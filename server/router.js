'use strict';

var express = require('express'),
    router = express.Router();

router.get('/', function (req, res, next) {
    var index = router.options.index || '/';
    req.url = index;
    next();
});

module.exports = function (options) {
    router.options = options || {};
    return router;
};