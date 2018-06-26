var express = require('express');
var router = express.Router();
const http = require('http');

/* GET home page. */
router.get('/', function(req, resq, next) {

    //var filaID = req.body.id;

    http.get("http://192.168.3.105:45457/api/IncluirSalud/ObtenerFilaPlanilla?id=8", (res) => {
        //console.log(`Got resonse: ${res.statusCode}`);

        var body = "";

        res.on('data', function (chunk) {
            body += chunk;
        })

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

function isnull(reg){

    if(
            reg == null

    ){
        return '<i class="fa fa-times-circle"></i>';
    }else{
                return reg;
    }

}

module.exports = router;
