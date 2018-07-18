/**
 * Created by Ivan on 13/04/2018.
 */
var express = require('express');
var router = express.Router();
var userID = "";


router.post('/', function(req, res, next) {

    var user = req.body.user;
    var pass = req.body.pass;


    consultar(user,pass,function(response){
        if(response){
            console.log("userID",userID);
            req.session.uid = userID;
            req.session.user = user;
            //res.render("planillas");
            //res.redirect('/planillas');
            res.send('planillas');
            console.log("USUARIO CORRECTO")

        }else{
            console.log("USUARIO INNNN CORRECTO")
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
        .column('usuario','clave','ID')
        .select()
        .from("usuarios")
        .where("usuario",'=', user)
        .andWhere("clave",'=', pass)
        .andWhere('activo','=', 1)
        .then(function(rows){
            if(rows.length > 0) {
                userID = rows[0].ID;
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

