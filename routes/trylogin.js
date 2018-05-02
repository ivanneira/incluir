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

      knex
        .column('usuario','clave')
        .select()
        .from("usuarios")
        .where("usuario",'=', user)
        .andWhere("clave",'=', pass)
        .then(function(rows){
            console.log(1)
            console.log("rows")
            console.dir(rows)
            if(rows.length > 0) {
                return true;
            }
            else
            {
                return false;
            }
            //res.send(rows) ;

        })
        .catch(function(error){
            console.log(2)
            console.log(error);
            return false;
        });

     return false;
}



module.exports = router;

