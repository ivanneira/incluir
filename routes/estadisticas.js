/**
 * Created by ien83 on 31/07/2018.
 */
var express = require('express');
var router = express.Router();
var async = require('async');


router.get('/', function(req, res, next) {

    var user = req.session.user;
    var id = req.session.uid;
    var apenom = req.session.apenom;

    if(typeof(user) !='undefined'){


        res.render('estadisticas', { title: 'estadisticas', user: user, id: id, apenom : apenom, server_url: server_url, server_host: server_host, server_port: server_port });
    }else{
        res.redirect('/');
    }


});


router.get('/totales', function(req, res, next) {


    async.series([
            //total de registros
            function(callback) {

                knex('filaplanilla')
                    .count('id as totalregistros')
                    .then(function(row){


                        callback(null, row[0]);
                    })
                    .catch(function(error){

                        console.log(error);
                    });


            },
            //total de planillas
            function(callback) {

                knex('planillas')
                    .count('id as totalplanillas')
                    .then(function(row){


                        callback(null, row[0]);
                    })
                    .catch(function(error){

                        console.log(error);

                    });
            },
            //planillas por usuario
            function(callback) {

                knex.raw("SELECT p.apellido, p.nombre, (SELECT COUNT(*) FROM planillas WHERE usuarioid = p.id) AS cantidad FROM usuarios AS p where (select count(*) from planillas WHERE usuarioid = p.id ) > 0 order by cantidad")
                    .then(function(row){

                        callback(null, row);
                    })
                    .catch(function(error){

                        console.log(error);

                    });
            },
            //planillas por supervisor
            function(callback) {

                knex.raw("SELECT p.apellido, p.nombre,(SELECT COUNT(*) FROM planillas WHERE supervisorid = p.id) AS cantidad FROM personas AS p where (select count(*) from planillas WHERE supervisorid = p.id ) > 0 order by cantidad")
                    .then(function(row){

                        callback(null, row);
                    })
                    .catch(function(error){

                        console.log(error);

                    });
            },
            //planillas por encuestador
            function(callback) {

                knex.raw("SELECT p.apellido, p.nombre,(SELECT COUNT(*) FROM planillas WHERE encuestadorid = p.id) AS cantidad FROM personas AS p where (select count(*) from planillas WHERE encuestadorid = p.id ) > 0 order by cantidad")
                    .then(function(row){

                        callback(null, row);
                    })
                    .catch(function(error){

                        console.log(error);

                    });
            },
            //total de encuestas
            function(callback) {

                knex('encuesta')
                    .count('id as totalencuestas')
                    .then(function(row){

                        callback(null, row[0]);
                    })
                    .catch(function(error){

                        console.log(error);
                    });

            },
            //total de registros por usuario
            function(callback) {

                knex.raw("select (u.apellido + ' ' + u.nombre) as usuario,  (SELECT COUNT(*) FROM filaPlanilla fp left join planillas p on fp.planillaID = p.ID WHERE p.usuarioID = u.ID) AS cantidad   FROM filaPlanilla fp   left join planillas p on p.ID = fp.planillaID  left join usuarios u on u.ID = p.usuarioID  group by u.apellido, u.nombre,u.ID ORDER BY cantidad ASC")
                    .then(function(row){

                        callback(null, row);
                    })
                    .catch(function(error){

                        console.log(error);

                    });

            },
            //total de registros por supervisor
            function(callback) {

                knex.raw("SELECT "+
                    "(u.apellido + ' ' + u.nombre) as supervisor, "+
                    "(SELECT COUNT(*) FROM filaPlanilla fp left join planillas p on fp.planillaID = p.ID WHERE " +
                    "p.supervisorID = u.ID) AS cantidad "+
                    "FROM filaPlanilla fp "+
                    "left join planillas p on p.ID = fp.planillaID "+
                    "left join personas u on u.ID = p.supervisorID "+
                    "group by u.apellido, u.nombre,u.ID")
                    .then(function(row){

                        callback(null, row);
                    })
                    .catch(function(error){

                        console.log(error);

                    });

            },
            //total de registros por encuestador
            function(callback) {

                knex.raw("SELECT " +
                    "(u.apellido + ' ' + u.nombre) as encuestador, " +
                    "(SELECT COUNT(*) FROM filaPlanilla fp left join planillas p on fp.planillaID = p.ID " +
                    "WHERE p.encuestadorID = u.ID) AS cantidad "+
                    "FROM filaPlanilla fp "+
                    "left join planillas p on p.ID = fp.planillaID "+
                    "left join personas u on u.ID = p.encuestadorID "+
                    "group by u.apellido, u.nombre,u.ID ORDER BY cantidad ASC")
                    .then(function(row){

                        callback(null, row);
                    })
                    .catch(function(error){

                        console.log(error);

                    });

            }
        ],

        function(err, results) {
            res.send(results)
        });

});

router.get('/puntos', function(req, res, next) {

    knex.raw("SELECT planillaid, latitud, longitud FROM filaplanilla WHERE latitud IS NOT NULL AND longitud IS NOT NULL")
        .then(function(rows){

           res.send(rows);
        })
        .catch(function(err){

            console.log(err);
        });
});



module.exports = router;