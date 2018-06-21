/**
 * Created by Ivan on 02/05/2018.
 */

var tipoPension;
var tipoVivienda;
var tipoServicios;
//var prestaciones;

var map;
$(function(){

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
        url: '/planillas/getTipoVivienda',
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
        url: '/planillas/getTipoServicios',
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

/*
    $("#agregarRegistro").click(function(){

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
         fillModal();

    });
*/

    $("#agregarPlanilla").click(function(){

        agregarEncabezado();
    });

    $("#agregarEncuesta").click(function(){

        agregarEncuesta();
    });

});

var marker;

var $modal = $("#modalAC");
function ERROR(){

    alert("Hubo un error, por favor regargue la página");
}

function fillModal(departamentoID,NumeroPlanilla,idplanilla,filaid){

    //console.log(departamentoID)

    //tabs
    var htmlString =
        '<ul class="nav nav-tabs nav-fill" role="tablist" id="formTabs">'+
        '   <li class="nav-item">' +
        '       <a id="personales-tab" data-toggle="tab" class="nav-link active bg-dark text-light" href="#personales">Datos personales</a>' +
        '   </li>'+
        '   <li class="nav-item vivo">' +
        '       <a id="localizacion-tab" data-toggle="tab" class="nav-link bg-dark text-light" href="#localizacion">Datos de localización</a>' +
        '   </li>'+
        '   <li class="nav-item vivo">' +
        '       <a id="prestaciones-tab" data-toggle="tab" class="nav-link bg-dark text-light" href="#prestaciones">Datos de la prestación</a>' +
        '   </li>'+
        '   <li class="nav-item vivo">' +
        '       <a id="vivienda-tab" data-toggle="tab" class="nav-link bg-dark text-light" href="#vivienda">Datos de vivienda</a>' +
        '   </li>'+
        '   <li class="nav-item vivo">' +
        '       <a id="comentarios-tab" data-toggle="tab" class="nav-link bg-dark text-light" href="#comentarios">Comentarios</a>' +
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
        '           <input id="nombre" name="nombre" type="text" class="form-control" placeholder="Nombre">' +
        '       </td>'+
        '       <td>' +
        '           <label for="apellido">Apellido</label>' +
        '           <input id="apellido" name="apellido" type="text" class="form-control" placeholder="Apellido">' +
        '       </td>'+
        '  </tr>'+
        '  <tr  class="vivo">'+
        '      <td>' +
        '           <label for="fecnac">Fecha de nacimiento</label>' +
        '           <input id="fechaNacimiento" name="fecnac" class="inputtipobootstrap" placeholder="Elija fecha" data-provide="datepicker">' +
        '           <label for="sexo">Sexo</label>' +
        '           <select class="form-control" id="sexo" name="sexo">' +
        '               <option value="-1">Seleccione el sexo...</option>' +
        '               <option value="1">Masculino</option>' +
        '               <option value="2">Femenino</option>' +
        '           </select>' +
        '       </td>'+
        '      <td>' +
        '           <label for="dni">DNI</label>' +
        '           <input id="dni" name="dni" type="number" class="form-control" placeholder="DNI">' +
        '       </td>'+
        '  </tr>'+
        '  <tr>'+
        '      <td  class="vivo">' +
        '           <label for="tel">Teléfono</label>' +
        '           <input id="tel" name="tel" type="text" class="form-control" placeholder="Teléfono">' +
        '       </td>'+
        '       <td id="fechaDefuncion">' +
        '           <label for="defuncion">Fecha de defunción</label>' +
        '           <input id="defuncion" name="defuncion" class="inputtipobootstrap" placeholder="Elija fecha de fallecimiento" data-provide="datepicker">' +
        '       </td>'+
        '      <td>' +
        '           <label for="vivo">Vivo</label>' +
        '          <input name="vivo" id="fallecido" type="checkbox" checked data-toggle="toggle">' +
        '      </td>' +
        '  </tr>'+
        '</table>';

    $("#personales")
        .append(htmlPersonales);

    $("#fechaDefuncion").hide();


    //pestaña de datos de localización
    var htmlLocalizacion =
        '<table class="table table-dark table-striped table-hover">'+
        '   <tr>'+
        '       <td>' +
        '           <label for="localidad">Localidad</label>' +
        '           <select name="localidad" class="selectLocalidad"></select>' +
        '       </td>'+
        '       <td>' +
        '           <label for="domicilio">Calle, orientación y altura</label>' +
        '           <input id="domicilio" name="domicilio" type="text" class="form-control" placeholder="Domicilio">' +
        '       </td>'+
        '       <td>' +
        '           <label for="barrio">Barrio</label>' +
        '           <input id="barrio" name="barrio" type="text" class="form-control" placeholder="Barrio">' +
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
        '       <td colspan="2">' +
        '           <label for="titular">Titularidad</label>' +
        '           <div id="titular" class="btn-group btn-group-toggle" data-toggle="buttons">'+
        '               <label class="btn btn-light">'+
        '                   <input id="btnTitular" type="radio" name="options" autocomplete="off"> Titular'+
        '               </label>'+
        '               <label class="btn btn-light">'+
        '                   <input id="btnAdherente" type="radio" name="options" autocomplete="off"> Adherente'+
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
        '<option value="">Busque el código CIE10 correspondiente</option>' +
        '</select>' +
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


    //pestaña de vivienda
    var htmlVivienda =
        '<table class="table table-dark table-striped table-hover">'+
        '   <tr>'+
        '       <td>' +
        '           <label for="conviven">Nº de personas que conviven</label>' +
        '           <input id="conviven" name="conviven" type="number" class="form-control" placeholder="Nº conviven">' +
        '       </td>'+
        '       <td>' +
        '           <label for="grupo">Nº del grupo familiar</label>' +
        '           <input id="grupo" name="grupo" type="number" class="form-control" placeholder="Nº G Familiar">' +
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


    //evento del botón fallecido
    $("#fallecido").change(function(){


        if($(this).prop('checked')){
            $(".vivo:hidden").show();
            $("#fechaDefuncion").hide();

        }else{

            $(".vivo:visible").hide();
            $("#fechaDefuncion").show();
        }



    });

    //pestaña de comentarios
    var htmlComentarios =
        '<table class="table table-dark table-striped table-hover">'+
        '   </tr>'+
        '       <td>' +
        '           <label for="comentario">Comentarios</label>' +
        '           <textarea id="comentario" name="comentario" type="text" class="form-control" placeholder="Comentarios" rows="10"></textarea>' +
        '   </td>'+
        '   </tr>'+
        '</table>';

    $("#comentarios")
        .append(htmlComentarios);

    $("#modalACTitulo")
        .data('idplanilla',idplanilla)
        .text('Nuevo registro, planilla nº: ' + NumeroPlanilla);

    if(filaid) completarDatos(filaid);

    $("#modalAC")
        .modal('show')
        .modal('handleUpdate');

    //evento del botón aceptar, llama a las verificaciones
    $("#modalACAceptar")
        .unbind('click')
        .click(verificarCampos);

    //esconde el campo de cometarios de vivienda por defecto
    $("#comentarioTipoVivienda").hide();

    fillDropDown(departamentoID);

}

