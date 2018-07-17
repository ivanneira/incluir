/**
 * Created by ien83 on 07/06/2018.
 */


function agregarEncabezado(userid,encabezadoid) {


    var htmlStringEncabezado =
        '<table id="encabezado" class="table table-light table-striped table-hover">' +
        '<tr>' +
        '<thead class="">' +
        '<th>Nº Planilla</th>' +
        '<th>Supervisor</th>' +
        '<th>Encuestador</th>' +
        '</thead>' +
        '</tr>' +
        '<tr>' +
        '<td><input maxlength="8" id="numeroPlanilla" type="number" class="form-control" placeholder="Nº planilla"></td>' +
        '<td><select class="selectSupervisor"></select></td>' +
        '<td><select class="selectEncuestador"></select></td>' +
        '</tr>' +
        '</table>';

    $("#modalACBody")
        .empty()
        .append(htmlStringEncabezado);

    $("#modalAC")
        .modal('show');

    $("#modalACTitulo")
        .text('Agregar nueva planilla');

    var url,verb;

    if(encabezadoid){

        console.log("MODO EDICION DE ENCABEZADO");
        console.log(encabezadoid)

        url = server_host + ":" + server_port + "/api/IncluirSalud/ObtenerEncuestadorSupervisor?id=" + userid ;

        verb = 'POST'

    }else{
        url = server_host + ":" + server_port + "/api/IncluirSalud/ObtenerEncuestadorSupervisor?id=" + userid ;

        verb = 'GET';
    }



    //select2 de supervisor
    $(".selectSupervisor").select2({
        placeholder: 'Busque supervisor',
        dropdownParent: $("#modalACBody"),
        width: '100%',
        //minimumInputLength: 0,
        language: 'es',
        ajax: {
            //url: 'planillas/supervisores',
            url: server_host + ":" + server_port + "/api/IncluirSalud/ObtenerEncuestadorSupervisor?id=" + userid,
            type: 'GET',
            dataType: "json",
            delay: 250,
            data: function (params) {
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
        .click(function(data){
            verificarEncabezado(userid);
        });
}

function verificarEncabezado(userid){

    var encabezadoDATA = {

        usuarioID: userid,
        supervisorID: '',
        encuestadorID: '',
        nroPlanilla: ''

    };


    encabezadoDATA.usuarioID = userid;
    encabezadoDATA.supervisorID = $(".selectSupervisor").val()  == null ? '' :  $(".selectSupervisor").val();
    encabezadoDATA.encuestadorID = $(".selectEncuestador").val() == null ? '' : $(".selectEncuestador").val();
    encabezadoDATA.nroPlanilla = $("#numeroPlanilla").val();

    //console.log(encabezadoDATA)

    if(

            encabezadoDATA.usuarioID === ''
        ||  encabezadoDATA.supervisorID === ''
        ||  encabezadoDATA.encuestadorID === ''
        ||  encabezadoDATA.nroPlanilla === ''

    ){

        swal("Datos incorrectos", "Por favor agregue correctamente los campos", "error");
    }else{

        swal("Espere...", "se están guardando los datos", "info");

        $.ajax({
            url: server_host+":"+server_port+"/api/IncluirSalud/GuardarPlanilla",
            method: "POST",
            data: encabezadoDATA,
            dataType: "json"
        })
            .done(function(res){

                if(typeof(res) == "undefined") {


                    location.reload();
                }
                else
                {
                    swal("ERROR", "No se pudo agregar la planilla, por favor recargue la página e intente nuevamente", "error");
                }
            });

    }



}