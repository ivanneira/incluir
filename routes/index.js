var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Incluir Salud', server_url: server_url, server_host: server_host, server_port: server_port });

});

module.exports = router;
