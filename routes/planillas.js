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

module.exports = router;
