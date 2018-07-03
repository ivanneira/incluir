var planillasDATA = [];
var registrosDATA = [];
var encuestasDATA = [];
var editar = 0;
var ID = "";
var PlanillaID = "";

$(function(){

    //forzado a usuario 1
    //loadPlanillas(1);
    //loadEncuestas(1);
    fillDatatablePlanillas(1);
    fillDatatableEncuestas(1);


});

function fillDatatableEncuestas(userid){

    function fnFormatDetails(table_id, html) {
        var sOut = "<table id=\"encuestasTable_" + table_id + "\">";
        sOut += html;
        sOut += "</table>";
        return sOut;
    }


    var iTableCounter = 1;
    var oTable;
    var oInnerTable;
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
                "sEmptyTable":     "Ningún dato disponible en esta tabla",
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
            "columns": [


                { "data": "EncuestaID","title": "ID", "visible": false},
                { "data": "NumeroEncuesta","title": "NumeroEncuesta",},
                { "data": "FechaEncuesta", "title": "Fecha de Encuesta","format": 'M/D/YYYY',},
                { "data": "DepartamentoNombre","title": "Departamento",},



            ],

            "fnInitComplete": function(oSettings, json) {


                detailsTableHtml = $("#detailsTableEncuesta").html();

                var nCloneTh = document.createElement('th');


                /******************************/
                var nCloneTh2 = document.createElement('th');
                var nCloneTd2 = document.createElement('td');
                nCloneTd2.innerHTML =
                    '<button class="btn btn-small btn-success eliminaPlanilla " data-filaid="'+$("#encuestasTable").DataTable().row().data().PlanillaID+'"><i class="fa fa-plus"></i> </button>' +
                    '<button class="btn btn-small btn-secondary detallePlanilla " data-filaid="'+$("#encuestasTable").DataTable().row().data().PlanillaID+'"><i class="fa fa-info"></i> </button>' +
                    '<button class="btn btn-small btn-warning editarPlanilla " data-filaid="'+$("#encuestasTable").DataTable().row().data().PlanillaID+'"><i class="fa fa-pencil"></i> </button>' +
                    '<button class="btn btn-small btn-danger eliminaPlanilla " data-filaid="'+$("#encuestasTable").DataTable().row().data().PlanillaID+'"><i class="fa fa-trash"></i> </button>';

                //nCloneTd2.className = "center";

                $('#encuestasTable thead').each(function () {
                    this.insertBefore(nCloneTh2, this.childNodes[3]);
                    nCloneTh2.innerHTML = "Acciones"
                });



                $('#encuestasTable thead  tr').each(function () {
                    this.insertBefore(nCloneTh2, this.childNodes[3]);
                });

                $('#encuestasTable tbody tr').each(function () {
                    this.insertBefore(nCloneTd2.cloneNode(true), this.childNodes[3]);
                });
            }
        })
    });

}

