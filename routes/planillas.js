/**
 * Created by Ivan on 18/04/2018.
 */
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

    var user = req.session.user;
    var id = req.session.uid;
    var apenom = req.session.apenom;

    if(typeof(user) !='undefined'){


        res.render('planillas', { title: 'Planillas', user: user, id: id, apenom : apenom, server_url: server_url, server_host: server_host, server_port: server_port });
    }else{
        res.redirect('/');
    }


});


/**/
module.exports = router;


