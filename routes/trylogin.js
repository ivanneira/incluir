/**
 * Created by Ivan on 13/04/2018.
 */
var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {

    var user = req.body.user;
    var pass = req.body.pass;

    consultar(user,pass,function(response){
        if(response){
            req.session.user = user;
            res.send("dashboard");
        }else{
            res.send(false);
        }
    })
});

function consultar(user,pass,callback){

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
                callback(true);
            }
            else
            {
                callback(false);
            }
            //res.send(rows) ;

        })
        .catch(function(error){

            console.log(error);
            callback(false);
        });

     return false;
}



module.exports = router;

