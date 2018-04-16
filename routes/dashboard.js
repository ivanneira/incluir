/**
 * Created by Ivan on 13/04/2018.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    console.log(req.session.user);

    var user = req.session.user;

    if(user){

        res.render('dashboard', { title: 'Dashboard', user: user });
    }else{
        res.redirect('/');
    }


});

module.exports = router;
