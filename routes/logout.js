/**
 * Created by Ivan on 16/04/2018.
 */

var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {

    req.session.user = undefined;
    req.session.user = undefined;

    res.redirect('/');

});

module.exports = router;

