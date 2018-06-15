var planillasDATA = [];
var registrosDATA = [];
var encuestasDATA = [];

$(function(){

    //forzado a usuario 1
    loadPlanillas(1);

/*

    $.ajax({
        //id de usuario forzado a 1
        url: "http://192.168.3.105:45455/api/IncluirSalud/ObtenerPlanillas?id=1",
        method: "GET",
        dataType: "json"
    })
        .done(function(res){

            var htmlStringPlanilla =
                '<tr>' +
                '   <th>' +
                '       Nº Planilla' +
                '   </th>' +
                '   <th>' +
                '       Encuestador' +
                '   </th>' +
                '   <th>' +
                '       Departamento' +
                '   </th>' +
                '   <th>' +
                '       Acción' +
                '   </th>' +
                '</tr>';


            var htmlStringPlanilla =
                '';

            for(var index in res){

                htmlStringPlanilla +=
                    '<tr class="abrirplanilla" data-toggle="collapse"  href="#collapse' + res[index].PlanillaID + '" data-id="' + res[index].PlanillaID + '">' +
                    '   <td>' +
                    res[index].NumeroPlanilla +
                    '   </td>' +
                    '   <td>' +
                    res[index].EncuestadorNombre +
                    '   </td>' +
                    '   <td>' +
                    res[index].DepartamentoNombre +
                    '   </td>' +
                    '   <td>' +
                    //'       <button class="btn btn-sm btn-success editarPlanilla" data-toggle="collapse"  href="#collapse' + res[index].PlanillaID + '" data-id="' + res[index].PlanillaID + '">Ver</button>' +
                    //'       <button id="agregarRegistro" class="btn btn-sm btn-success" data-id="' + res[index].PlanillaID + '">+Agregar Registro</button>' +
                    //'       <button class="btn btn-danger borrarPlanilla" data-id="' + res[index].PlanillaID + '">Borrar</button>' +
                    '       <button class="btn btn-sm btn-success nuevoRegistro" data-numeroplanilla="' + res[index].NumeroPlanilla + '" data-departamentoid="' + res[index].DepartamentoID + '" data-id="' + res[index].PlanillaID + '">+Agregar Registro</button>' +
                    '   </td>' +
                    '</tr>' +
                    '<tr>' +
                    '   <td colspan="4">' +
                    '       <div class="collapse" id="collapse' + res[index].PlanillaID + '">' +
                    //'       <button class="btn btn-sm btn-success nuevoRegistro" data-numeroplanilla="' + res[index].NumeroPlanilla + '" data-departamentoid="' + res[index].DepartamentoID + '" data-id="' + res[index].PlanillaID + '">+Agregar Registro</button>' +
                    //'          <p>lorem</p>'+
                    '       </div>' +
                    '   </td>' +
                    '</tr>' +
                    '';



                //console.log(res[index]);
            }


            $("#planillasBody")
                .append(htmlStringPlanilla);

            $(".abrirplanilla").click(function(){

                console.log($(this).data().id)

                var idplanilla = $(this).data().id;

                $("#collapse"+idplanilla )
                    .empty()
                    .append("Espere mientras se cargan los datos por favor...");

                $.ajax({
                    url: "http://192.168.3.105:45455/api/IncluirSalud/ObtenerFilasPlanilla?id=" + idplanilla,
                    method: "GET",
                    dataType: "json"
                })
                    .done(function(res2){


                        console.log(res2);

                        var htmlStringFilaPlanillas = '';



                        for(var index in res2){

                            htmlStringFilaPlanillas +=
                                '<tr class="bg-dark text-light d-block">' +
                                '   <td>' +
                                res2[index].Nombre + " " + res2[index].Apellido +
                                '   </td>' +
                                '   <td>' +
                                    res2[index].Localidad +
                                '   </td>' +
                                '   <td>' +
                                    res2[index].Domicilio +
                                '   </td>' +
                                '   <td>' +
                                '       <button class="btn btn-sm btn-warning" data-id="' + res2[index].PlanillaID + '">Editar</button>' +
                                '   </td>' +
                                '</tr>'

                        }

                        if(res2 == ''){
                            htmlStringFilaPlanillas = 'No se encontraron registros en ésta planilla.';
                        }

                        $("#collapse"+idplanilla )
                            .empty()
                            .append(htmlStringFilaPlanillas);

                    })
                .fail(function(e){console.log(e)})

            });

            $(".nuevoRegistro").click(function(){

                console.log($(this).data())


                fillModal($(this).data().departamentoid,$(this).data().numeroplanilla,$(this).data().id);

            });
        });

    $.ajax({
        //id de usuario forzado a 1
        url: "http://192.168.3.105:45455/api/IncluirSalud/ObtenerEncuesta?id=1",
        method: "GET",
        dataType: "json"
    })
        .done(function(res){

            var htmlStringEncuesta =
                '<tr>' +
                '   <th>' +
                '       Nº de Encuesta' +
                '   </th>' +
                '   <th>' +
                '       Encuestador' +
                '   </th>' +
                '   <th>' +
                '       Departamento' +
                '   </th>' +
                '   <th>' +
                '       Acción' +
                '   </th>' +
                '</tr>';

            for(var index in res){

                htmlStringEncuesta +=
                    '<tr>' +
                    '   <td>' +
                    res[index].NumeroEncuesta +
                    '   </td>' +
                    '   <td>' +
                    res[index].EncuestadorNombre +
                    '   </td>' +
                    '   <td>' +
                    res[index].DepartamentoNombre +
                    '   </td>' +
                    '   <td>' +
                    '       <button class="btn btn-sm btn-success editarPlanilla" data-id="' + res[index].PlanillaID + '">Editar</button>' +
                    //'       <button id="agregarRegistro" class="btn btn-sm btn-success" data-id="' + res[index].PlanillaID + '">+Agregar Registro</button>' +
                    //'       <button class="btn btn-danger borrarPlanilla" data-id="' + res[index].PlanillaID + '">Borrar</button>' +
                    '   </td>' +
                    '</tr>';



                //console.log(res[index]);
            }

            $("#encuestasBody")
                .append(htmlStringEncuesta)



            //console.log(res)

        });

    */

});

