var express = require('express');
var router = express.Router();
const http = require('http');

var server_url = "";
var server_host = "http://localhost";
var server_port = 1941;


/* GET home page. */
router.get('/', function(req, resq, next) {

    var filaID = req.param('id');

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
