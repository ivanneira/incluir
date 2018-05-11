/**
 * Created by Ivan on 02/05/2018.
 */

var tipoPension;
var tipoVivienda;
var tipoServicios;
var prestaciones;

var map;
var marker;

var $modal = $("#modalAC");

$(function(){

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
        '</ul>';

    //tabs content
    htmlString +=
        '<div class="tab-content" id="tabContent">'+
        '   <div class="tab-pane fade show active" id="personales" role="tabpanel" aria-labelledby="personales-tab"></div>'+
        '   <div class="tab-pane fade" id="localizacion" role="tabpanel" aria-labelledby="localizacion-tab"></div>'+
        '   <div class="tab-pane fade" id="prestaciones" role="tabpanel" aria-labelledby="prestaciones-tab"></div>'+
        '   <div class="tab-pane fade" id="vivienda" role="tabpanel" aria-labelledby="vivienda-tab"></div>'+
        '</div>';


    //agrega el esqueleto al modal
    $("#modalACBody")
        .empty()
        .append(htmlString);

    //pestaña de datos personales
    var htmlPersonales =
         '<table class="table table-dark table-striped table-hover">'+
         '  <tr>'+
         '      <td><input type="text" class="form-control" placeholder="Nombre" data-toggle="tooltip" data-placement="top" title="Nombre completo"></td>'+
         '      <td><input type="text" class="form-control" placeholder="Apellido"></td>'+
         '  </tr>'+
         '  <tr>'+
         '      <td><input class="inputtipobootstrap" placeholder="Elija fecha" id="nacimiento" data-provide="datepicker"></td>'+
         '      <td><input type="number" class="form-control" placeholder="DNI"></td>'+
         '  </tr>'+
         '  <tr>'+
         '      <td><input type="text" class="form-control" placeholder="Teléfono">'+
         '      <td><input type="text" class="form-control" placeholder="fallecido">'+
         '  </tr>'+
         '</table>';

    $("#personales")
        .append(htmlPersonales);

    //pestaña de datos de localización
    var htmlLocalizacion =
        '<table class="table table-dark table-striped table-hover">'+
        '   <tr>'+
        '       <td><select class="selectLocalidad"></select></td>'+
        '       <td colspan="2"><input type="text" class="form-control" placeholder="Domicilio"></td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td>' +
        '           <div class="input-group input-group">'+
        '               <div class="input-group-prepend">'+
        '                   <span class="input-group-text" id="latitud">-31,</span>'+
        '               </div>'+
        '               <input name="lat" id="lat" type="text" class="form-control" aria-describedby="latitud" placeholder="latitud">'+
        '           </div>'+
        '       </td>' +
        '       <td>' +
        '           <div class="input-group input-group">'+
        '               <div class="input-group-prepend">'+
        '                   <span class="input-group-text" id="longitud">-68,</span>'+
        '               </div>'+
        '               <input name="lon" id="lon" type="text" class="form-control" aria-describedby="longitud" placeholder="longitud">'+
        '           </div>'+
        '       </td>' +
        '   </tr>'+
        '   <tr>'+
        '       <td colspan="3" >' +
        '           <div style="padding:10px">'+
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
        '   </tr>'+
        '   <tr>'+
        '       <td><select class="selectTipoPension"></select></td>'+
        '       <td><select class="selectCIE10" data-placeholder="Seleccione motivo"></td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td colspan="2"><select class="selectPrestaciones"></td>'+
        '   </tr>'+
        '</table>';

    $("#prestaciones")
        .append(htmlPrestaciones);


    var htmlVivienda =
        '<table class="table table-dark table-striped table-hover">'+
        '   <tr>'+
        '       <td><input type="number" class="form-control" placeholder="Nº conviven"></td>'+
        '       <td><input type="number" class="form-control" placeholder="Nº G Familiar"></td>'+
        '       <td><select class="selectTipoVivienda"></td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td colspan="3"><select class="selectTipoServicios"></td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td><input type="number" class="form-control" placeholder="Ingresos"></td>'+
        '       <td colspan="2"><input type="text" class="form-control" placeholder="Comentario"></td>'+
        '   </tr>'+
        '</table>';

    $("#vivienda")
        .append(htmlVivienda);


    $("#modalACTitulo").text('Nuevo registro, planilla nº: ' + $("#numeroPlanilla").val());

    $("#modalAC")
        .modal('show')
        .modal('handleUpdate');


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
        });

    $(".selectTipoServicios")
        .select2({
            placeholder: 'Elija tipo de vivienda',
            width: '100%',
            language: 'es',
            minimumResultsForSearch: -1,
            multiple: true,
            data: tipoServicios
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
        multiple: true,
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
        data: prestaciones
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
        fullscreenControl: false,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#181818"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1b1b1b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8a8a8a"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#373737"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3c3c3c"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4e4e4e"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3d3d3d"
                    }
                ]
            }
        ]
    });

    // Update lat/long value of div when anywhere in the map is clicked
    google.maps.event.addListener(map,'click',function(event) {


        var latlng = {lat:event.latLng.lat(),lng: event.latLng.lng() };

        var latt = event.latLng.lat();

        latt = latt
            .toString()
            .slice(4);

        var longg = event.latLng.lng();
        longg = longg
            .toString()
            .slice(4);

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

        setMapPoint("-31." + $(this).val(),"-68." + $("#lon").val() );
    });

    $("#lon").on('change', function(){

        setMapPoint("-31." + $("#lat").val(),"-68." + $(this).val() );
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