function loadPlanillas(userID){

    $.ajax({
        url: "http://192.168.3.105:45455/api/IncluirSalud/ObtenerPlanillas?id="+ userID,
        method: "GET",
        dataType: "json"
    })
        .done(function(res){

            console.log(res)

            var htmlStringPlanillas =
                '<div id="accordion">';


            for(var index in res){

                htmlStringPlanillas +=
                    '<div class="card">' +
                    '   <div class="card-header" id="heading'+ res[index].PlanillaID +'">' +
                    '       <h5 class="mb-0">' +
                    '           <button class="btn btn-link btnPlanilla" data-toggle="collapse" data-id="' +res[index].PlanillaID + '" data-target="#collapse'+ res[index].PlanillaID +'" aria-expanded="true" aria-controls="collapse'+ res[index].PlanillaID +'">' +
                    '               <p>Planilla Nº: ' + res[index].PlanillaID + '  Fecha: '+ res[index].FechaPlanilla +'   Encuestador: '+ res[index].EncuestadorNombre + ' </p>' +
                    '           </button>' +
                    '       </h5>' +
                    '   </div>' +
                    '' +
                    '   <div id="collapse'+ res[index].PlanillaID +'" class="collapse" aria-labelledby="heading'+ res[index].PlanillaID +'" data-parent="#accordion">' +
                    '       <div class="card-body" id="planillaBody'+ res[index].PlanillaID +'">' +
                    '           <p>Espere mientras se cargan los datos...</p>' +
                    '       </div>' +
                    '   </div>' +
                    '</div>';

            }

            htmlStringPlanillas +=
                '</div>';

            $("#planillasBody")
                .append(htmlStringPlanillas);

            $(".btnPlanilla").click(function(){

                var idplanilla = $(this).data().id;

                $(".card-body")
                    .html("<p>Espere mientras se cargan los datos.</p>");

                $.ajax({
                    url: "http://192.168.3.105:45455/api/IncluirSalud/ObtenerFilasPlanilla?id=" + idplanilla,
                    method: "GET",
                    dataType: "json"
                })
                    .done(function(res){

                        console.log(res)

                        var htmlStringRegistro =
                            '<table class="table table-striped">';

                        if(res.length === 0){
                            htmlStringRegistro = '<p>No se encontraron registros.</p>';
                        }


                        for(var index in res){

                            htmlStringRegistro +=
                                '<tr>' +
                                '   <td>' +
                                        res[index].Nombre + ' ' + res[index].Apellido +
                                '   </td>' +
                                '   <td>' +
                                        res[index].DNI +
                                '   </td>' +
                                '   <td>' +
                                    res[index].Localidad +
                                '   </td>' +
                                '   <td>' +
                                '       <button class="btn btn-sm btn-warning">Editar</button>' +
                                '   </td>' +
                                '</tr>'

                        }

                        htmlStringRegistro += '</div>';

                        $(".card-body")
                            .empty();

                        $("#planillaBody"+idplanilla)
                            .append(htmlStringRegistro)
                    });

                console.log()
            });
        });



/*
    $.ajax({
        url: "http://192.168.3.105:45455/api/IncluirSalud/ObtenerPlanillas?id="+ userID,
        method: "GET",
        dataType: "json"
    })
        .done(function(res){

            planillasDATA = res;

            for(var index in planillasDATA){

                $.ajax({
                    url: "http://192.168.3.105:45455/api/IncluirSalud/ObtenerFilasPlanilla?id="+ planillasDATA[index].PlanillaID,
                    method: "GET",
                    dataType: "json"
                })
                    .done(function(res){


                        registrosDATA.push(res)
                    });
            }
        });



    console.log(registrosDATA)
    */
}

