/**
 * Created by Ivan on 18/04/2018.
 */
var express = require('express');
var router = express.Router();


var knex = require('knex')({
    client: 'mssql',
    connection: {
        host : '10.64.65.200',
        port: 5000,
        user : 'sa',
        password : 'Alamitos+2016',
        database : 'MSP-IncluirSalud'
    },
    debug: false,
    pool: { min: 0, max: 40 }
});



/* GET home page. */
router.get('/', function(req, res, next) {

    var user = req.session.user;
    var id = req.session.uid;


    if(typeof(user) !='undefined'){

        //res.render('dashboard', { title: 'Dashboard', user: user });
        res.render('planillas', { title: 'Planillas', user: user, id: id, server_url: server_url, server_host: server_host, server_port: server_port });
    }else{
        res.redirect('/');
    }

//res.render('planillas', { title: 'Planillas', user: user, id: id });

});


/**/
module.exports = router;


