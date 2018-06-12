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
        language: 'es',
        ajax: {
            url: 'planillas/supervisores',
            type: 'GET',
            dataType: 'json',
            data: function (params) {
                var query = {
                    q: params.term
                };

                // Query parameters will be ?1=[term]
                return query;
            },
            processResults: function (data) {

                return {
                    results: $.map(data, function (item) {

                        return {
                            text: item.text,
                            id: item.id
                        }

                    })
                };
            }
        }
    });

    //select2 de departamento
    $(".selectDepartamento").select2({
        placeholder: 'Busque departamento',
        width: '100%',
        dropdownParent: $("#modalACBody"),
        minimumResultsForSearch: -1,        language: 'es',
        ajax: {
            url: 'planillas/getDepartamentos',
            type: 'GET',
            dataType: 'json',
            /*data: function (params) {
             var query = {
             q: params.term
             };

             // Query parameters will be ?1=[term]
             return query;
             },*/
            processResults: function (data) {

                return {
                    results: $.map(data, function (item) {

                        return {
                            text: item.Nombre,
                            id: item.ID
                        }

                    })
                };
            }
        }
    });

    //select2 de encuestador
    $(".selectEncuestador").select2({
        placeholder: 'Busque encuestador',
        dropdownParent: $("#modalACBody"),
        width: '100%',
        language: 'es',
        ajax: {
            url: 'planillas/encuestadores',
            type: 'GET',
            dataType: 'json',
            data: function (params) {
                var query = {
                    q: params.term
                };

                // Query parameters will be ?1=[term]
                return query;
            },
            processResults: function (data) {

                return {
                    results: $.map(data, function (item) {

                        return {
                            text: item.text,
                            id: item.id
                        }

                    })
                };
            }
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
        url: "http://192.168.3.105:45455/api/IncluirSalud/GuardarPlanilla",
        method: "POST",
        data: encabezadoDATA,
        dataType: "json"
    })
        .done(function(res){

            console.log(res);
        });

}