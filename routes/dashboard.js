/**
 * Created by Ivan on 13/04/2018.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('dashboard', { title: 'Dashboard' });
});

module.exports = router;
