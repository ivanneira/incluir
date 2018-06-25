var express = require('express');
var router = express.Router();
const http = require('http');

/* GET home page. */
router.get('/', function(req, resq, next) {

    //var filaID = req.body.id;

    http.get("http://192.168.3.105:45457/api/IncluirSalud/ObtenerFilaPlanilla?id=3", (res) => {
        //console.log(`Got resonse: ${res.statusCode}`);

        var body = "";

        res.on('data', function (chunk) {
            body += chunk;
        })

        res.on('end', function () {

            var data = JSON.parse(body);

            data = data[0];

            if(typeof(data) !== 'undefined'){

                resq.render('registro',{
                    Nombre: isnull(data.Nombre),
                    Apellido: isnull(data.Apellido),
                    FechaNacimiento: isnull(data.FechaNacimiento),
                    Telefono: isnull(data.Telefono),
                    Localidad: isnull(data.Localidad),
                    Domicilio: isnull(data.Domicilio),
                    Barrio: isnull(data.Barrio),
                    Latitud: isnull(data.Latitud),
                    Longitud: isnull(data.Longitud)


                });

            }else{

                resq.send("No se econtraron datos del registro.")
            }



        })

    }).on('error', (e) => {
        console.log(`Got error from Finhockey: ${e.message}`);
    });

    //res.render('registro', { title: 'Incluir Salud' });

});

function isnull(reg){

    if(
            reg == null

    ){
        return 'sin dato';
    }else{
                return reg;
    }

}

module.exports = router;
