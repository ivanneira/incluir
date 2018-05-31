/**
 * Created by Ivan on 02/05/2018.
 */

var tipoPension;
var tipoVivienda;
var tipoServicios;
//var prestaciones;

var map;
var marker;

var $modal = $("#modalAC");

$(function(){
    /*
     $.ajax({
     url: 'planillas/getPrestaciones',
     type: 'GET',
     dataType: 'json',
     success: function(data){

     processPrestaciones(data);
     //console.dir(prestaciones)
     },
     error: function(e){
     ERROR();
     console.log(e);
     }
     });

     */
    $.ajax({
        url: 'planillas/getTipoPension',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            tipoPension = data;
        },
        error: function(e){
            ERROR();
            console.log(e);
        }
    });

    $.ajax({
        url: 'planillas/getTipoVivienda',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            tipoVivienda = data;
        },
        error: function(e){
            ERROR();
            console.log(e);
        }
    });

    $.ajax({
        url: 'planillas/getTipoServicios',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            tipoServicios = data;
        },
        error: function(e){
            ERROR();
            console.log(e);
        }
    });

    //select2 de encuestador
    $(".selectEncuestador").select2({
        placeholder: 'Busque encuestador',
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

    function processPrestaciones(data){

        var padres = [];

        for(var index in data){

            if(data[index].PRESTACIONID == null){
                padres.push({
                    text: data[index].NOMBRE,
                    id: data[index].ID,
                    children: []
                });
            }
        }

        for(var index in padres){

            for(var index2 in data){

                if(data[index2].PRESTACIONID == padres[index].id){
                    padres[index].children.push(
                        {
                            text: data[index2].NOMBRE,
                            id: data[index2].ID
                        }
                    );
                }
            }
        }

        prestaciones = padres;

    }


    //select2 de supervisor
    $(".selectSupervisor").select2({
        placeholder: 'Busque supervisor',
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

    $("#agregarRegistro").click(function(){
        /*
         if(
         $("#numeroPlanilla").val() != "" &&
         $(".selectSupervisor").val() != null &&
         $(".selectEncuestador").val() != null &&
         $(".selectDepartamento").val() != null
         ){
         fillModal();

         }else{

         alert("Complete los datos del encabezado primero")
         }
         */fillModal();

    });

});



function ERROR(){

    alert("Hubo un error, por favor regargue la página");
}

function fillModal(){
    /*
     var htmlString =
     '<table class="table table-dark table-striped table-hover">'+
     '   <tr>'+
     '       <td><input type="text" class="form-control" placeholder="Nombre" data-toggle="tooltip" data-placement="top" title="Nombre completo"></td>'+
     '       <td><input type="text" class="form-control" placeholder="Apellido"></td>'+
     '       <td><input class="inputtipobootstrap" placeholder="Elija fecha" id="nacimiento" data-provide="datepicker"></td>'+
     '   </tr>'+
     '   <tr>'+
     '       <td><input type="number" class="form-control" placeholder="DNI"></td>'+
     '       <td><input type="text" class="form-control" placeholder="Teléfono"></td>'+
     '       <td><select class="selectLocalidad"></select></td>'+
     '   </tr>'+
     '   <tr>'+
     '       <td colspan="3"><input type="text" class="form-control" placeholder="Domicilio"></td>'+
     '   </tr>'+
     '   <tr>'+
     '       <td><input type="number" class="form-control" placeholder="Nº Beneficiario"></td>'+
     '       <td>' +
     '           <div class="btn-group btn-group-toggle" data-toggle="buttons">'+
     '               <label class="btn btn-light">'+
     '                   <input type="radio" name="options" autocomplete="off"> Titular'+
     '               </label>'+
     '               <label class="btn btn-light">'+
     '                   <input type="radio" name="options" autocomplete="off"> Adherente'+
     '               </label>'+
     '           </div>' +
     '       </td>'+
     '       <td><select class="selectTipoPension"></select></td>'+
     '   </tr>'+
     '   <tr>'+
     '       <td><select class="selectCIE10" data-placeholder="Seleccione motivo"></td>'+
     '       <td><select class="selectPrestaciones"></td>'+
     '       <td><input type="number" class="form-control" placeholder="Nº conviven"></td>'+
     '   </tr>'+
     '   <tr>'+
     '       <td><input type="number" class="form-control" placeholder="Nº G Familiar"></td>'+
     '       <td><select class="selectTipoVivienda"></td>'+
     '       <td><select class="selectTipoServicios"></td>'+
     '   </tr>'+
     '   <tr>'+
     '       <td><input type="number" class="form-control" placeholder="Ingresos"></td>'+
     '       <td>' +
     '           <div class="input-group input-group">'+
     '               <div class="input-group-prepend">'+
     '                   <span class="input-group-text" id="latitud">-31,</span>'+
     '               </div>'+
     '               <input type="number" class="form-control" aria-describedby="latitud" placeholder="latitud">'+
     '           </div>'+
     '       </td>' +
     '       <td>' +
     '           <div class="input-group input-group">'+
     '               <div class="input-group-prepend">'+
     '                   <span class="input-group-text" id="longitud">-68,</span>'+
     '               </div>'+
     '               <input type="number" class="form-control" aria-describedby="longitud" placeholder="longitud">'+
     '           </div>'+
     '       </td>' +
     '   </tr>'+
     '   <tr>'+
     '       <td colspan="3"><input type="text" class="form-control" placeholder="Comentario"></td>'+

     '   </tr>'+
     '</table>';

     */


    //tabs
    var htmlString =
        '<ul class="nav nav-tabs nav-fill" role="tablist" id="formTabs">'+
        '   <li class="nav-item">' +
        '       <a id="personales-tab" data-toggle="tab" class="nav-link active bg-dark text-light" href="#personales">Datos personales</a>' +
        '   </li>'+
        '   <li class="nav-item">' +
        '       <a id="localizacion-tab" data-toggle="tab" class="nav-link bg-dark text-light" href="#localizacion">Datos de localización</a>' +
        '   </li>'+
        '   <li class="nav-item">' +
        '       <a id="prestaciones-tab" data-toggle="tab" class="nav-link bg-dark text-light" href="#prestaciones">Datos de la prestación</a>' +
        '   </li>'+
        '   <li class="nav-item">' +
        '       <a id="vivienda-tab" data-toggle="tab" class="nav-link bg-dark text-light" href="#vivienda">Datos de vivienda</a>' +
        '   </li>'+
        '   <li class="nav-item">' +
        '       <a id="comentarios-tab" data-toggle="tab" class="nav-link bg-dark text-light" href="#comentarios">Comentarios</a>' +
        '   </li>'+
        '   <li class="nav-item">' +
        '       <a id="encuesta-tab" data-toggle="tab" class="nav-link bg-dark text-light" href="#encuesta">Encuesta de satisfacción</a>' +
        '   </li>'+
        '</ul>';

    //tabs content
    htmlString +=
        '<div class="tab-content" id="tabContent">'+
        '   <div class="tab-pane fade show active" id="personales" role="tabpanel" aria-labelledby="personales-tab"></div>'+
        '   <div class="tab-pane fade" id="localizacion" role="tabpanel" aria-labelledby="localizacion-tab"></div>'+
        '   <div class="tab-pane fade" id="prestaciones" role="tabpanel" aria-labelledby="prestaciones-tab"></div>'+
        '   <div class="tab-pane fade" id="vivienda" role="tabpanel" aria-labelledby="vivienda-tab"></div>'+
        '   <div class="tab-pane fade" id="comentarios" role="tabpanel" aria-labelledby="comentarios-tab"></div>'+
        '   <div class="tab-pane fade" id="encuesta" role="tabpanel" aria-labelledby="encuesta-tab"></div>'+
        '</div>';


    //agrega el esqueleto al modal
    $("#modalACBody")
        .empty()
        .append(htmlString);

    //pestaña de datos personales
    var htmlPersonales =
        '<table class="table table-dark table-striped table-hover">'+
        '  <tr>'+
        '      <td>' +
        '           <label for="nombre">Nombre</label>' +
        '           <input name="nombre" type="text" class="form-control" placeholder="Nombre" data-toggle="tooltip" data-placement="top" title="Nombre completo">' +
        '       </td>'+
        '       <td>' +
        '           <label for="apellido">Apellido</label>' +
        '           <input name="apellido" type="text" class="form-control" placeholder="Apellido">' +
        '       </td>'+
        '  </tr>'+
        '  <tr>'+
        '      <td>' +
        '           <label for="fecnac">Fecha de nacimiento</label>' +
        '           <input name="fecnac" class="inputtipobootstrap" placeholder="Elija fecha" id="nacimiento" data-provide="datepicker">' +
        '       </td>'+
        '      <td>' +
        '           <label for="dni">DNI</label>' +
        '           <input name="dni" type="number" class="form-control" placeholder="DNI">' +
        '       </td>'+
        '  </tr>'+
        '  <tr>'+
        '      <td>' +
        '           <label for="tel">Teléfono</label>' +
        '           <input name="tel" type="text" class="form-control" placeholder="Teléfono">' +
        '       </td>'+
        '      <td>' +
        '           <label for="vivo">Vivo</label>' +
        '          <input name="vivo" id="fallecido" type="checkbox" checked data-toggle="toggle">' +
        '      </td>' +
        '  </tr>'+
        '</table>';

    $("#personales")
        .append(htmlPersonales);

    //pestaña de datos de localización
    var htmlLocalizacion =
        '<table class="table table-dark table-striped table-hover">'+
        '   <tr>'+
        '       <td>' +
        '           <label for="localidad">Localidad</label>' +
        '           <select name="localidad" class="selectLocalidad"></select>' +
        '       </td>'+
        '       <td colspan="2">' +
        '           <label for="domicilio">Domicilio</label>' +
        '           <input name="domicilio" type="text" class="form-control" placeholder="Domicilio">' +
        '       </td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td>' +
        '           <div class="input-group input-group">'+
        '               <div class="input-group-prepend">'+
        '                   <span class="input-group-text" id="latitud">Latitud</span>'+
        '               </div>'+
        '               <input name="lat" id="lat" type="text" class="form-control" aria-describedby="latitud" placeholder="latitud">'+
        '           </div>'+
        '       </td>' +
        '       <td>' +
        '           <div class="input-group input-group">'+
        '               <div class="input-group-prepend">'+
        '                   <span class="input-group-text" id="longitud">Longitud</span>'+
        '               </div>'+
        '               <input name="lon" id="lon" type="text" class="form-control" aria-describedby="longitud" placeholder="longitud">'+
        '           </div>'+
        '       </td>' +
        '   </tr>'+
        '   <tr>'+
        '       <td colspan="3" >' +
        '           <div style="padding:10px">'+
        '           <label for="map">Mapa interactivo</label>' +
        '               <div id="map"></div>'+
        '           </div>'+
        '       </td>'+
        '   </tr>'+
        '</table>';

    $("#localizacion")
        .append(htmlLocalizacion);

    initMap();
    //pestaña de datos de la prestación
    var htmlPrestaciones =
        '<table class="table table-dark table-striped table-hover">'+
        '   <tr>'+
        //'       <td><input type="number" class="form-control" placeholder="Nº Beneficiario"></td>'+
        '       <td colspan="2">' +
        '           <label for="titular">Titularidad</label>' +
        '           <div id="titular" class="btn-group btn-group-toggle" data-toggle="buttons">'+
        '               <label class="btn btn-light">'+
        '                   <input type="radio" name="options" autocomplete="off"> Titular'+
        '               </label>'+
        '               <label class="btn btn-light">'+
        '                   <input type="radio" name="options" autocomplete="off"> Adherente'+
        '               </label>'+
        '           </div>' +
        '       </td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td>' +
        '           <label for="pension">Tipo de pensión</label>' +
        '           <select name="pension" class="selectTipoPension"></select>' +
        '       </td>'+
        '       <td>' +
        '           <label for="motivo">Motivo de la pensión (CIE10)</label>' +
        '           <select name="motivo" class="selectCIE10" data-placeholder="Seleccione motivo">' +
        '       </td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td colspan="2">' +
        '           <label for="prestaciones">Prestaciones</label>' +
        '           <select name="prestaciones" class="selectPrestaciones">' +
        '       </td>'+
        '   </tr>'+
        '</table>';

    $("#prestaciones")
        .append(htmlPrestaciones);


    var htmlVivienda =
        '<table class="table table-dark table-striped table-hover">'+
        '   <tr>'+
        '       <td>' +
        '           <label for="conviven">Nº de personas que conviven</label>' +
        '           <input name="conviven" type="number" class="form-control" placeholder="Nº conviven">' +
        '       </td>'+
        '       <td>' +
        '           <label for="grupo">Nº del grupo familiar</label>' +
        '           <input name="grupo" type="number" class="form-control" placeholder="Nº G Familiar">' +
        '       </td>'+
        '       <td>' +
        '           <label for="vivienda">Tipo de vivienda</label>' +
        '           <select name="vivienda" class="selectTipoVivienda">' +
        '           <input id="comentarioTipoVivienda" class="form-control" type="text" placeholder="Especifique" >' +
        '       </td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td colspan="3">' +
        '           <label for="servicios">Servicios básicos</label>' +
        '           <select name="servicios" class="selectTipoServicios">' +
        '       </td>'+
        '   </tr>'+
        '   <tr>'+
        //'       <td><input type="number" class="form-control" placeholder="Ingresos"></td>'+
        //'       <td colspan="3">' +
        //'           <label for="comentario">Comentarios</label>' +
        //'           <input name="comentario" type="text" class="form-control" placeholder="Comentario">' +
        //'       </td>'+
        '   </tr>'+
        '</table>';

    $("#vivienda")
        .append(htmlVivienda);

    $("#fallecido").bootstrapToggle({
        on: "Vivo",
        off: "Fallecido",
        onstyle: 'success',
        offstyle: 'danger',
        width: '100%'
    });

    var htmlComentarios =
        '<table class="table table-dark table-striped table-hover">'+
        '   </tr>'+
        '       <td>' +
        '           <label for="comentario">Comentarios</label>' +
        '           <textarea name="comentario" type="text" class="form-control" placeholder="Comentario" rows="10"></textarea>' +
        '   </td>'+
        '   </tr>'+
        '</table>';

    $("#comentarios")
        .append(htmlComentarios);


    var htmlEncuesta =
        '<table class="table table-dark table-striped table-hover">'+
        '   <tr>'+
        '       <td>' +
        '           <label for="necuesta">Nº de encuesta</label>' +
        '           <input name="necuesta" type="number" class="form-control" placeholder="Nº de encuesta">' +
        '       </td>'+
        '   </tr>';

    htmlEncuesta +=
        '   <tr>'+
        '       <td>' +
        '           <p class="font-italic">¿Dónde se atiende?</p>' +
        '           <div class="form-check form-check-inline">' +
        '               <input class="form-check-input" type="checkbox" id="dcaps">' +
        '               <label class="form-check-label" for="dcaps">CAPS</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input class="form-check-input" type="checkbox" id="dhospital">' +
        '               <label class="form-check-label" for="dhospital">Hospital</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input class="form-check-input" type="checkbox" id="dconsultorio">' +
        '               <label class="form-check-label" for="dconsultorio">Consultorio particular</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input class="form-check-input" type="checkbox" id="dotro">' +
        '               <label class="form-check-label" for="dotros">Otro</label>' +
        '           </div>' +
        '       </td>'+
        '   </tr>';

    htmlEncuesta +=
        '   <tr>'+
        '       <td>' +
        '           <p class="font-italic">¿Quién lo atiende?</p>' +
        '           <div class="form-check form-check-inline">' +
        '               <input class="form-check-input" type="checkbox" id="mcabecera">' +
        '               <label class="form-check-label" for="mcabecera">Médico de cabecera</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input class="form-check-input" type="checkbox" id="mespecialista">' +
        '               <label class="form-check-label" for="mespecialista">Médico especialista</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input class="form-check-input" type="checkbox" id="mguardia">' +
        '               <label class="form-check-label" for="mguardia">Médico de guardia</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input class="form-check-input" type="checkbox" id="motros">' +
        '               <label class="form-check-label" for="motros">Otro</label>' +
        '           </div>' +
        '       </td>'+
        '   </tr>';

    htmlEncuesta +=
        '   <tr>' +
        '       <td>' +
        '           <p class="font-italic">¿Cuánto tiempo le llevó encontrar el turno?</p>' +
        '           <div class="form-check form-check-inline">' +
        '               <input name="tiempo" class="form-check-input" type="radio" id="t15">' +
        '               <label class="form-check-label" for="t15">Menos de 15 días</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input name="tiempo" class="form-check-input" type="radio" id="t30">' +
        '               <label class="form-check-label" for="t30">Entre 15 y 30 días</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input name="tiempo" class="form-check-input" type="radio" id="tmas">' +
        '               <label class="form-check-label" for="tmas">Mas de 30 días</label>' +
        '           </div>' +
        '       </td>' +
        '   </tr>';

    htmlEncuesta +=
        '   <tr>' +
        '       <td>' +
        '           <p class="font-italic">¿Cómo fue atendido?</p>' +
        '           <div class="form-check form-check-inline">' +
        '               <input name="atendido" class="form-check-input" type="radio" id="atmb">' +
        '               <label class="form-check-label" for="atmb">Muy bien</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input name="atendido" class="form-check-input" type="radio" id="atbi">' +
        '               <label class="form-check-label" for="atbi">Bien</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input name="atendido" class="form-check-input" type="radio" id="atre">' +
        '               <label class="form-check-label" for="atre">Regular</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input name="atendido" class="form-check-input" type="radio" id="atma">' +
        '               <label class="form-check-label" for="atma">Mal</label>' +
        '           </div>' +
        '       </td>' +
        '   </tr>';

    htmlEncuesta +=
        '   <tr>' +
        '       <td>' +
        '           <p class="font-italic">¿Le solicitaron estudios, cuáles?</p>' +
        '           <div class="form-check form-check-inline">' +
        '               <input name="estudios" class="form-check-input" type="radio" id="esrx">' +
        '               <label class="form-check-label" for="esrx">RX</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input name="estudios" class="form-check-input" type="radio" id="esla">' +
        '               <label class="form-check-label" for="esla">Laboratorio</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input name="estudios" class="form-check-input" type="radio" id="esot">' +
        '               <label class="form-check-label" for="esot">otros</label>' +
        '           </div>' +
        '       </td>' +
        '   </tr>';

    htmlEncuesta +=
        '   <tr>' +
        '      <td>' +
        '          <input name="remedios" id="remedios" type="checkbox" checked data-toggle="toggle">' +
        '          <input name="demora" id="demora" type="checkbox" checked data-toggle="toggle">' +
        '      </td>' +
        '   </tr>';

    htmlEncuesta +=
        '</table>';




    $("#encuesta")
        .append(htmlEncuesta);

    $("#remedios").bootstrapToggle({
        on: "Si, me indicaron remedios",
        off: "No me indicaron remedios",
        onstyle: 'success',
        offstyle: 'danger',
        width: '100%'
    });

    $("#demora").bootstrapToggle({
        on: "Los conseguí sin demora",
        off: "Los conseguí con demora",
        onstyle: 'success',
        offstyle: 'danger',
        width: '100%'
    });


    $("#modalACTitulo").text('Nuevo registro, planilla nº: ' + $("#numeroPlanilla").val());

    $("#modalAC")
        .modal('show')
        .modal('handleUpdate');

    $("#comentarioTipoVivienda").hide();

    fillDropDown();


}

function fillDropDown(){

    $("#nacimiento")
        .datepicker({
            autoclose: true,
            language: 'es',
            container: $("#modalAC"),
            format: 'dd/mm/yyyy'
        });

    $(".selectTipoPension")
        .select2({
            placeholder: 'Elija tipo de pensión',
            width: '100%',
            language: 'es',
            minimumResultsForSearch: -1,
            data: tipoPension
        });

    $(".selectTipoVivienda")
        .select2({
            placeholder: 'Elija tipo de vivienda',
            width: '100%',
            language: 'es',
            minimumResultsForSearch: -1,
            data: tipoVivienda
        })
        .on('select2:select',function(e){
            if(e.params.data.text === "Otros"){
                $("#comentarioTipoVivienda")
                    .show();
            }else{
                $("#comentarioTipoVivienda")
                    .hide();
            }
        });

    $(".selectTipoServicios")
        .select2({
            placeholder: 'Elija tipo de vivienda',
            width: '100%',
            language: 'es',
            minimumResultsForSearch: -1,
            multiple: true,
            data: tipoServicios
        }).on('select2:select',function(e){
        console.log(e)
    });

    $(".selectLocalidad").select2({
        placeholder: 'Busque localidad',
        width: '100%',
        language: 'es',
        minimumResultsForSearch: -1,
        ajax: {
            url: 'planillas/getLocalidades',
            type: 'GET',
            dataType: 'json',
            data: function (params) {
                var query = {
                    q: $(".selectDepartamento").val()
                };
                // Query parameters will be ?1=[term]
                return query;
            },
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

    $(".selectCIE10").select2({
        width: '100%',
        dropdownAutoWidth: true,
        //multiple: true,
        language: 'es',
        minimumInputLength: 3,
        dropdownParent: $("#modalACBody"),
        placeholder: function(){
            $(this).data('placeholder');
        },
        ajax: {
            url: 'planillas/getCIE10',
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
                            text: item.id + ' - ' + item.text,
                            id: item.id
                        }

                    })
                };
            }
        }
    });

    $(".selectPrestaciones").select2({
        placeholder: 'Elija prestaciones',
        width: '100%',
        language: 'es',
        multiple: true,
        minimumResultsForSearch: -1,
        ajax: {
            url: 'planillas/getPrestaciones',
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
                            text: item.nombre,
                            id: item.id
                        }

                    })
                };
            }
        }
    });
}



