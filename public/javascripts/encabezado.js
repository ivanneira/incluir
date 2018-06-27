/**
 * Created by ien83 on 07/06/2018.
 */


function agregarEncabezado() {


    var htmlStringEncabezado =
        '<table id="encabezado" class="card-1 table table-primary table-striped table-hover">' +
        '<tr>' +
        '<thead class="thead-dark">' +
        '<th>Nº Planilla</th>' +
        '<th>Supervisor</th>' +
        '<th>Encuestador</th>' +
        '<th>Departamento</th>' +
        '</thead>' +
        '</tr>' +
        '<tr>' +
        '<td><input id="numeroPlanilla" type="text" class="form-control" placeholder="Nº planilla"></td>' +
        '<td><select class="selectSupervisor"></select></td>' +
        '<td><select class="selectEncuestador"></select></td>' +
        '<td><select class="selectDepartamento"></select></td>' +
        '</tr>' +
        '</table>';

    $("#modalACBody")
        .empty()
        .append(htmlStringEncabezado);

    $("#modalAC")
        .modal('show');


    //select2 de supervisor
    $(".selectSupervisor").select2({
        placeholder: 'Busque supervisor',
        dropdownParent: $("#modalACBody"),
        width: '100%',
        minimumInputLength: 3,
        language: 'es',
        ajax: {
            //url: 'planillas/supervisores',
            url: server_host + ":" + server_port + "/api/IncluirSalud/ObtenerEncuestadorSupervisor?id=" + 1,
            type: 'GET',
            dataType: "json",
            delay: 250,
            data: function (params) {
                console.dir(params)
                return {
                    searchTerm: params.term // search term
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
        }
    });


    $(".selectDepartamento").select2({
        placeholder: 'Busque departamento',
        width: '100%',
        dropdownParent: $("#modalACBody"),
        minimumInputLength: 3,
        language : 'es',
        ajax: {
            url: server_host + ":" + server_port + "/api/IncluirSalud/ObtenerDepartamentos?id=" + 18,
            dataType: "json",
            type: "GET",
            delay: 250,
            data: function (params) {
                console.dir(params)
                return {
                    searchTerm: params.term // search term
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
        }
    });



    //select2 de encuestador
    $(".selectEncuestador").select2({
        placeholder: 'Busque encuestador',
        dropdownParent: $("#modalACBody"),
        width: '100%',
        language: 'es',
        ajax: {
            //url: 'planillas/encuestadores',
            url: server_host + ":" + server_port + "/api/IncluirSalud/ObtenerEncuestadorSupervisor?id=" + 3,
            type: 'GET',
            dataType: 'json',

            delay: 250,
            data: function (params) {
                console.dir(params)
                return {
                    searchTerm: params.term // search term
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
        }

    });

    $("#modalACAceptar")
        .unbind('click')
        .click(verificarEncabezado);
}

function verificarEncabezado(){

    var encabezadoDATA = {

        usuarioID: '',
        supervisorID: '',
        encuestadorID: '',
        nroPlanilla: '',
        departamentoID: ''
    };

    //TODO: cambiar cuando esté funcionando el login
    encabezadoDATA.usuarioID = '1';
    encabezadoDATA.supervisorID = $(".selectSupervisor").val();
    encabezadoDATA.encuestadorID = $(".selectEncuestador").val();
    encabezadoDATA.nroPlanilla = $("#numeroPlanilla").val();
    encabezadoDATA.departamentoID = $(".selectDepartamento").val();

    $.ajax({
        url: server_host+":"+server_port+"/api/IncluirSalud/GuardarPlanilla",
        method: "POST",
        data: encabezadoDATA,
        dataType: "json"
    })
        .done(function(res){

            if(typeof(res) == "undefined") {
                //alert("Se agrego una nueva planilla");
                swal("Incluir Salud", "Se agrego una nueva planilla!", "success");
                location.reload();
            }
            else
            {
                console.log(res);
            }
        });

}