function loadRegistros(PlanillaID){







/*
    for(var index in planillasDATA){

        //console.log( planillasDATA[index].PlanillaID)

        $.ajax({
            url: "http://192.168.3.105:45455/api/IncluirSalud/ObtenerFilasPlanilla?id="+ planillasDATA[index].PlanillaID,
            method: "GET",
            dataType: "json"
        })
            .done(function(res){
                console.log(planillasDATA[index].PlanillaID)
                registrosDATA[planillasDATA[index].PlanillaID].registros = [];
                registrosDATA[planillasDATA[index].PlanillaID].registros.push(res);
            });


    }

    console.log(planillasDATA)
    //console.log(registrosDATA)

    //fillPlanillas();
    */
}

function fillPlanillas(){
    //console.dir(registros[0])

    var htmlStringPlanillas =
        '<div id="accordion">';



    for(var index in planillasDATA) {

        htmlStringPlanillas +=
            '<div class="card">' +
            '   <div class="card-header" id="heading' + planillasDATA[index].PlanillaID + '">' +
            '       <h5 class="mb-0">' +
            '           <button class="btn btn-link" data-toggle="collapse" data-target="#collapse' + planillasDATA[index].PlanillaID + '" aria-expanded="true" aria-controls="collapse' + planillasDATA[index].PlanillaID + '">' +
            planillasDATA[index].PlanillaID +
            '           </button>' +
            '       </h5>' +
            '   </div>';

        var indice = planillasDATA[index].PlanillaID;

        //console.log(planillasDATA[index].PlanillaID)
        //console.log(registros[indice])
        /*

         if(registros.length !== 0){

         for(var index2 in registros){

         htmlStringPlanillas +=
         '<div id="collapse'+ planillasDATA[index].PlanillaID +'" class="collapse show" aria-labelledby="heading'+ planillasDATA[index].PlanillaID +'" data-parent="#accordion">' +
         '<div class="card-body">' +
         registros[index2].Apellido +
         '</div>' ;
         }
         }

         htmlStringPlanillas += '</div>'

         }

         htmlStringPlanillas +=
         '</div>';

         console.log(htmlStringPlanillas)
         $("#planillasBody").append(htmlStringPlanillas);

         */
    }
}