function fillDatatablePlanillas(userid){
    function fnFormatDetails(table_id, html) {
        var sOut = "<table width='100%' id=\"exampleTable_" + table_id + "\">";
        sOut += html;
        sOut += "</table>";
        return sOut;
    }


    var iTableCounter = 1;
    var oTable;
    var oInnerTable;
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
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
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
            { "data": "EncuestadorNombre","title": "Encuestador"}

        ],
        "fnInitComplete": function(oSettings, json) {

            detailsTableHtml = $("#detailsTablePlanilla").html();

            var nCloneTh = document.createElement('th');
            var nCloneTd = document.createElement('td');
            nCloneTd.innerHTML = '<button class="btn btn-small btn-secondary fa fa-plus-circle">Abrir</button>';

            nCloneTd.className = "center";

            /******************************/
            var nCloneTh2 = document.createElement('th');
            var nCloneTd2 = document.createElement('td');
            nCloneTd2.innerHTML =   '<button class="btn btn-block btn-success eliminaPlanilla " data-filaid="'+$("#exampleTable").DataTable().row().data().PlanillaID+'"><i class="fa fa-plus"></i> Nuevo</button>' +
                                    '<button class="btn btn-block btn-secondary detallePlanilla " data-filaid="'+$("#exampleTable").DataTable().row().data().PlanillaID+'"><i class="fa fa-info"></i> Detalle</button>' +
                                    '<button class="btn btn-block btn-warning editarPlanilla " data-filaid="'+$("#exampleTable").DataTable().row().data().PlanillaID+'"><i class="fa fa-pencil"></i> Editar</button>' +
                                    '<button class="btn btn-block btn-danger eliminaPlanilla " data-filaid="'+$("#exampleTable").DataTable().row().data().PlanillaID+'"><i class="fa fa-trash"></i> Eliminar</button>';

            //nCloneTd2.className = "center";

            $('#exampleTable thead').each(function () {
                this.insertBefore(nCloneTh2, this.childNodes[3]);
                nCloneTh2.innerHTML = "Acciones"
            });



            $('#exampleTable thead  tr').each(function () {
                this.insertBefore(nCloneTh2, this.childNodes[3]);
            });


            $('#exampleTable tbody tr').each(function () {
                this.insertBefore(nCloneTd2.cloneNode(true), this.childNodes[3]);
            });
            /******************************/
            $('#exampleTable thead  tr').each(function () {
                this.insertBefore(nCloneTh, this.childNodes[0]);
            });


            $('#exampleTable tbody tr').each(function () {
                this.insertBefore(nCloneTd.cloneNode(true), this.childNodes[0]);
            });

            $('#exampleTable tbody td button').on('click', function () {

                var nTr = $(this).parents('tr')[0];
                var nTds = this;

                var id = $("#exampleTable").DataTable().row().data().PlanillaID;

                if (oTable.fnIsOpen(nTr)) {
                    /* This row is already open - close it */

                    $(this)
                        .removeClass('fa-minus-circle')
                        .addClass('fa-plus-circle');

                    oTable.fnClose(nTr);
                }
                else {
                    /* Open this row */
                    var rowIndex = oTable.fnGetPosition( $(nTds).closest('tr')[0] );
                    //var detailsRowData = newRowData[rowIndex].details;

                    //this.src = "http://i.imgur.com/d4ICC.png";
                    $(this)
                        .removeClass('fa-plus-circle')
                        .addClass('fa-minus-circle');

                    //oTable.fnOpen(nTr, fnFormatDetails(iTableCounter, detailsTableHtml), 'PlanillaID');
                    //oInnerTable = $("#exampleTable_" + iTableCounter).dataTable({
                        //this.src = "http://i.imgur.com/d4ICC.png";
                        oTable.fnOpen(nTr, fnFormatDetails(iTableCounter, detailsTableHtml), 'PlanillaHija');
                        oInnerTable = $("#exampleTable_" + iTableCounter).dataTable({

                        "bProcessing": true,
                        "sAjaxDataProp":"",

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
                            "sEmptyTable":     "Ningún dato disponible en esta tabla",
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

                                $(".PlanillaHija").attr('colspan','5');

                                var nCloneTh4 = document.createElement('th');
                                var nCloneTd4 = document.createElement('td');
                                nCloneTd4.innerHTML =   '<button class="btn btn-small btn-success eliminaPlanilla " data-filaid="'+$("#exampleTable").DataTable().row().data().PlanillaID+'"><i class="fa fa-plus"></i> </button>' +
                                    '&nbsp<button class="btn btn-small btn-secondary detallePlanilla " data-filaid="'+$("#exampleTable").DataTable().row().data().PlanillaID+'"><i class="fa fa-info"></i> </button>' +
                                    '&nbsp<button class="btn btn-small btn-warning editarPlanilla " data-filaid="'+$("#exampleTable").DataTable().row().data().PlanillaID+'"><i class="fa fa-pencil"></i> </button>' +
                                    '&nbsp<button class="btn btn-small btn-danger eliminaPlanilla " data-filaid="'+$("#exampleTable").DataTable().row().data().PlanillaID+'"><i class="fa fa-trash"></i> </button>';


                                $('.PlanillaHija thead tr').each(function () {
                                    console.dir(this)
                                    this.insertBefore(nCloneTh4, this.childNodes[3]);
                                    nCloneTh4.innerHTML = "Acciones"
                                });


                                $('.PlanillaHija tbody tr').each(function () {
                                    this.insertBefore(nCloneTd4.cloneNode(true), this.childNodes[3]);
                                });
                            }
                        });
                        iTableCounter = iTableCounter + 1;
                    }
                });
            }
        });
    });

}


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
                                            res[index].FechaPlanilla +
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
                                PlanillaID = "";
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
                            PlanillaID = "";

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