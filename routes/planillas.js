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

    res.render('planillas', { title: 'Planillas' });

});


router.get('/encuestadores', function(req, res, next) {


    var q = req.query.q;

    knex
        .column('id','apellido','nombre')
        .select()
        .from('encuestadores')
        .where('nombre', 'like', '%'+q+'%')
        .orWhere('apellido','like', '%'+q+'%')
        .andWhere('activo','=', 1)
        .then(function(rows){

            if(rows.length > 0) {
                res.setHeader('Content-Type', 'application/json');
                res.send(rows)
            }
            else
            {
               res.setHeader('Content-Type', 'application/json');
               res.send(false)
            }
        })
        .catch(function(error){
            console.log(error);
        });

});

router.get('/supervisores', function(req, res, next) {

    var q = req.query.q;

    knex
        .column('id','apellido','nombre')
        .select()
        .from('encuestadores')
        .where('nombre', 'like', '%'+q+'%')
        .orWhere('apellido','like', '%'+q+'%')
        .andWhere('activo','=', 1)
        .then(function(rows){

            if(rows.length > 0) {
                res.setHeader('Content-Type', 'application/json');
                res.send(rows)
            }
            else
            {
                res.setHeader('Content-Type', 'application/json');
                res.send(false)
            }
        })
        .catch(function(error){
            console.log(error);
        });

});


/*Trae Todas las Provincias de Argentina Solamente*/
/*Mas un valor cuyo PaisID = 1 que equivale al Valor [Sin Dato]*/



/*Trae Todas las Provincias de Argentina Solamente*/
/*Mas un valor cuyo PaisID = 1 que equivale al Valor [Sin Dato]*/

router.get('/getDepartamentos', function(req, res, next) {

    var q = req.query.q;

    knex
        .column('ID','Nombre')
        .select()
        .from('departamento')
        .where('ProvinciaID', '=', 18)
        .andWhere('Nombre','like', '%'+q+'%')
        .andWhere('Activa','=', 1)
        .then(function(rows){

            if(rows.length > 0) {
                res.setHeader('Content-Type', 'application/json');
                res.send(rows)
            }
            else
            {
                res.setHeader('Content-Type', 'application/json');
                res.send(false)
            }
        })
        .catch(function(error){
            console.log(error);
        });

});


/*Trae Todas las Localidades de San Juan Solamente*/
/*Hay que pasarle el DepartamentoID*/

router.get('/getLocalidades', function(req, res, next) {

/*
    if(typeof(req.query.DepartamentoID) == 'undefined')
    {
        res.setHeader('Content-Type', 'application/json');
        res.send(false)
    }
*/
    var q = req.query.q;
    //var DepartamentoID = req.query.DepartamentoID;

    //console.log("ssssssssssssssssssssssssssssssssssss")
    console.log(q)

    knex
        .column('ID','Nombre', 'DepartamentoID')
        .select()
        .from('localidad')
        .where('DepartamentoID', '=', q)
        //.andWhere('Nombre','like', '%'+q+'%')
        .andWhere('Activa','=', 1)
        .then(function(rows){

            if(rows.length > 0) {
                res.setHeader('Content-Type', 'application/json');
                res.send(rows)
            }
            else
            {
                res.setHeader('Content-Type', 'application/json');
                res.send(false)
            }
        })
        .catch(function(error){
            console.log(error);
        });

});

/**/
module.exports = router;
