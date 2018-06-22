var planillasDATA = [];
var registrosDATA = [];
var encuestasDATA = [];

$(function(){

    //forzado a usuario 1
    loadPlanillas(1);
    loadEncuestas(1);

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


function loadEncuestas(userID){

    $.ajax(
        {
        url: server_host+":"+server_port+server_url+"/api/IncluirSalud/ObtenerEncuesta?id=" + userID,
        method: "GET",
        dataType: "json"
    })
        .done(function(res) {

            //console.dir(res)

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

            for (var index in res) {

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
                    '       <label class="btn btn-sm btn-success infoEncuesta" data-id="' + res[index].EncuestaID + '"><i class="fa fa-info"></i> Detalle</label>' +
                    '       <label class="btn btn-sm btn-success editarEncuesta" data-id="' + res[index].EncuestaID + '"><i class="fa fa-pencil"></i> Editar</label>' +
                    '       <label class="btn btn-sm btn-danger eliminarEncuesta" data-id="' + res[index].EncuestaID + '"><i class="fa fa-trash"></i> Eliminar</label>' +
                    //'       <button id="agregarRegistro" class="btn btn-sm btn-success" data-id="' + res[index].PlanillaID + '">+Agregar Registro</button>' +
                    //'       <button class="btn btn-danger borrarPlanilla" data-id="' + res[index].PlanillaID + '">Borrar</button>' +
                    '   </td>' +
                    '</tr>';


                //console.log(res[index]);
            }

            $("#encuestasBody")
                .append(htmlStringEncuesta)

            $(".eliminarEncuesta").click(function ()
            {
                console.dir($(this).data())
                var id = $(this).data().id;

                /**/
                swal({
                    title: "Incluir Salud",
                    text: "El registro esta a punto de ser eliminado",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                    if (willDelete) {
                        $.ajax({
                            url: server_host + ":" + server_port + "/api/IncluirSalud/EliminarEncuesta?id=" + id,
                            method: "POST",
                            dataType: "json",

                            success: function (res) {
                                console.log(res)
                                swal("Registro eliminado!", {
                                    icon: "success",
                                });
                                setTimeout(function(){location.reload();},1500)

                            }
                        });

                    } else {
                        //swal("Your imaginary file is safe!");
                    }
                });
            })

        });



    }

function loadPlanillas(userID){

    $.ajax({
        url: server_host+":"+server_port+server_url+"/api/IncluirSalud/ObtenerPlanillas?id="+ userID,
        method: "GET",
        dataType: "json"
    })
        .done(function(res){

            //console.log(res)

            var htmlStringPlanillas =
                '<div id="accordion">';



            for(var index in res){



                // Split timestamp into [ Y, M, D, h, m, s ]
                var t = res[index].FechaPlanilla

                //console.log(t.slice(0,10))

                // Apply each element to the Date function
                //var d = new Date(Date.UTC(t[0], t[1]-1, t[2], t[3], t[4], t[5]));
                var d = t.slice(0,10).split('-');
                d = d[2] + '/' + d[1] + '/' + d[0];


                htmlStringPlanillas +=
                    '<div class="card">' +
                    '   <div class="card-header" id="heading'+ res[index].PlanillaID +'">' +
                    '       <h5 class="mb-0">' +
                    '           <button class="btn btn-block btnPlanilla" data-toggle="collapse" data-departamentoid="' +res[index].DepartamentoID + '" data-numeroplanilla="' +res[index].NumeroPlanilla + '" data-id="' +res[index].PlanillaID + '" data-target="#collapse'+ res[index].PlanillaID +'" aria-expanded="true" aria-controls="collapse'+ res[index].PlanillaID +'">' +
                    '               <div class="row font-weight-bold">' +
                    '                   <div class="col-3">' +
                    '                            Nº Planilla' +
                    '                   </div>' +
                    '                   <div class="col-3">' +
                    '                            Fecha' +
                    '                   </div>' +
                    '                   <div class="col-3">' +
                    '                            Encuestador' +
                    '                   </div>' +
                    '                   <div class="col-3">' +
                    '                            Acciones' +
                    '                   </div>' +
                    '               </div>' +
                    '               <div class="row">' +
                    '                   <div class="col-3">' +
                                            res[index].NumeroPlanilla +
                    '                   </div>' +
                    '                   <div class="col-3">' +
                                             d +
                    '                   </div>' +
                    '                   <div class="col-3">' +
                                            res[index].EncuestadorNombre +
                    '                   </div>' +
                    '                   <div class="col-3">' +
                    '                       <label class="btn btn-sm btn-success detallePlanilla " data-filaid="' + res[index].PlanillaID + '"><i class="fa fa-info"></i> Detalle</label>' +
                    '                       <label class="btn btn-sm btn-warning editarPlanilla " data-filaid="' + res[index].PlanillaID + '"><i class="fa fa-pencil"></i> Editar</label>' +
                    '                       <label class="btn btn-sm btn-danger eliminaPlanilla " data-filaid="' + res[index].PlanillaID + '"><i class="fa fa-trash"></i> Eliminar</label>' +
                    '                   </div>' +
                    '               </div>' +
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


            $(".eliminaPlanilla").click(function () {
                //console.dir($(this).data())
                var id = $(this).data().filaid;

                /**/
                swal({
                    title: "Incluir Salud",
                    text: "El registro esta a punto de ser eliminado",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                    if (willDelete) {
                        $.ajax({
                            url: server_host + ":" + server_port + "/api/IncluirSalud/EliminarPlanilla?id=" + id,
                            method: "POST",
                            dataType: "json",

                            success: function (res) {
                                console.log(res)
                                swal("Registro eliminado!", {
                                    icon: "success",
                                });
                                setTimeout(function(){location.reload();},1500)

                            }
                        });

                    } else {
                        //swal("Your imaginary file is safe!");
                    }
                });

                $(".btnPlanilla").click(function(){

                    var idplanilla = $(this).data().id;
                    var iddepartamento = $(this).data().departamentoid;
                    var numeroplanilla = $(this).data().numeroplanilla;

                    console.dir($(this).data())

                    $(".card-body")
                        .html("<p>Espere mientras se cargan los datos.</p>");

                    $.ajax({
                        url: server_host+":"+server_port+server_url+"/api/IncluirSalud/ObtenerFilasPlanilla?id=" + idplanilla,
                        method: "GET",
                        dataType: "json"
                    })
                        .done(function(res) {

                            console.log(res)

                            var htmlStringRegistro =
                                '<table class="table table-striped">' +
                                '<tr>' +
                                '<label class="btn btn-sm btn-success nuevoRegistro" data-id="' + idplanilla + '" data-numeroplanilla="' + numeroplanilla + '" data-departamentoid="' + iddepartamento + '"><i class="fa fa-plus"></i> Agregar nuevo registro</label>' +
                                '</tr>';

                            if (res.length === 0) {
                                htmlStringRegistro += '<p>No se encontraron registros.</p>';
                            }


                            for (var index in res) {

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
                                    '       <label class="btn btn-sm btn-success detalleregistro" data-filaid="' + res[index].FilaPlanillaID + '"><i class="fa fa-info"></i> Detalle</label>' +
                                    '       <label class="btn btn-sm btn-warning editarregistro" data-filaid="' + res[index].FilaPlanillaID + '"><i class="fa fa-pencil"></i> Editar</label>' +
                                    '       <label class="btn btn-sm btn-danger eliminaregistro" data-filaid="' + res[index].FilaPlanillaID + '"><i class="fa fa-trash"></i> Eliminar</label>' +
                                    '   </td>' +
                                    '</tr>'

                            }

                            htmlStringRegistro += '</div>';

                            $(".card-body")
                                .empty();

                            $("#planillaBody" + idplanilla)
                                .append(htmlStringRegistro)

                            $(".nuevoRegistro").click(function () {

                                console.log($(this).data())


                                fillModal($(this).data().departamentoid, $(this).data().numeroplanilla, $(this).data().id);

                            });

                            $(".editarregistro").click(function () {
                                console.log($(this).data())

                                fillModal($(this).data().departamentoid, $(this).data().numeroplanilla, $(this).data().id, $(this).data().filaid);
                            });


                            $(".eliminaregistro").click(function () {
                                console.dir($(this).data())
                                var id = $(this).data().filaid;

                                /**/
                                swal({
                                    title: "Incluir Salud",
                                    text: "El registro esta a punto de ser eliminado",
                                    icon: "warning",
                                    buttons: true,
                                    dangerMode: true,
                                })
                                    .then((willDelete) => {
                                    if (willDelete) {
                                        $.ajax({
                                            url: server_host + ":" + server_port + "/api/IncluirSalud/EliminarFilaPlanilla?id=" + id,
                                            method: "POST",
                                            dataType: "json",

                                            success: function (res) {
                                                console.log(res)
                                                swal("Registro eliminado!", {
                                                    icon: "success",
                                                });
                                                setTimeout(function(){location.reload();},1500)

                                            }
                                        });

                                    } else {
                                        //swal("Your imaginary file is safe!");
                                    }
                                });
                                /**/

                            })
                        })

                });
            });

            $(".btnPlanilla").click(function(){

                var idplanilla = $(this).data().id;
                var iddepartamento = $(this).data().departamentoid;
                var numeroplanilla = $(this).data().numeroplanilla;

                console.dir($(this).data())

                $(".card-body")
                    .html("<p>Espere mientras se cargan los datos.</p>");

                $.ajax({
                    url: server_host+":"+server_port+server_url+"/api/IncluirSalud/ObtenerFilasPlanilla?id=" + idplanilla,
                    method: "GET",
                    dataType: "json"
                })
                    .done(function(res) {

                        console.log(res)

                        var htmlStringRegistro =
                            '<table class="table table-success bg-white">' +
                            '<tr>' +
                            '<label class="btn btn-sm btn-success nuevoRegistro" data-id="' + idplanilla + '" data-numeroplanilla="' + numeroplanilla + '" data-departamentoid="' + iddepartamento + '"><i class="fa fa-plus"></i> Agregar nuevo registro</label>' +
                            '</tr>';

                        if (res.length === 0) {
                            htmlStringRegistro += '<p>No se encontraron registros.</p>';
                        }


                        for (var index in res) {

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
                                '       <label class="btn btn-sm btn-success detalleregistro" data-filaid="' + res[index].FilaPlanillaID + '"><i class="fa fa-info"></i> Detalle</label>' +
                                '       <label class="btn btn-sm btn-warning editarregistro" data-id="' + idplanilla + '" data-numeroplanilla="' + numeroplanilla + '" data-departamentoid="' + iddepartamento + '" data-filaid="' + res[index].FilaPlanillaID + '"><i class="fa fa-pencil"></i> Editar</label>' +
                                '       <label class="btn btn-sm btn-danger eliminaregistro" data-filaid="' + res[index].FilaPlanillaID + '"><i class="fa fa-trash"></i> Eliminar</label>' +
                                '   </td>' +
                                '</tr>'

                        }

                        htmlStringRegistro += '</div>';

                        $(".card-body")
                            .empty();

                        $("#planillaBody" + idplanilla)
                            .append(htmlStringRegistro)

                        $(".nuevoRegistro").click(function () {


                            //console.log($(this).data())


                            fillModal($(this).data().departamentoid, $(this).data().numeroplanilla, $(this).data().id);

                        });

                        $(".editarregistro").click(function () {
                            console.log($(this).data())

                            fillModal($(this).data().departamentoid, $(this).data().numeroplanilla, $(this).data().id, $(this).data().filaid);
                        });


                        $(".eliminaregistro").click(function () {
                            console.dir($(this).data())
                            var id = $(this).data().filaid;

                            /**/
                            swal({
                                title: "Incluir Salud",
                                text: "El registro esta a punto de ser eliminado",
                                icon: "warning",
                                buttons: true,
                                dangerMode: true,
                            })
                                .then((willDelete) => {
                                if (willDelete) {
                                    $.ajax({
                                        url: server_host + ":" + server_port + "/api/IncluirSalud/EliminarFilaPlanilla?id=" + id,
                                        method: "POST",
                                        dataType: "json",

                                        success: function (res) {
                                            console.log(res)
                                            swal("Registro eliminado!", {
                                                icon: "success",
                                            });
                                            setTimeout(function(){location.reload();},1500)

                                        }
                                    });

                                } else {
                                    //swal("Your imaginary file is safe!");
                                }
                        });
                            /**/

                        })
                    })

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