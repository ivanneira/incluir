// var planillasDATA = [];
// var registrosDATA = [];
// var encuestasDATA = [];
var editar = 0;
//var ID = "";
var PlanillaID = "";

var registrostable;


$(function(){

    //forzado a usuario 1
    //loadPlanillas(1);
    //loadEncuestas(1);
    fillDatatablePlanillas(1);
    fillDatatableEncuestas(1);

    $("#volver").click(function(){

        $('#registros').hide();
        $('#encabezados').show();

        $('#agregarPlanilla').show();
        $('#agregarRegistroBotonPrincipal').hide();

        registrostable.destroy();
        $("#registrosTable").empty();

    });


});

function fillDatatableEncuestas(userid){

    // function fnFormatDetails(table_id, html) {
    //     var sOut = "<table id=\"encuestasTable_" + table_id + "\">";
    //     sOut += html;
    //     sOut += "</table>";
    //     return sOut;
    // }
    //
    //
    // var iTableCounter = 1;
    // var oTable;
    // var oInnerTable;
    var detailsTableHtml;

    //Run On HTML Build
    $(document).ready(function () {

        var oTable = $('#encuestasTable').dataTable({
            "bProcessing": true,
            "sAjaxDataProp":"",

            ajax: {
                url: server_host+":"+server_port+server_url+ '/api/incluirSalud/Obtenerencuesta?id=' + userid,
            },
            language: {
                "sProcessing":     "Cargando...",
                "sLengthMenu":     "Mostrar _MENU_ registros",
                "sZeroRecords":    "No se encontraron resultados",
                "sEmptyTable":     "No hay encuestas cargadas",
                "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix":    "",
                "sSearch":         "Buscar número de encuesta:",
                "sUrl":            "",
                "sInfoThousands":  ",",
                "sLoadingRecords": "C",
                "oPaginate": {
                    "sFirst":    "Primero",
                    "sLast":     "Último",
                    "sNext":     "Siguiente",
                    "sPrevious": "Anterior"
                },
                "oAria": {
                    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            },
            info: false,
            lengthMenu: [10,20],
            "columns": [


                { "data": "EncuestaID","title": "EncuestaID", "visible": false},
                { "data": "NumeroEncuesta","title": "NumeroEncuesta",},
                { "data": "FechaEncuesta", "title": "Fecha de Encuesta","format": 'M/D/YYYY',},
                { "data": "DepartamentoNombre","title": "Departamento",},



            ],

            "fnInitComplete": function(oSettings, json) {


                detailsTableHtml = $("#detailsTableEncuesta").html();

                var nCloneTh = document.createElement('th');
                var nCloneTh2 = document.createElement('th');
                var nCloneTd2 = document.createElement('td');

                $('#encuestasTable thead').each(function () {
                    this.insertBefore(nCloneTh2, this.childNodes[3]);
                    nCloneTh2.innerHTML = "Acciones"
                });



                $('#encuestasTable thead  tr').each(function () {
                    this.insertBefore(nCloneTh2, this.childNodes[3]);
                });

                $('#encuestasTable tbody tr').each(function (v,i) {


                    nCloneTd2.innerHTML =
                        //'&nbsp<button class="btn btn-small btn-success agregarEncuesta " data-encuestaid="'+$("#encuestasTable").DataTable().row(i).data().EncuestaID+'" data-toggle="tooltip" title="Nuevo"><i class="fa fa-plus"></i> </button>' +
                        //'&nbsp<button class="btn btn-small btn-secondary detalleEncuesta " data-encuestaid="'+$("#encuestasTable").DataTable().row(i).data().EncuestaID+'" data-toggle="tooltip" title="Ver"><i class="fa fa-info"></i> </button>' +
                        //'&nbsp<button class="btn btn-small btn-warning editarEncuesta " data-encuestaid="'+$("#encuestasTable").DataTable().row(i).data().EncuestaID+'" data-toggle="tooltip" title="Editar"><i class="fa fa-pencil"></i> </button>' +
                        '&nbsp<button onclick="eliminarEncuesta('+$("#encuestasTable").DataTable().row(i).data().EncuestaID+')" class="btn btn-small btn-danger eliminarEncuesta " data-encuestaid="'+$("#encuestasTable").DataTable().row(i).data().EncuestaID+'" data-toggle="tooltip" title="Eliminar"><i class="fa fa-trash"></i> </button>';


                    this.insertBefore(nCloneTd2.cloneNode(true), this.childNodes[3]);


                    $("#encuestasTable").attr('style','')

                });
            }
        })



    });

}

function fillDatatablePlanillas(userid){

    // function fnFormatDetails(table_id, html) {
    //     var sOut = "<table width='100%' id=\"exampleTable_" + table_id + "\">";
    //     sOut += html;
    //     sOut += "</table>";
    //     return sOut;
    // }


    //var iTableCounter = 1;
    //var oTable;
    //var oInnerTable;
    var detailsTableHtml;

    //Run On HTML Build
    $(document).ready(function () {

        var oTable = $('#exampleTable').dataTable({
            "bProcessing": true,
            "sAjaxDataProp":"",

        ajax: {
                url: server_host+":"+server_port+server_url+ '/api/incluirSalud/ObtenerPlanillas?id=' + userid
            },
            lengthMenu: [10,20],
            info: false,

            language: {
                "sProcessing":     "Cargando...",
                "sLengthMenu":     "Mostrar _MENU_ registros",
                "sZeroRecords":    "No se encontraron resultados",
                "sEmptyTable":     "No se encontraron resultados",
                "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix":    "",
                "sSearch":         "Buscar número de planilla:",
                "sUrl":            "",
                "sInfoThousands":  ",",
                "sLoadingRecords": "",
                "oPaginate": {
                        "sFirst":    "Primero",
                            "sLast":     "Último",
                            "sNext":     "Siguiente",
                            "sPrevious": "Anterior"
                    },
                    "oAria": {
                    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                }
            },
            "columns": [


                { "data": "PlanillaID","title": "Planilla ID", "visible": false},
                { "data": "NumeroPlanilla","title": "Nº Planilla"},
                { "data": "FechaPlanilla", "title": "Fecha de Planilla","format": 'M/D/YYYY'},
                { "data": "EncuestadorNombre","title": "Encuestador"},
                { "data": "SupervisorNombre", "title": "Supervisor"}

            ],
            "fnInitComplete": function(oSettings, json) {

                detailsTableHtml = $("#detailsTablePlanilla").html();

                var nCloneTh = document.createElement('th');
                var nCloneTd = document.createElement('td');

                nCloneTd
                    .className = "center";

                var nCloneTh2 = document.createElement('th');
                var nCloneTd2 = document.createElement('td');

                //nCloneTd2.className = "center";

                $('#exampleTable thead').each(function () {
                    this.insertBefore(nCloneTh2, this.childNodes[4]);
                    nCloneTh2.innerHTML = "Acciones"
                });



                $('#exampleTable thead  tr').each(function () {
                    this.insertBefore(nCloneTh2, this.childNodes[4]);
                });


                $('#exampleTable tbody tr').each(function (v,i) {

                    var table = $("#exampleTable");


                    nCloneTd2.innerHTML =
                        '<div class="row" style="width: 160px"><button onclick="mostarRegistros('+table.DataTable().row(i).data().PlanillaID+',\''+table.DataTable().row(i).data().EncuestadorNombre+'\',\''+table.DataTable().row(i).data().SupervisorNombre+'\',\''+table.DataTable().row(i).data().NumeroPlanilla+'\')" class="btn btn-small btn-info verRegistro " data-planillaid="'+$("#exampleTable").DataTable().row(i).data().PlanillaID+'"  data-toggle="tooltip" title="Abrir"><i class="fa fa-arrow-right"></i> </button>' +
                        //'&nbsp<button onclick="fillModal('+table.DataTable().row(i).data().NumeroPlanilla+','+table.DataTable().row(i).data().PlanillaID+')" class="btn btn-small btn-success agregarRegistro " data-planillaid="'+$("#exampleTable").DataTable().row(i).data().PlanillaID+'"  data-toggle="tooltip" title="Nuevo"><i class="fa fa-plus"></i></button>' +
                        '&nbsp<button class="btn btn-small btn-warning editarPlanilla " data-planillaid="'+table.DataTable().row(i).data().PlanillaID+'" data-toggle="tooltip" title="Editar"><i class="fa fa-pencil"></i></button>' +
                        '&nbsp<button onclick="eliminarPlanilla('+table.DataTable().row(i).data().PlanillaID+')" class="btn btn-small btn-danger eliminaPlanilla " data-planillaid="'+$("#exampleTable").DataTable().row(i).data().PlanillaID+'" data-toggle="tooltip" title="Eliminar"><i class="fa fa-trash"></i></button></div>';


                    this.insertBefore(nCloneTd2.cloneNode(true), this.childNodes[4]);
                });

            }

        });
    });

}

function mostarRegistros(planillaid,encuestadorNombre,supervisorNombre,numeroPlanilla){

    //console.log(planillaid)
    $('#agregarPlanilla').hide();
    //$('#agregarRegistroBotonPrincipal').show();

    var id = planillaid;

    $("#nuevoRegistro")
        .click(function(){
            fillModal(numeroPlanilla,planillaid);
        });

    $('#encabezados').hide();
    $('#registros').show();

    $("#plannillaTitulo").text("Planilla Nº:" + numeroPlanilla + ", Encuestador: " + encuestadorNombre + ", Supervisor: " + supervisorNombre);

    registrostable =$("#registrosTable").DataTable({

        "bProcessing": true,
        "sAjaxDataProp":"",
        "bDestroy": true,
        ajax: {
            url:  server_host+":"+server_port+server_url+ '/api/incluirSalud/ObtenerFilasPlanilla?id='+id,
        },

        paging: false,
        info: false,
        searching: false,
        sortable: false,
        ordering: false,

        language: {
            "sProcessing":     "Cargando...",
            "sLengthMenu":     "Mostrar _MENU_ registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "No se encontraron resultados",
            "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":    "",
            "sSearch":         "Buscar:",
            "sUrl":            "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":     "Último",
                "sNext":     "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        },
        "columns": [
            { "data": "FilaPlanillaID","title": "FilaPlanillaID", "visible": false},
            { "data": "Apellido","title": "Apellido",},
            { "data": "Localidad", "title": "Localidad",},
            { "data": "DNI", "title": "DNI",}
        ],

        "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull )
        {
            //var imgLink = aData['pic'];
            //var imgTag = '<img width="100px" src="' + imgLink + '"/>';
            //$('td:eq(0)', nRow).html(imgTag);
            //return nRow;
        },
        "fnInitComplete": function(oSettings, json) {

            //console.log("aca")
            //console.dir(json)
            //$(".PlanillaHija").attr('colspan','5');

            var nCloneTh4 = document.createElement('th');

            $("#registrosTable thead tr").each(function () {
                //console.dir(this)
                this.insertBefore(nCloneTh4, this.childNodes[3]);
                nCloneTh4.innerHTML = "Acciones"
            });


            if(typeof($("#registrosTable").DataTable().row().data()) !== 'undefined'){

                $("#registrosTable tbody tr").each(function (v,i) {

                    var nCloneTd4 = document.createElement('td');

                    var registrostable = $("#registrosTable");

                    nCloneTd4.innerHTML =

                        '<div class="row" style="width: 200px">' +
                        '<button onclick="verRegistro('+registrostable.DataTable().row(i).data().FilaPlanillaID +')" class="btn btn-small btn-secondary detalleRegitro" data-filaid="'+registrostable.DataTable().row(i).data().FilaPlanillaID +'" data-toggle="tooltip" title="Ver"><i class="fa fa-eye"></i> </button>' +
                        '&nbsp<button  onclick="fillModal('+registrostable.DataTable().row(i).data().NumeroPlanilla+','+planillaid+','+registrostable.DataTable().row(i).data().FilaPlanillaID+')" class="btn btn-small btn-warning editarRegistro" data-filaid="'+registrostable.DataTable().row(i).data().FilaPlanillaID +'" data-toggle="tooltip" title="Editar"><i class="fa fa-pencil"></i> </button>' +
                        '&nbsp<button onclick="eliminarRegistro('+registrostable.DataTable().row(i).data().FilaPlanillaID +')" class="btn btn-small btn-danger eliminarRegistro" data-filaid="'+registrostable.DataTable().row(i).data().FilaPlanillaID +'" data-toggle="tooltip" title="Eliminar"><i class="fa fa-trash"></i> </button></div>';


                    this.insertBefore(nCloneTd4.cloneNode(true), this.childNodes[4]);
                    //console.dir(this)
                });
            }

            $("#registrosTable").attr('style','');

        }
    });


}

function verRegistro(planillaid){

    window.open('/registro?id=' + planillaid);
}


// function loadEncuestas(userID){
//
//     $.ajax(
//         {
//         url: server_host+":"+server_port+server_url+"/api/IncluirSalud/ObtenerEncuesta?id=" + userID,
//         method: "GET",
//         dataType: "json"
//     })
//         .done(function(res) {
//
//             var htmlStringEncuesta =
//                 '<tr>' +
//                 '   <th>' +
//                 '       Nº de Encuesta' +
//                 '   </th>' +
//                 '   <th>' +
//                 '       Encuestador' +
//                 '   </th>' +
//                 '   <th>' +
//                 '       Departamento' +
//                 '   </th>' +
//                 '   <th>' +
//                 '       Acción' +
//                 '   </th>' +
//                 '</tr>';
//
//             for (var index in res) {
//
//                 htmlStringEncuesta +=
//                     '<tr>' +
//                     '   <td>' +
//                             res[index].NumeroEncuesta +
//                     '   </td>' +
//                     '   <td>' +
//                             res[index].EncuestadorNombre +
//                     '   </td>' +
//                     '   <td>' +
//                             res[index].DepartamentoNombre +
//                     '   </td>' +
//                     '   <td>' +
//                     '       <label class="btn btn-sm btn-success infoEncuesta" data-id="' + res[index].EncuestaID + '"><i class="fa fa-info"></i> Detalle</label>' +
//                     '       <label class="btn btn-sm btn-warning editarEncuesta" data-id="' + res[index].EncuestaID + '"><i class="fa fa-pencil"></i> Editar</label>' +
//                     '       <label class="btn btn-sm btn-danger eliminarEncuesta" data-id="' + res[index].EncuestaID + '"><i class="fa fa-trash"></i> Eliminar</label>' +
//                     '   </td>' +
//                     '</tr>';
//
//
//                 //console.log(res[index]);
//             }
//
//             $("#encuestasBody")
//                 .append(htmlStringEncuesta)
//
//
//
//         });
//
//
//
//     }
//
// function loadPlanillas(userID){
//
//     $.ajax({
//         url: server_host+":"+server_port+server_url+"/api/IncluirSalud/ObtenerPlanillas?id="+ userID,
//         method: "GET",
//         dataType: "json"
//     })
//         .done(function(res){
//
//             //console.log(res)
//
//             var htmlStringPlanillas =
//                 '<div id="accordion">';
//
//
//
//             for(var index in res){
//
//
//
//                 // Split timestamp into [ Y, M, D, h, m, s ]
//                 var t = res[index].FechaPlanilla
//
//
//
//                 htmlStringPlanillas +=
//                     '<div class="card">' +
//                     '   <div class="card-header" id="heading'+ res[index].PlanillaID +'">' +
//                     '       <h5 class="mb-0">' +
//                     '           <button class="btn btn-block btnPlanilla" data-toggle="collapse" data-departamentoid="' +res[index].DepartamentoID + '" data-numeroplanilla="' +res[index].NumeroPlanilla + '" data-id="' +res[index].PlanillaID + '" data-target="#collapse'+ res[index].PlanillaID +'" aria-expanded="true" aria-controls="collapse'+ res[index].PlanillaID +'">' +
//                     '               <div class="row font-weight-bold">' +
//                     '                   <div class="col-3">' +
//                     '                            Nº Planilla  ' +
//                     '                   </div>' +
//                     '                   <div class="col-3">' +
//                     '                            Fecha' +
//                     '                   </div>' +
//                     '                   <div class="col-3">' +
//                     '                            Encuestador' +
//                     '                   </div>' +
//                     '                   <div class="col-3">' +
//                     '                            Acciones' +
//                     '                   </div>' +
//                     '               </div>' +
//                     '               <div class="row">' +
//                     '                   <div class="col-3">' +
//                                             res[index].NumeroPlanilla + '<p><span class="badge badge-dark">'+res[index].CantidadDeRegistros+' registros</p></span>'+
//                     '                   </div>' +
//                     '                   <div class="col-3">' +
//                                             res[index].FechaPlanilla +
//                     '                   </div>' +
//                     '                   <div class="col-3">' +
//                                             res[index].EncuestadorNombre +
//                     '                   </div>' +
//                     '                   <div class="col-3 botonesList">' +
//                     '                       <label class="btn btn-sm btn-success detallePlanilla " data-filaid="' + res[index].PlanillaID + '"><i class="fa fa-info"></i> Detalle</label>' +
//                     '                       <label class="btn btn-sm btn-warning editarPlanilla " data-filaid="' + res[index].PlanillaID + '"><i class="fa fa-pencil"></i> Editar</label>' +
//                     '                       <label class="btn btn-sm btn-danger eliminaPlanilla " data-filaid="' + res[index].PlanillaID + '"><i class="fa fa-trash"></i> Eliminar</label>' +
//                     '                   </div>' +
//                     '               </div>' +
//                     '           </button>' +
//                     '       </h5>' +
//                     '   </div>' +
//                     '' +
//                     '   <div id="collapse'+ res[index].PlanillaID +'" class="collapse" aria-labelledby="heading'+ res[index].PlanillaID +'" data-parent="#accordion">' +
//                     '       <div class="card-body" id="planillaBody'+ res[index].PlanillaID +'">' +
//                     '           <p>Espere mientras se cargan los datos...</p>' +
//                     '       </div>' +
//                     '   </div>' +
//                     '</div>';
//
//             }
//
//             htmlStringPlanillas +=
//                 '</div>';
//
//             $("#planillasBody")
//                 .append(htmlStringPlanillas);
//
//
//             $(".eliminaPlanilla").click(function () {
//                 //console.dir($(this).data())
//                 var id = $(this).data().filaid;
//
//                 /**/
//                 swal({
//                     title: "Incluir Salud",
//                     text: "El registro esta a punto de ser eliminado",
//                     icon: "warning",
//                     buttons: true,
//                     dangerMode: true,
//                 })
//                     .then((willDelete) => {
//                     if (willDelete) {
//
//                         swal("Espere un momento...", "se está eliminando el registro", "info");
//                         $.ajax({
//                             url: server_host + ":" + server_port + "/api/IncluirSalud/EliminarPlanilla?id=" + id,
//                             method: "POST",
//                             dataType: "json",
//
//                             success: function (res) {
//                                 console.log(res)
//                                 swal("Registro eliminado!", {
//                                     icon: "success",
//                                 });
//                                 setTimeout(function(){location.reload();},1500)
//
//                             }
//                         });
//
//                     } else {
//                         //swal("Your imaginary file is safe!");
//                     }
//                 });
//
//                 $(".btnPlanilla").click(function(){
//
//                     var idplanilla = $(this).data().id;
//                     var iddepartamento = $(this).data().departamentoid;
//                     var numeroplanilla = $(this).data().numeroplanilla;
//
//                     console.dir($(this).data())
//
//                     $(".card-body")
//                         .html("<p>Espere mientras se cargan los datos.</p>");
//
//                     $.ajax({
//                         url: server_host+":"+server_port+server_url+"/api/IncluirSalud/ObtenerFilasPlanilla?id=" + idplanilla,
//                         method: "GET",
//                         dataType: "json"
//                     })
//                         .done(function(res) {
//
//                             console.log(res)
//
//                             var htmlStringRegistro =
//                                 '<table class="table table-striped">' +
//                                 '<tr>' +
//                                 '<label class="btn btn-sm btn-success nuevoRegistro" data-id="' + idplanilla + '" data-numeroplanilla="' + numeroplanilla + '" data-departamentoid="' + iddepartamento + '"><i class="fa fa-plus"></i> Agregar nuevo registro</label>' +
//                                 '</tr>';
//
//                             if (res.length === 0) {
//                                 htmlStringRegistro += '<p>No se encontraron registros.</p>';
//                             }
//
//
//                             for (var index in res) {
//
//                                 htmlStringRegistro +=
//                                     '<tr>' +
//                                     '   <td>' +
//                                     res[index].Nombre + ' ' + res[index].Apellido +
//                                     '   </td>' +
//                                     '   <td>' +
//                                     res[index].DNI +
//                                     '   </td>' +
//                                     '   <td>' +
//                                     res[index].Localidad +
//                                     '   </td>' +
//                                     '   <td>' +
//                                     '       <label class="btn btn-sm btn-success detalleregistro" data-filaid="' + res[index].FilaPlanillaID + '"><i class="fa fa-info"></i> Detalle</label>' +
//                                     '       <label class="btn btn-sm btn-warning editarregistro" data-filaid="' + res[index].FilaPlanillaID + '"><i class="fa fa-pencil"></i> Editar</label>' +
//                                     '       <label class="btn btn-sm btn-danger eliminaregistro" data-filaid="' + res[index].FilaPlanillaID + '"><i class="fa fa-trash"></i> Eliminar</label>' +
//                                     '   </td>' +
//                                     '</tr>'
//
//                             }
//
//                             htmlStringRegistro += '</div>';
//
//                             $(".card-body")
//                                 .empty();
//
//                             $("#planillaBody" + idplanilla)
//                                 .append(htmlStringRegistro)
//
//                             $(".nuevoRegistro").click(function () {
//                                 editar = 0;
//                                 ID=0;
//                                 PlanillaID = "";
//                                 console.log($(this).data())
//
//                                 fillModal($(this).data().departamentoid, $(this).data().numeroplanilla, $(this).data().id);
//
//                             });
//
//                             $(".editarregistro").click(function () {
//                                 console.log($(this).data())
//                                 editar=1;
//                                 ID = $(this).data().id;
//                                 PlanillaID = $(this).data().filaid;
//                                 fillModal($(this).data().departamentoid, $(this).data().numeroplanilla, $(this).data().id, $(this).data().filaid);
//                             });
//
//
//                             $(".eliminaregistro").click(function () {
//                                 console.dir($(this).data())
//                                 var id = $(this).data().filaid;
//
//                                 /**/
//                                 swal({
//                                     title: "Incluir Salud",
//                                     text: "El registro esta a punto de ser eliminado",
//                                     icon: "warning",
//                                     buttons: true,
//                                     dangerMode: true,
//                                 })
//                                     .then((willDelete) => {
//                                     if (willDelete) {
//
//                                         swal("Espere un momento...", "se está eliminando el registro", "info");
//
//                                         $.ajax({
//                                             url: server_host + ":" + server_port + "/api/IncluirSalud/EliminarFilaPlanilla?id=" + id,
//                                             method: "POST",
//                                             dataType: "json",
//
//                                             success: function (res) {
//                                                 console.log(res)
//                                                 swal("Registro eliminado!", {
//                                                     icon: "success",
//                                                 });
//                                                 setTimeout(function(){location.reload();},1500)
//
//                                             }
//                                         });
//
//                                     } else {
//                                         //swal("Your imaginary file is safe!");
//                                     }
//                                 });
//                                 /**/
//
//                             })
//                         })
//
//                 });
//             });
//
//             $(".btnPlanilla").click(function(){
//
//                 var idplanilla = $(this).data().id;
//                 var iddepartamento = $(this).data().departamentoid;
//                 var numeroplanilla = $(this).data().numeroplanilla;
//
//                 console.dir($(this).data())
//
//                 $(".card-body")
//                     .html("<p>Espere mientras se cargan los datos.</p>");
//
//                 $.ajax({
//                     url: server_host+":"+server_port+server_url+"/api/IncluirSalud/ObtenerFilasPlanilla?id=" + idplanilla,
//                     method: "GET",
//                     dataType: "json"
//                 })
//                     .done(function(res) {
//
//                         console.log(res)
//
//                         var htmlStringRegistro =
//                             '<table class="table table-success bg-white">' +
//                             '<tr>' +
//                             '<label class="btn btn-sm btn-success nuevoRegistro" data-id="' + idplanilla + '" data-numeroplanilla="' + numeroplanilla + '" data-departamentoid="' + iddepartamento + '"><i class="fa fa-plus"></i> Agregar nuevo registro</label>' +
//                             '</tr>';
//
//                         if (res.length === 0) {
//                             htmlStringRegistro += '<p>No se encontraron registros.</p>';
//                         }
//
//
//                         for (var index in res) {
//
//                             htmlStringRegistro +=
//                                 '<tr>' +
//                                 '   <td>' +
//                                 res[index].Nombre + ' ' + res[index].Apellido +
//                                 '   </td>' +
//                                 '   <td>' +
//                                 res[index].DNI +
//                                 '   </td>' +
//                                 '   <td>' +
//                                 res[index].Localidad +
//                                 '   </td>' +
//                                 '   <td>' +
//                                 '       <label class="btn btn-sm btn-success detalleregistro" data-filaid="' + res[index].FilaPlanillaID + '"><i class="fa fa-info"></i> Detalle</label>' +
//                                 '       <label class="btn btn-sm btn-warning editarregistro" data-id="' + res[index].FilaPlanillaID + '" data-numeroplanilla="' + numeroplanilla + '" data-departamentoid="' + iddepartamento + '" data-filaid="' + idplanilla + '"><i class="fa fa-pencil"></i> Editar</label>' +
//                                 '       <label class="btn btn-sm btn-danger eliminaregistro" data-filaid="' + res[index].FilaPlanillaID + '"><i class="fa fa-trash"></i> Eliminar</label>' +
//                                 '   </td>' +
//                                 '</tr>'
//
//                         }
//
//                         htmlStringRegistro += '</div>';
//
//                         $(".card-body")
//                             .empty();
//
//                         $("#planillaBody" + idplanilla)
//                             .append(htmlStringRegistro)
//
//                         $(".nuevoRegistro").click(function () {
//
//                             editar=0;
//                             //console.log($(this).data())
//                             ID=0;
//                             PlanillaID = "";
//
//                             fillModal($(this).data().departamentoid, $(this).data().numeroplanilla, $(this).data().id);
//
//                         });
//
//                         $(".editarregistro").click(function () {
//                             console.log($(this).data())
//                             editar=1;
//                             ID = $(this).data().id;
//                             PlanillaID = $(this).data().filaid;
//                             fillModal($(this).data().departamentoid, $(this).data().numeroplanilla, $(this).data().id, ID);
//                             console.log("hola")
//                         });
//
//
//                         $(".eliminaregistro").click(function () {
//                             console.dir($(this).data())
//                             var id = $(this).data().filaid;
//
//                             /**/
//                             swal({
//                                 title: "Incluir Salud",
//                                 text: "El registro esta a punto de ser eliminado",
//                                 icon: "warning",
//                                 buttons: true,
//                                 dangerMode: true,
//                             })
//                                 .then((willDelete) => {
//                                 if (willDelete) {
//
//                                     swal("Espere un momento...", "se está eliminando el registro", "info");
//                                     $.ajax({
//                                         url: server_host + ":" + server_port + "/api/IncluirSalud/EliminarFilaPlanilla?id=" + id,
//                                         method: "POST",
//                                         dataType: "json",
//
//                                         success: function (res) {
//                                             console.log(res)
//                                             swal("Registro eliminado!", {
//                                                 icon: "success",
//                                             });
//                                             setTimeout(function(){location.reload();},1500)
//
//                                         }
//                                     });
//
//                                 } else {
//                                     //swal("Your imaginary file is safe!");
//                                 }
//                         });
//                             /**/
//
//                         })
//                     })
//
//             });
//         });
// }
//

//
// function fillPlanillas(){
//     //console.dir(registros[0])
//
//     var htmlStringPlanillas =
//         '<div id="accordion">';
//
//
//
//     for(var index in planillasDATA) {
//
//         htmlStringPlanillas +=
//             '<div class="card">' +
//             '   <div class="card-header" id="heading' + planillasDATA[index].PlanillaID + '">' +
//             '       <h5 class="mb-0">' +
//             '           <button class="btn btn-link" data-toggle="collapse" data-target="#collapse' + planillasDATA[index].PlanillaID + '" aria-expanded="true" aria-controls="collapse' + planillasDATA[index].PlanillaID + '">' +
//                             planillasDATA[index].PlanillaID +
//             '           </button>' +
//             '       </h5>' +
//             '   </div>';
//
//         var indice = planillasDATA[index].PlanillaID;
//
//     }
// }

function eliminarEncuesta(encuestaID){


        console.dir(encuestaID);
        var id = encuestaID;

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
                swal("Espere un momento...", "se está eliminando el registro", "info");
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
}

function eliminarRegistro(FilaPlanillaID){

        var id = FilaPlanillaID;

        swal({
            title: "Incluir Salud",
            text: "El registro esta a punto de ser eliminado",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {



            if (willDelete) {
                swal("Espere un momento...", "se está eliminando el registro", "info");
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

    })
}

function eliminarPlanilla(planillaid){

    var id = planillaid;

    /**/
    swal({
        title: "ATENCION",
        text: "La planilla completa y todos sus registros están a punto de ser eliminados!! Ésta acción no se puede deshacer!!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {



        if (willDelete) {
            swal("Espere un momento...", "se está eliminando la planilla", "info");

            $.ajax({
                url: server_host + ":" + server_port + "/api/IncluirSalud/EliminarPlanilla?id=" + id,
                method: "POST",
                dataType: "json",

                success: function (res) {
                    console.log(res)
                    swal("Planilla eliminada!", {
                        icon: "success",
                    });
                    setTimeout(function(){location.reload();},1500)

                }
            });

        } else {

        }

    });

}