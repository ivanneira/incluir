var express = require('express');
var router = express.Router();
const http = require('http');


/* GET home page. */
router.get('/', function(req, resq, next) {

    var ID = req.param('id');

    //cambiar dirección de IP fija por parámetros globales
    http.get(server_host + ":" + server_port + server_url +"/api/IncluirSalud/ObtenerEncuesta?id="+ID, (res) => {
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

            if(datatosend['ConoceBeneficioPrograma'] == 'true')
            {
                datatosend['ConoceBeneficioPrograma'] = "Si";
            }
            else
            {
                datatosend['ConoceBeneficioPrograma'] = "No";
            }

            if(datatosend['Derivado'] == 'true')
            {
                datatosend['Derivado'] = "Si";
            }
            else
            {
                datatosend['Derivado'] = "No";
            }

            switch(datatosend['DemoraRemedios'])
            {
                case 1:
                {
                    datatosend['DemoraRemedios']  = "En el dia.";
                }break;

                case 2:
                {
                    datatosend['DemoraRemedios']  = "Más de un dia.";
                }break;

                case 3:
                {
                    datatosend['DemoraRemedios']  = "Más de una semana.";
                }break;

                case 4:
                {
                    datatosend['DemoraRemedios']  = "Más de un mes.";
                }break;

                case 5:
                {
                    datatosend['DemoraRemedios']  = "Más de un añño.";
                }break;

                default:
                    datatosend['DemoraRemedios']  = "Desconocido.";
            }

            resq.render('registroEncuesta',datatosend)

        }else{

            resq.send("No se econtraron datos del registro.")
        }

    })

    }).on('error', (e) => {
            console.log('Got error from Finhockey: ${e.message}');
    });


});


module.exports = router;
