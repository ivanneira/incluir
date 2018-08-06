// var planillasDATA = [];
// var registrosDATA = [];
// var encuestasDATA = [];
var editar = 0;
//var ID = "";
var PlanillaID = "";

var registrostable;

var planilla_back,supervisor_back,encuestador_back,numeroplanulla_back;

var userID = $("#uid").val();

$(function(){

    fillDatatablePlanillas(userID);
    fillDatatableEncuestas(userID);

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


    var detailsTableHtml;


        var oTable = $('#encuestasTable').DataTable({
            "bProcessing": true,
            "sAjaxDataProp":"",
            "bDestroy": true,
            ajax: {
                url: server_host+":"+server_port+server_url+ '/api/incluirSalud/Obtenerencuestas?id=' + userid,
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
            lengthMenu: [400],
            "columns": [


                { "data": "EncuestaID","title": "EncuestaID", "visible": false},
                { "data": "NumeroEncuesta","title": "NumeroEncuesta",},
                { "data": "FechaEncuesta", "title": "Fecha de Encuesta","format": 'M/D/YYYY',},
                { "data": "DepartamentoNombre","title": "Departamento",}

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


                    if(typeof($("#encuestasTable").DataTable().row(i).data()) != "undefined")
                    {
                        nCloneTd2.innerHTML =
                            '<div style="width: 100px">' +
                            '<button onclick="detalleEncuesta('+$("#encuestasTable").DataTable().row(i).data().EncuestaID+')" class="btn btn-small btn-secondary eliminarEncuesta " data-encuestaid="'+$("#encuestasTable").DataTable().row(i).data().EncuestaID+'" data-toggle="tooltip" title="Detalle"><i class="fa fa-eye"></i> </button>' +
                            '&nbsp<button onclick="eliminarEncuesta('+$("#encuestasTable").DataTable().row(i).data().EncuestaID+')" class="btn btn-small btn-danger eliminarEncuesta " data-encuestaid="'+$("#encuestasTable").DataTable().row(i).data().EncuestaID+'" data-toggle="tooltip" title="Eliminar"><i class="fa fa-trash"></i> </button>' +
                            '</div>';


                        this.insertBefore(nCloneTd2.cloneNode(true), this.childNodes[3]);

                    }

                });

                $("#encuestasTable").attr('style','')
            }
        })

}

function fillDatatablePlanillas(userid){


    var detailsTableHtml;


        var oTable = $('#exampleTable').dataTable({
            "bProcessing": true,
            "sAjaxDataProp":"",

        ajax: {
                url: server_host+":"+server_port+server_url+ '/api/incluirSalud/ObtenerPlanillas?id=' + userid
            },
            lengthMenu: [400],
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
                { "data": "CantidadDeRegistros","title": "Registros",},
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
                $(nCloneTh2).removeAttr('style');
                var nCloneTd2 = document.createElement('td');

                //nCloneTd2.className = "center";

                $('#exampleTable thead').each(function () {
                    this.insertBefore(nCloneTh2, this.childNodes[5]);
                    nCloneTh2.innerHTML = "Acciones"
                });



                $('#exampleTable thead  tr').each(function () {
                    this.insertBefore(nCloneTh2, this.childNodes[5]);
                });


                $('#exampleTable tbody tr').each(function (v,i) {

                    var table = $("#exampleTable");


                    if(typeof($("#exampleTable").DataTable().row(i).data()) != "undefined") {
                        nCloneTd2.innerHTML =
                            '<div class="row" style="width: 160px"><button onclick="mostarRegistros(' + table.DataTable().row(i).data().PlanillaID + ',\'' + table.DataTable().row(i).data().EncuestadorNombre + '\',\'' + table.DataTable().row(i).data().SupervisorNombre + '\',\'' + table.DataTable().row(i).data().NumeroPlanilla + '\')" class="btn btn-small btn-info verRegistro " data-planillaid="' + $("#exampleTable").DataTable().row(i).data().PlanillaID + '"  data-toggle="tooltip" title="Abrir"><i class="fa fa-arrow-right"></i> </button>' +
                            //'&nbsp<button onclick="fillModal('+table.DataTable().row(i).data().NumeroPlanilla+','+table.DataTable().row(i).data().PlanillaID+')" class="btn btn-small btn-success agregarRegistro " data-planillaid="'+$("#exampleTable").DataTable().row(i).data().PlanillaID+'"  data-toggle="tooltip" title="Nuevo"><i class="fa fa-plus"></i></button>' +
                            '&nbsp<button  onclick="agregarEncabezado(' + userID + ',' + table.DataTable().row(i).data().PlanillaID + ')" class="btn btn-small btn-warning editarPlanilla " data-toggle="tooltip" title="Editar"><i class="fa fa-pencil"></i></button>' +
                            '&nbsp<button onclick="eliminarPlanilla(' + table.DataTable().row(i).data().PlanillaID + ')" class="btn btn-small btn-danger eliminaPlanilla " data-planillaid="' + $("#exampleTable").DataTable().row(i).data().PlanillaID + '" data-toggle="tooltip" title="Eliminar"><i class="fa fa-trash"></i></button></div>';


                        this.insertBefore(nCloneTd2.cloneNode(true), this.childNodes[5]);
                    }
                });

                $("#exampleTable").attr('style','')

            }

        });


}

function mostarRegistros(planillaid,encuestadorNombre,supervisorNombre,numeroPlanilla){

    planilla_back = planillaid;
    numeroplanulla_back = numeroPlanilla;
    encuestador_back = encuestadorNombre;
    supervisor_back = supervisorNombre;

    $('#agregarPlanilla').hide();

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

        },
        "fnInitComplete": function(oSettings, json) {


            var nCloneTh4 = document.createElement('th');

            $("#registrosTable thead tr").each(function () {

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

                });
            }

            $("#registrosTable").attr('style','');

        }
    });


}

function verRegistro(planillaid){

    window.open('/registro?id=' + planillaid + '&numeroPlanilla=' + numeroplanulla_back + '&nombreEncuestador=' + encuestador_back + '&nombreSupervisor=' + supervisor_back);
}


function detalleEncuesta(encuestaID){
    window.open('/registroEncuesta?id=' + encuestaID);
}

function eliminarEncuesta(encuestaID){

        var id = encuestaID;


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
                    url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/EliminarEncuesta?id=" + id,
                    method: "POST",
                    dataType: "json",

                    success: function (res) {

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
                    url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/EliminarFilaPlanilla?id=" + id,
                    method: "POST",
                    dataType: "json",

                    success: function (res) {

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
        text: "La planilla completa y todos sus registros están a punto de ser eliminados!! Esta acción no se puede deshacer!!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
        .then((willDelete) => {



        if (willDelete) {
            swal("Espere un momento...", "se está eliminando la planilla", "info");

            $.ajax({
                url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/EliminarPlanilla?id=" + id,
                method: "POST",
                dataType: "json",

                success: function (res) {

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