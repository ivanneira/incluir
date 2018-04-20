/**
 * Created by Ivan on 18/04/2018.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('planillas', { title: 'Planillas' });

});

module.exports = router;