function initMap() {
    var latitude = -31.536395; // YOUR LATITUDE VALUE
    var longitude = -68.536976; // YOUR LONGITUDE VALUE

    var myLatLng = {lat: latitude, lng: longitude};

    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 14,
        disableDoubleClickZoom: true, // disable the default map zoom on double click
        fullscreenControl: false
    });

    // Update lat/long value of div when anywhere in the map is clicked
    google.maps.event.addListener(map,'click',function(event) {


        var latlng = {lat:event.latLng.lat(),lng: event.latLng.lng() };

        var latt = event.latLng.lat();

        latt = latt
            .toString()
        //.slice(4);

        var longg = event.latLng.lng();
        longg = longg
            .toString()
        //.slice(4);

        $("#lat").val(latt);
        $("#lon").val(longg);

        if(marker){
            marker.setMap(null);
        }

        marker = new google.maps.Marker({
            position: latlng,
            map: map,
            //title: 'Hello World'

            // setting latitude & longitude as title of the marker
            // title is shown when you hover over the marker
            title: latitude + ', ' + longitude
        });

    });

    // Update lat/long value of div when you move the mouse over the map
    /*
     google.maps.event.addListener(map,'mousemove',function(event) {
     document.getElementById('lat').value = event.latLng.lat();
     document.getElementById('lon').value = event.latLng.lng();
     });
     */
    /*
     var marker = new google.maps.Marker({
     position: myLatLng,
     map: map,
     //title: 'Hello World'

     // setting latitude & longitude as title of the marker
     // title is shown when you hover over the marker
     title: latitude + ', ' + longitude
     });
     */
    /*
     // Update lat/long value of div when the marker is clicked
     map.addListener('click', function(event) {
     document.getElementById('lat').value = event.latLng.lat();
     document.getElementById('lon').value =  event.latLng.lng();
     });
     */

    $("#lat").on('change', function(){

        setMapPoint($(this).val(),$("#lon").val() );
    });

    $("#lon").on('change', function(){

        setMapPoint($("#lat").val(),+ $(this).val() );
    });

    function setMapPoint(lat, lng){

        console.log(lat)
        console.log(lng)


        var latlng = {lat: parseFloat(lat) , lng: parseFloat(lng) };

        console.log(latlng)
        if(marker){
            marker.setMap(null);
        }

        map
            .setCenter(latlng);

        marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: 'Hello World!'
        });

    }

    // Create new marker on double click event on the map
    /*
     google.maps.event.addListener(map,'dblclick',function(event) {
     var marker = new google.maps.Marker({
     position: event.latLng,
     map: map,
     title: event.latLng.lat()+', '+event.latLng.lng()
     });

     // Update lat/long value of div when the marker is clicked
     marker.addListener('click', function() {
     document.getElementById('lat').value = event.latLng.lat();
     document.getElementById('lon').value =  event.latLng.lng();
     });
     });
     */
    // Create new marker on single click event on the map
    /*google.maps.event.addListener(map,'click',function(event) {
     var marker = new google.maps.Marker({
     position: event.latLng,
     map: map,
     title: event.latLng.lat()+', '+event.latLng.lng()
     });
     });*/
}