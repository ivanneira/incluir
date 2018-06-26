var planillasDATA = [];
var registrosDATA = [];
var encuestasDATA = [];
var editar = 0;
var ID = "";
var PlanillaID = "";

$(function(){

    //forzado a usuario 1
    loadPlanillas(1);
    loadEncuestas(1);


});


function loadEncuestas(userID){

    $.ajax(
        {
        url: server_host+":"+server_port+server_url+"/api/IncluirSalud/ObtenerEncuesta?id=" + userID,
        method: "GET",
        dataType: "json"
    })
        .done(function(res) {

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
                    '       <label class="btn btn-sm btn-warning editarEncuesta" data-id="' + res[index].EncuestaID + '"><i class="fa fa-pencil"></i> Editar</label>' +
                    '       <label class="btn btn-sm btn-danger eliminarEncuesta" data-id="' + res[index].EncuestaID + '"><i class="fa fa-trash"></i> Eliminar</label>' +
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
                    '                            Nº Planilla  ' +
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
                                            res[index].NumeroPlanilla + '<p><span class="badge badge-dark">'+res[index].CantidadDeRegistros+' registros</p></span>'+
                    '                   </div>' +
                    '                   <div class="col-3">' +
                                             d +
                    '                   </div>' +
                    '                   <div class="col-3">' +
                                            res[index].EncuestadorNombre +
                    '                   </div>' +
                    '                   <div class="col-3 botonesList">' +
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
                                editar = 0;
                                ID=0;
                                PlanillaID = 0;
                                console.log($(this).data())

                                fillModal($(this).data().departamentoid, $(this).data().numeroplanilla, $(this).data().id);

                            });

                            $(".editarregistro").click(function () {
                                console.log($(this).data())
                                editar=1;
                                ID = $(this).data().id;
                                PlanillaID = $(this).data().filaid;
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
                                '       <label class="btn btn-sm btn-warning editarregistro" data-id="' + res[index].FilaPlanillaID + '" data-numeroplanilla="' + numeroplanilla + '" data-departamentoid="' + iddepartamento + '" data-filaid="' + idplanilla + '"><i class="fa fa-pencil"></i> Editar</label>' +
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

                            editar=0;
                            //console.log($(this).data())
                            ID=0;
                            PlanillaID = 0;

                            fillModal($(this).data().departamentoid, $(this).data().numeroplanilla, $(this).data().id);

                        });

                        $(".editarregistro").click(function () {
                            console.log($(this).data())
                            editar=1;
                            ID = $(this).data().id;
                            PlanillaID = $(this).data().filaid;
                            fillModal($(this).data().departamentoid, $(this).data().numeroplanilla, $(this).data().id, ID);
                            console.log("hola")
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

    }
}