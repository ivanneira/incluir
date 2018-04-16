/**
 * Created by Ivan on 13/04/2018.
 */
var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {

    var user = req.body.user;
    var pass = req.body.pass;

    if(consultar(user,pass)){
        req.session.user = user;
        res.send("dashboard");
    }else{
        res.send(false);
    }

});

//TODO: consulta a la base de datos si coincide usuario y contraseña
function consultar(user,pass){

    return true;
}

module.exports = router;

