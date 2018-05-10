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
/*descomentar!
    if(typeof(user) !='undefined'){

        //res.render('dashboard', { title: 'Dashboard', user: user });
        res.render('planillas', { title: 'Planillas', user: user });
    }else{
        res.redirect('/');
    }

*/res.render('planillas', { title: 'Planillas', user: user });

});

/* GET tipos de pensión. */
router.get('/getTipoPension', function(req, res, next) {

    knex
        .column('id','nombre as text')
        .select()
        .from('tipoPension')
        .where('activo','=', 1)
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

/* GET tipos de vivienda. */
router.get('/getTipoVivienda', function(req, res, next) {

    knex
        .column('id','nombre as text')
        .select()
        .from('tipoVivienda')
        .where('activo','=', 1)
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

/* GET tipos de vivienda. */
router.get('/getTipoServicios', function(req, res, next) {

    knex
        .column('id','nombre as text')
        .select()
        .from('serviciosBasicos')
        .where('activo','=', 1)
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

router.get('/getCIE10', function(req, res, next) {


    var q = req.query.q;

    knex
        .column('id10 as id','dec10 as text')
        .select()
        .from('cie10')
        .where('dec10', 'like', '%'+q+'%')
        .orWhere('id10', 'like', '%'+q+'%')
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


router.get('/encuestadores', function(req, res, next) {
    /*

    var zonaID;
    var supervisorID;

    if(typeof(req.query.zonaID) != 'undefined')
    {
        zonaID = req.query.zonaID;
    }

    if(typeof(req.query.supervisorID) != 'undefined')
    {
        supervisorID = req.query.supervisorID;
    }
*/
    var q = req.query.q;

    knex
        .raw("select p.apellido + ', ' + p.nombre as text, p.id from personas  p left join tipofuncion tf on p.tipoFuncionID = tf.ID where tf.nombre  like '%"+ q +"%'")
        //.column('id', 'apellido', 'nombre')
        //.select()
        //.from('personas')
        //.where('nombre', 'like', '%' + q + '%')
        //.orWhere('apellido', 'like', '%' + q + '%')
        //.andWhere('personaSupervisorID', '!=', null)
        //.andWhere('zonaID', '=', zonaID)
        //.andWhere('activo', '=', 1)
        .then(function (rows) {

            if (rows.length > 0) {
                res.setHeader('Content-Type', 'application/json');
                res.send(rows)
            }
            else {
                res.setHeader('Content-Type', 'application/json');
                res.send(false)
            }
        })
        .catch(function (error) {
            console.log(error);
        });
/*
    if(zonaID !="")
    {
        knex
            .column('id', 'apellido', 'nombre')
            .select()
            .from('personas')
            .where('nombre', 'like', '%' + q + '%')
            .orWhere('apellido', 'like', '%' + q + '%')
            .andWhere('personaSupervisorID', '!=', null)
            //.andWhere('zonaID', '=', zonaID)
            .andWhere('activo', '=', 1)
            .then(function (rows) {

                if (rows.length > 0) {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(rows)
                }
                else {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(false)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    else if(supervisorID !="")
    {
        knex
            .column('id', 'apellido', 'nombre')
            .select()
            .from('personas')
            .where('nombre', 'like', '%' + q + '%')
            .orWhere('apellido', 'like', '%' + q + '%')
            .andWhere('personaSupervisorID', '=', supervisorID)
            .andWhere('activo', '=', 1)
            .then(function (rows) {

                if (rows.length > 0) {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(rows)
                }
                else {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(false)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    else {
        knex
            .column('id', 'apellido', 'nombre')
            .select()
            .from('personas')
            .where('nombre', 'like', '%' + q + '%')
            .orWhere('apellido', 'like', '%' + q + '%')
            .andWhere('personaSupervisorID', '!=', null)
            .andWhere('activo', '=', 1)
            .then(function (rows) {

                if (rows.length > 0) {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(rows)
                }
                else {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(false)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }*/
});

router.get('/supervisores', function(req, res, next) {

    //var zonaID = "";
    /*
    if(typeof(req.query.zonaID) != 'undefined')
    {
        zonaID = req.query.zonaID;
    }

*/
    var q = req.query.q;

    knex
        .raw("select p.apellido + ', ' + p.nombre as text, p.id from personas  p left join tipofuncion tf on p.tipoFuncionID = tf.ID where tf.nombre like '%"+ q +"%'")
        .then(function (rows) {
            if (rows.length > 0) {
                res.setHeader('Content-Type', 'application/json');
                res.send(rows)
            }
            else {
                res.setHeader('Content-Type', 'application/json');
                res.send(false)
            }
        })
        .catch(function (error) {
            console.log(error);
        });

/*
    if(zonaID != "")
    {
        knex
            .column('id', 'apellido', 'nombre','zonaID')
            .select()
            .from('personas')
            .where('nombre', 'like', '%' + q + '%')
            .orWhere('apellido', 'like', '%' + q + '%')
            .andWhere('personaSupervisorID', '=', null)
            .andWhere('zonaID', '=', zonaID)
            .andWhere('activo', '=', 1)
            .then(function (rows) {
                if (rows.length > 0) {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(rows)
                }
                else {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(false)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    else {
        knex
            .column('id', 'apellido', 'nombre')
            .select()
            .from('personas')
            .where('nombre', 'like', '%' + q + '%')
            .orWhere('apellido', 'like', '%' + q + '%')
            .andWhere('activo', '=', 1)
            .andWhere('personaSupervisorID', '=', null)
            .then(function (rows) {

                if (rows.length > 0) {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(rows)
                }
                else {
                    res.setHeader('Content-Type', 'application/json');
                    res.send(false)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
*/
});


/*Trae Todas las Provincias de Argentina Solamente*/
/*Mas un valor cuyo PaisID = 1 que equivale al Valor [Sin Dato]*/



/*Trae Todas las Provincias de Argentina Solamente*/
/*Mas un valor cuyo PaisID = 1 que equivale al Valor [Sin Dato]*/

router.get('/getDepartamentos', function(req, res, next) {

    //var q = req.query.q;

    knex
        .column('ID','Nombre')
        .select()
        .from('departamento')
        .where('ProvinciaID', '=', 18)
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
    //console.log(q)

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

/* GET pestaciones. */
router.get('/getPrestaciones', function(req, res, next) {

    knex
        .raw('exec getprestaciones')
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


