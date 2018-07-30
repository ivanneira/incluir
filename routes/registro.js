var express = require('express');
var router = express.Router();
const http = require('http');

/* GET home page. */
router.get('/', function(req, resq, next) {

    var filaID = req.param('id');

    var numeroPlanilla = req.param('numeroPlanilla');
    var nombreEncuestador = req.param('nombreEncuestador');
    var nombreSupervisor = req.param('nombreSupervisor');

    //cambiar dirección de IP fija por parámetros globales
    http.get(server_host + ":" + server_port + server_url +"/api/IncluirSalud/ObtenerFilaPlanilla?id="+filaID, (res) => {
        var body = "";

    res.on('data', function (chunk) {
        body += chunk;
    });

    res.on('end', function () {

        var data = JSON.parse(body);

        data = data[0];

        if(typeof(data) !== 'undefined'){

            var indices = Object.keys(data);
            var datatosend = {};


            for(var index in indices){

                datatosend[indices[index]] = data[indices[index]];
            }

            if(datatosend['Titularidad']){

                if(datatosend['Titularidad'] === 1){
                    datatosend['Titularidad'] = 'Titular';
                }else{
                    datatosend['Titularidad'] = 'Adherente';
                }

            }

            if(datatosend['motivoPersonalID'] === 1){
                datatosend['motivoPersonalID'] = null;
            }

            if(datatosend['motivoLocalizacionID'] === 1){
                datatosend['motivoLocalizacionID'] = null;
            }

            if(datatosend['motivoPrestacionID'] === 1){
                datatosend['motivoPrestacionID'] = null;
            }

            if(datatosend['motivoViviendaID'] === 1){
                datatosend['motivoViviendaID'] = null;
            }

            datatosend.numeroPlanilla = numeroPlanilla;
            datatosend.nombreEncuestador = nombreEncuestador;
            datatosend.nombreSupervisor = nombreSupervisor;

            resq.render('registro',datatosend)

        }else{

            resq.send("No se econtraron datos del registro.")
        }



    })

    }).on('error', (e) => {
            console.log(`Got error from Finhockey: ${e.message}`);
    });


});


module.exports = router;