function completarDatos(filaid){


    console.log('vale por un editar')
}

//verificación
function verificarCampos(){

    //bandera para comprobar que no salió alguna corrección
    var flag = true;

    //en caso que NO esté seleccionado como fallecido
    if($("#fallecido").prop('checked') ){

        //verificación de campos numéricos
        $('#modalACBody :input[type="number"]').each(function(index,item){


            //condicion que no permite caracteres extraños en campos numéricos
            if(
                item.value.includes('-')
                || item.value.includes('+')
                || item.value.includes('e')
                || item.value.includes(NaN)
                || (item.value === '')
            ){
                mostrarError(true,item)
                flag = false;


            }else{
                mostrarError(false,item)
            }
        });

        var noEmptyInputs =
            [
                $("#nombre"),
                $("#apellido"),
                $("#domicilio"),
                $("#conviven"),
                $("#grupo"),
                $("#barrio")

            ];


        $(noEmptyInputs).each(function(index,item){

            if(item.val() === ''){
                flag = false;
                mostrarError(true,item)
            }else{
                mostrarError(false,item)
            }
        });


        //verificación de campo sexo
        if($("#sexo").val() === '-1'){
            flag = false;
            $("#sexo").addClass('bg-warning');
        }else{
            $("#sexo").removeClass('bg-warning');
        }

        //verificación de campo fecha de nacimiento
        if($("#fechaNacimiento").val() === ''){
            flag = false;
            $("#fechaNacimiento").addClass('bg-warning');
        }else{
            $("#fechaNacimiento").removeClass('bg-warning');
        }

        //verificación de selector de localidad
        if($(".selectLocalidad").val()){

            $(".selectLocalidad")
                .next()
                .find('.select2-selection')
                .removeClass('bg-warning');
        }else{
            flag = false;
            $(".selectLocalidad")
                .next()
                .find('.select2-selection')
                .addClass('bg-warning');
        }


        if($("#btnTitular").prop('checked') || $("#btnAdherente").prop('checked')){

            $("#titular").removeClass('alert alert-warning')
        }else{
            flag = false;
            $("#titular").addClass('alert bg-warning')
        }

        //verificaciones en caso de encuestado fallecido
    }else{

        //verificación de selector de fecha de defuncion
        if(!$('#defuncion').val()){
            flag = false;
            $("#defuncion").addClass('bg-warning')
        }else{

            $("#defuncion").removeClass('bg-warning')
        }

        var noEmptyInputs =
            [
                $("#nombre"),
                $("#apellido")
            ];


        $(noEmptyInputs).each(function(index,item){

            if(item.val() === ''){
                flag = false;
                mostrarError(true,item)
            }else{
                mostrarError(false,item)
            }
        });
    }

    if(flag){
        //alert("los datos se guardan");
        armarJSON();
    }else{
        //alert("hay errores")
        swal("Incluir Salud", "verifique los datos ingresados!", "warning");
    }

}


