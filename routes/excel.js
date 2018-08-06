/**
 * Created by ien83 on 31/07/2018.
 */
var express = require('express');
var router = express.Router();
var async = require('async');
var excel = require('excel4node');


router.get('/', function(req, res, next) {

    var workbook = new excel.Workbook();
    var wsPlanillas = workbook.addWorksheet('planillas');
    //var wsEncuestas = workbook.addWorksheet('encuestas');
    var wsRegistros = workbook.addWorksheet('registros');

    var estiloFecha = workbook.createStyle({
        numberFormat: 'd/m/yy'
    });

    var estiloBold = workbook.createStyle({
        font: {
            bold: true
        }
    });

    var estiloCentrado = workbook.createStyle({
        alignment: {
            horizontal: 'center'
        }
    });

    function notnull(data){

        return data ? data : 'sin datos';
    }

    async.series([
            //planillas
            function(callback) {


                knex.raw("SELECT 	pl.id as idplanilla,	pl.nroplanilla as numeroplanilla,	u.usuario as usuario, 	pe.apellido as apellidosupervisor, 	pe.nombre as nombresupervisor,	pe2.apellido as apellidoencuestador, pe2.nombre as nombreencuestador, pl.fechahora as fechadecarga FROM 	planillas pl JOIN usuarios u on u.id = pl.usuarioid JOIN personas pe on pl.supervisorid = pe.id JOIN personas pe2 on pl.supervisorid = pe2.id ")
                    .then(function(row){

                        wsPlanillas.cell(1,1).string("ID").style(estiloBold);
                        wsPlanillas.cell(1,2).string("Planilla Numero").style(estiloBold);
                        wsPlanillas.cell(1,3).string("Usuario").style(estiloBold);
                        wsPlanillas.cell(1,4).string("Apellido Supervisor").style(estiloBold);
                        wsPlanillas.cell(1,5).string("Nombre Supervisor").style(estiloBold);
                        wsPlanillas.cell(1,6).string("Apellido Encuestador").style(estiloBold);
                        wsPlanillas.cell(1,7).string("Nombre Encuestador").style(estiloBold);
                        wsPlanillas.cell(1,8).string("Fecha de carga").style(estiloBold);

                        var filecounter = 2;

                        for(var index in row){

                            wsPlanillas.cell(filecounter,1).number(notnull(row[index].idplanilla)).style(estiloCentrado);
                            wsPlanillas.cell(filecounter,2).number(notnull(row[index].numeroplanilla)).style(estiloCentrado);
                            wsPlanillas.cell(filecounter,3).string(notnull(row[index].usuario));
                            wsPlanillas.cell(filecounter,4).string(notnull(row[index].apellidosupervisor));
                            wsPlanillas.cell(filecounter,5).string(notnull(row[index].nombresupervisor));
                            wsPlanillas.cell(filecounter,6).string(notnull(row[index].apellidoencuestador));
                            wsPlanillas.cell(filecounter,7).string(notnull(row[index].nombreencuestador));
                            wsPlanillas.cell(filecounter,8).date(notnull(row[index].fechadecarga)).style(estiloFecha).style(estiloCentrado);

                            filecounter++;
                        }

                        wsPlanillas.column(1).setWidth(4);
                        wsPlanillas.column(2).setWidth(14);
                        wsPlanillas.column(3).setWidth(18);
                        wsPlanillas.column(4).setWidth(18);
                        wsPlanillas.column(5).setWidth(18);
                        wsPlanillas.column(6).setWidth(18);
                        wsPlanillas.column(7).setWidth(18);
                        wsPlanillas.column(8).setWidth(13);

                        callback();
                    })
                    .catch(function(error){

                        console.log(error);

                    });
            },
            //registros
            function(callback) {

                knex.raw("execute spreporteincluirsalud")
                    .then(function(row){

                        wsRegistros.cell(1,1).string("ID").style(estiloBold);
                        wsRegistros.cell(1,2).string("Fecha de carga").style(estiloBold);
                        wsRegistros.cell(1,3).string("Numero de Planilla").style(estiloBold);
                        wsRegistros.cell(1,4).string("Encuestador").style(estiloBold);
                        wsRegistros.cell(1,5).string("Supervisor").style(estiloBold);
                        wsRegistros.cell(1,6).string("Apellido").style(estiloBold);
                        wsRegistros.cell(1,7).string("Nombre").style(estiloBold);
                        wsRegistros.cell(1,8).string("Fecha de nacimiento").style(estiloBold);
                        wsRegistros.cell(1,9).string("Fecha de defunción").style(estiloBold);
                        wsRegistros.cell(1,10).string("Sexo").style(estiloBold);
                        wsRegistros.cell(1,11).string("DNI").style(estiloBold);
                        wsRegistros.cell(1,12).string("Teléfono").style(estiloBold);
                        wsRegistros.cell(1,13).string("Departamento").style(estiloBold);
                        wsRegistros.cell(1,14).string("Localidad").style(estiloBold);
                        wsRegistros.cell(1,15).string("Domicilio").style(estiloBold);
                        wsRegistros.cell(1,16).string("Barrio").style(estiloBold);
                        wsRegistros.cell(1,17).string("Latitud").style(estiloBold);
                        wsRegistros.cell(1,18).string("Longitud").style(estiloBold);
                        wsRegistros.cell(1,19).string("Tipo de beneficiario").style(estiloBold);
                        wsRegistros.cell(1,20).string("Ingresos").style(estiloBold);
                        wsRegistros.cell(1,21).string("Pensiones").style(estiloBold);
                        wsRegistros.cell(1,22).string("Diagnósticos").style(estiloBold);
                        wsRegistros.cell(1,23).string("Prestaciones").style(estiloBold);
                        wsRegistros.cell(1,24).string("Cuántos conviven").style(estiloBold);
                        wsRegistros.cell(1,25).string("Cuántos integrantes").style(estiloBold);
                        wsRegistros.cell(1,26).string("Tipo de vivienda").style(estiloBold);
                        wsRegistros.cell(1,27).string("Servicios Básicos").style(estiloBold);
                        wsRegistros.cell(1,28).string("Falta de datos personales").style(estiloBold);
                        wsRegistros.cell(1,29).string("Falta de datos de localización").style(estiloBold);
                        wsRegistros.cell(1,30).string("Falta de datos de prestación").style(estiloBold);
                        wsRegistros.cell(1,31).string("Falta de datos de vivienda").style(estiloBold);
                        wsRegistros.cell(1,32).string("Comentario").style(estiloBold);

                        var filecounter = 2;

                        for(var index in row){

                            wsRegistros.cell(filecounter,1).number(notnull(row[index].id)).style(estiloCentrado);
                            wsRegistros.cell(filecounter,2).string(notnull(row[index].fechahora)).style(estiloCentrado);
                            wsRegistros.cell(filecounter,3).string(notnull(row[index].numeroplanilla)).style(estiloCentrado);
                            wsRegistros.cell(filecounter,4).string(notnull(row[index].encuestador));
                            wsRegistros.cell(filecounter,5).string(notnull(row[index].supervisor));
                            wsRegistros.cell(filecounter,6).string(notnull(row[index].apellido));
                            wsRegistros.cell(filecounter,7).string(notnull(row[index].nombre));
                            wsRegistros.cell(filecounter,8).string(notnull(row[index].fechanacimiento)).style(estiloCentrado);
                            wsRegistros.cell(filecounter,9).string(notnull(row[index].fechadefuncion)).style(estiloCentrado);
                            wsRegistros.cell(filecounter,10).string(notnull(row[index].sexo));
                            wsRegistros.cell(filecounter,11).string(notnull(row[index].dni));
                            wsRegistros.cell(filecounter,12).string(notnull(row[index].tel));
                            wsRegistros.cell(filecounter,13).string(notnull(row[index].departamento));
                            wsRegistros.cell(filecounter,14).string(notnull(row[index].localidad));
                            wsRegistros.cell(filecounter,15).string(notnull(row[index].domicilio));
                            wsRegistros.cell(filecounter,16).string(notnull(row[index].barrio));
                            wsRegistros.cell(filecounter,17).string(notnull(row[index].latitud)).style(estiloCentrado);
                            wsRegistros.cell(filecounter,18).string(notnull(row[index].longitud)).style(estiloCentrado);
                            wsRegistros.cell(filecounter,19).string(notnull(row[index].tipobeneficiario));
                            wsRegistros.cell(filecounter,20).string(notnull(row[index].ingresos)).style(estiloCentrado);
                            wsRegistros.cell(filecounter,21).string(notnull(row[index].pensiones));
                            wsRegistros.cell(filecounter,22).string(notnull(row[index].diagnosticos));
                            wsRegistros.cell(filecounter,23).string(notnull(row[index].prestaciones));
                            wsRegistros.cell(filecounter,24).string(notnull(row[index].conviven)).style(estiloCentrado);
                            wsRegistros.cell(filecounter,25).string(notnull(row[index].integrantes)).style(estiloCentrado);
                            wsRegistros.cell(filecounter,26).string(notnull(row[index].vivienda));
                            wsRegistros.cell(filecounter,27).string(notnull(row[index].serviciosbasicos));
                            wsRegistros.cell(filecounter,28).string(notnull(row[index].motivopersonal));
                            wsRegistros.cell(filecounter,29).string(notnull(row[index].motivolocalizacion));
                            wsRegistros.cell(filecounter,30).string(notnull(row[index].motivoprestacion));
                            wsRegistros.cell(filecounter,31).string(notnull(row[index].motivovivienda));
                            wsRegistros.cell(filecounter,32).string(notnull(row[index].comentario));

                            filecounter++;

                        }

                        wsRegistros.column(1).setWidth(4);
                        wsRegistros.column(2).setWidth(20);
                        wsRegistros.column(3).setWidth(17);
                        wsRegistros.column(4).setWidth(20);
                        wsRegistros.column(5).setWidth(20);
                        wsRegistros.column(6).setWidth(15);
                        wsRegistros.column(7).setWidth(15);
                        wsRegistros.column(8).setWidth(20);
                        wsRegistros.column(9).setWidth(20);
                        wsRegistros.column(10).setWidth(12);
                        wsRegistros.column(11).setWidth(15);
                        wsRegistros.column(12).setWidth(18);
                        wsRegistros.column(13).setWidth(20);
                        wsRegistros.column(14).setWidth(20);
                        wsRegistros.column(15).setWidth(30);
                        wsRegistros.column(16).setWidth(20);
                        wsRegistros.column(17).setWidth(18);
                        wsRegistros.column(18).setWidth(18);
                        wsRegistros.column(19).setWidth(18);
                        wsRegistros.column(20).setWidth(15);
                        wsRegistros.column(21).setWidth(30);
                        wsRegistros.column(22).setWidth(30);
                        wsRegistros.column(23).setWidth(30);
                        wsRegistros.column(24).setWidth(18);
                        wsRegistros.column(25).setWidth(18);
                        wsRegistros.column(26).setWidth(30);
                        wsRegistros.column(27).setWidth(30);
                        wsRegistros.column(28).setWidth(30);
                        wsRegistros.column(29).setWidth(30);
                        wsRegistros.column(30).setWidth(30);
                        wsRegistros.column(31).setWidth(30);
                        wsRegistros.column(32).setWidth(30);

                        callback();

                    })
                    .catch(function(error){

                        console.log(error);
                    });

            },
            /*
            //encuestas
            function(callback) {

                knex.raw("SELECT 1")
                    .then(function(row){

                        wsEncuestas.cell(1,1).string("ID").style(estiloBold);
                        wsEncuestas.cell(1,2).string("Usuario").style(estiloBold);
                        wsEncuestas.cell(1,3).string("Número de encuesta").style(estiloBold);
                        wsEncuestas.cell(1,4).string("Fecha").style(estiloBold);
                        wsEncuestas.cell(1,5).string("Encuestador").style(estiloBold);
                        wsEncuestas.cell(1,6).string("Fecha de nacimiento").style(estiloBold);
                        wsEncuestas.cell(1,7).string("Sexo").style(estiloBold);
                        wsEncuestas.cell(1,8).string("Departamento").style(estiloBold);
                        wsEncuestas.cell(1,9).string("¿Qué tipo de pensión tiene asignada?").style(estiloBold);
                        wsEncuestas.cell(1,10).string("¿Dónde se atiende?").style(estiloBold);
                        wsEncuestas.cell(1,11).string("¿Quién lo atiende?").style(estiloBold);
                        wsEncuestas.cell(1,12).string("¿Cuánto tiempo le llevó encontrar el turno?").style(estiloBold);
                        wsEncuestas.cell(1,13).string("¿Cómo fue atendido?").style(estiloBold);
                        wsEncuestas.cell(1,14).string("¿Le solicitaron estudios?").style(estiloBold);
                        wsEncuestas.cell(1,15).string("¿Le indicaron remedios?").style(estiloBold);
                        wsEncuestas.cell(1,16).string("¿Fue derivado a otro médico?").style(estiloBold);
                        wsEncuestas.cell(1,17).string("¿Cómo es atendido en la UGP?").style(estiloBold);
                        wsEncuestas.cell(1,18).string("¿Cuánto tiempo le llevó conseguir la prestación?").style(estiloBold);
                        wsEncuestas.cell(1,19).string("¿Conoce los beneficios del programa?").style(estiloBold);
                        wsEncuestas.cell(1,20).string("¿Quién le brindó información del Programa?").style(estiloBold);

                        var filecounter = 2;

                        for(var index in row){

                            wsEncuestas.cell(filecounter,1).number(row[index].id);
                            wsEncuestas.cell(filecounter,2).number(row[index].usuario);
                            wsEncuestas.cell(filecounter,3).string(row[index].numeroencuesta).style(estiloCentrado);
                            wsEncuestas.cell(filecounter,4).string(row[index].fechaencuesta).style(estiloCentrado);
                            wsEncuestas.cell(filecounter,5).string(row[index].encuestador);
                            wsEncuestas.cell(filecounter,6).string(row[index].fechanacimiento).style(estiloCentrado);
                            wsEncuestas.cell(filecounter,7).string(row[index].sexo);
                            wsEncuestas.cell(filecounter,8).date(row[index].departamento);
                            wsEncuestas.cell(filecounter,9).date(row[index].tipopension);
                            wsEncuestas.cell(filecounter,10).date(row[index].dondeseatiende);
                            wsEncuestas.cell(filecounter,11).date(row[index].quienloatiende);
                            wsEncuestas.cell(filecounter,12).date(row[index].cuantotiempo);
                            wsEncuestas.cell(filecounter,13).date(row[index].comoesatendido);
                            wsEncuestas.cell(filecounter,14).date(row[index].solicitaronestudios);
                            wsEncuestas.cell(filecounter,15).date(row[index].indicaronremedios);
                            wsEncuestas.cell(filecounter,16).date(row[index].fuederivado);
                            wsEncuestas.cell(filecounter,17).date(row[index].comoesatendidougp);
                            wsEncuestas.cell(filecounter,18).date(row[index].conseguirprestacion);
                            wsEncuestas.cell(filecounter,19).date(row[index].conocebeneficios);
                            wsEncuestas.cell(filecounter,20).date(row[index].brindoinformacion);

                            filecounter++;
                        }

                        wsEncuestas.column(1).setWidth(4);
                        wsEncuestas.column(2).setWidth(10);
                        wsEncuestas.column(3).setWidth(20);
                        wsEncuestas.column(4).setWidth(18);
                        wsEncuestas.column(5).setWidth(18);
                        wsEncuestas.column(6).setWidth(20);
                        wsEncuestas.column(7).setWidth(18);
                        wsEncuestas.column(8).setWidth(15);
                        wsEncuestas.column(9).setWidth(33);
                        wsEncuestas.column(10).setWidth(18);
                        wsEncuestas.column(11).setWidth(18);
                        wsEncuestas.column(12).setWidth(38);
                        wsEncuestas.column(13).setWidth(19);
                        wsEncuestas.column(14).setWidth(22);
                        wsEncuestas.column(15).setWidth(22);
                        wsEncuestas.column(16).setWidth(26);
                        wsEncuestas.column(17).setWidth(26);
                        wsEncuestas.column(18).setWidth(42);
                        wsEncuestas.column(19).setWidth(33);
                        wsEncuestas.column(20).setWidth(39);

                        callback();
                    })
                    .catch(function(error){

                        console.log(error);

                    });

            }
            */
        ],
        function(err, results) {
            workbook.write('padron.xlsx',res);
        });


});

module.exports = router;