function mostrarError(condition,selector){

    if(condition){
        $(selector)
            .addClass('bg-warning');
    }else{
        $(selector)
            .removeClass('bg-warning');
    }
}

function armarJSON(){

    var data = {};

    //en caso de que el encuestado esté fallecido
    if(!$('#fallecido').prop('checked')){


        data.nombre = $("#nombre").val();
        data.apellido = $("#apellido").val();
        data.fechaDefuncion  = $("#defuncion").val();


        enviarDatos(data);

        //caso común de la encuesta
    }else{

        //TODO: faltan datos para guardar.

        //planilla
        data.planillaID = $("#modalACTitulo").data().idplanilla;
        //personales
        data.nombre = $("#nombre").val();
        data.apellido = $("#apellido").val();

        var fd = $("#defuncion").val().split('/');
        data.fechaDefuncion = typeof(fd[0]) === 'undefined' ? fd[2]+'-'+fd[1]+'-'+fd[0] : null;

        console.dir(fd)
        console.dir(data.fechaDefuncion)

        var fn = $("#fechaNacimiento").val().split('/');
        data.fechaNacimiento = fn[2]+'-'+fn[1]+'-'+fn[0];

        data.dni = $("#dni").val();
        data.tipoSexoID = $("#sexo").val();
        data.tel = $("#tel").val();
        //localizacion
        data.localidadID = $(".selectLocalidad").val();
        data.domicilio  = $("#domicilio").val();
        data.barrio = $("#barrio").val();
        data.latitud = $("#lat").val();
        data.longitud = $("#lon").val();
        //prestación
        data.tipoBeneficiarioID = $("#btnTitular").prop('checked') ? 1 : 2;
        data.tipoPensionID = $(".selectTipoPension ").val();
        data.diagnosticoID = $(".selectCIE10").val();
        data.prestacionID = $(".selectPrestaciones").val();
        //vivienda
        data.nroPersonasConviven = $("#conviven").val();
        data.nroIntegrantesBeneficiario = $("#grupo").val();
        data.tipoViviendaID = $(".selectTipoVivienda").val();
        data.tipoViviendaDetalle = $("#comentarioTipoVivienda").val();
        data.serviciosBasicosID = $(".selectTipoServicios").val();
        data.comentario = $("#comentario").val();

        enviarDatos(data);
    }

}

function enviarDatos(jsonDATA){

    console.log("los datos que se enviarían son los siguientes:");
    console.dir(jsonDATA);

    $.ajax({
        //id de usuario forzado a 1
        url: server_host+":"+server_port+server_url+"/api/IncluirSalud/GuardarFilaPlanilla",
        method: "POST",
        dataType: "json",
        data: jsonDATA
    })
        .done(function(res){
            if(typeof(res)=="undefined")
                {
                    swal("Incluir Salud", "Se agrego una nueva registro!", "success");
                    setTimeout(function(){location.reload();},1500)
                }
                else
                {
                    console.dir(res);
                }

        });
}

function fillDropDown(departamentoID){

    $("#fechaNacimiento")
        .datepicker({
            autoclose: true,
            language: 'es',
            container: $("#modalAC"),
            format: 'dd/mm/yyyy',
            orientation: 'bottom'
        });

    $("#defuncion")
        .datepicker({
            autoclose: true,
            language: 'es',
            container: $("#modalAC"),
            format: 'dd/mm/yyyy',
            orientation: 'bottom'
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
            url: '/planillas/getLocalidades',
            type: 'GET',
            dataType: 'json',
            data: function (params) {
                var query = {
                    q: departamentoID
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
        //containerCssClass: "wrap",
        minimumInputLength: 3,
        dropdownParent: $("#modalACBody"),
        placeholder: function(){
            $(this).data('placeholder');
        },
        ajax: {
            url: '/planillas/getCIE10',
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
        dropdownParent: $("#modalACBody"),

        ajax: {
            url: '/planillas/getPrestaciones',
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

    $("#lat").on('change', function(){

        setMapPoint($(this).val(),$("#lon").val() );
    });

    $("#lon").on('change', function(){

        setMapPoint($("#lat").val(),+ $(this).val() );
    });

    function setMapPoint(lat, lng){

        //console.log(lat)
        //console.log(lng)


        var latlng = {lat: parseFloat(lat) , lng: parseFloat(lng) };

        //console.log(latlng)
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
}
