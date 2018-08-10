/**
 * Created by ien83 on 31/07/2018.
 */
$(function(){

    $.ajax({

        url: "/estadisticas/totales",
        type: 'GET',
        dataType: 'json',
        success: function(data){
            console.log(data)
            setDatos(data);

        },
        error: function(e){
            console.log(e);
        }
    });

    $.ajax({

        url: "/estadisticas/puntos",
        type: 'GET',
        dataType: 'json',
        success: function(data){
            marcarPuntos(data)

        },
        error: function(e){
            console.log(e);
        }
    });

});



function setDatos(datos){


    $("#totalplanillas").text(datos[1].totalplanillas);
    $("#totalregistros").text(datos[0].totalregistros);
    $("#totalencuestas").text(datos[5].totalencuestas);

    loadCharts(datos);
}

function loadCharts(datos){

    var planillasPorUsuarioData = [];
    var planillasPorSupervisorData = [];
    var planillasPorEncuestadorData = [];
    var registrosPorUsuarioData = [];
    var registrosPorSupervisorData = [];
    var registrosPorEncuestadorData = [];

    for(var index in datos[2]){

        planillasPorUsuarioData.push({
            name: datos[2][index].nombre + ' ' + datos[2][index].apellido,
            data: [datos[2][index].cantidad]
        });

    }

    for(var index in datos[3]){

        planillasPorSupervisorData.push({
            name: datos[3][index].nombre + ' ' + datos[3][index].apellido,
            data: [datos[3][index].cantidad]
        });

    }


    for(var index in datos[4]){

        planillasPorEncuestadorData.push({
            name: datos[4][index].nombre + ' ' + datos[4][index].apellido,
            data: [datos[4][index].cantidad]
        });

    }

    for(var index in datos[6]){

        registrosPorUsuarioData.push({
            name: datos[6][index].usuario,
            data: [datos[6][index].cantidad]
        });

    }

    for(var index in datos[7]){

        registrosPorSupervisorData.push({
            name: datos[7][index].supervisor,
            data: [datos[7][index].cantidad]
        });

    }

    for(var index in datos[8]){

        registrosPorEncuestadorData.push({
            name: datos[8][index].encuestador,
            data: [datos[8][index].cantidad]
        });

    }


    var planillasPorUsuario = Highcharts.chart('planillasPorUsuario', {

        chart: {

            width: '600',
            type: 'bar'
        },
        title: {
            text: 'Planillas por usuario'
        },
        xAxis: {
            title: {
                text: 'Usuarios'
            }
        },
        yAxis: {
            title: {
                text: 'Planillas'
            }
        },
        series: planillasPorUsuarioData
    });

    var planillasPorSupervisor = Highcharts.chart('planillasPorSupervisor', {
        chart: {
            width: '600',
            type: 'bar'
        },
        title: {
            text: 'Planillas por Supervisor'
        },
        xAxis: {
            title: {
                text: 'Usuarios'
            }
        },
        yAxis: {
            title: {
                text: 'Planillas'
            }
        },
        series: planillasPorSupervisorData
    });

    var planillasPorEncuestador = Highcharts.chart('planillasPorEncuestador', {
        chart: {
            width: '600',
            type: 'column'
        },
        title: {
            text: 'Planillas por Encuestador'
        },
        xAxis: {
            title: {
                text: 'Usuarios'
            }
        },
        yAxis: {
            title: {
                text: 'Planillas'
            }
        },
        series: planillasPorEncuestadorData
    });


    var registrosPorUsuario = Highcharts.chart('registrosPorUsuario', {
        chart: {
            width: '600',
            type: 'bar'
        },
        title: {
            text: 'Registros por usuario'
        },
        xAxis: {
            title: {
                text: 'Usuarios'
            }
        },
        yAxis: {
            title: {
                text: 'Planillas'
            }
        },
        series: registrosPorUsuarioData
    });

    var registrosPorSupervisor = Highcharts.chart('registrosPorSupervisor', {
        chart: {
            width: '600',
            type: 'bar'
        },
        title: {
            text: 'Registros por supervisor'
        },
        xAxis: {
            title: {
                text: 'Usuarios'
            }
        },
        yAxis: {
            title: {
                text: 'Planillas'
            }
        },
        series: registrosPorSupervisorData
    });

    var registrosPorEncuestador = Highcharts.chart('registrosPorEncuestador', {
        chart: {
            width: '600',
            type: 'column'
        },
        title: {
            text: 'Registros por encuestador'
        },
        xAxis: {
            title: {
                text: 'Usuarios'
            }
        },
        yAxis: {
            title: {
                text: 'Planillas'
            }
        },
        series: registrosPorEncuestadorData
    });

}

function marcarPuntos(puntos){

    var marcadores = [];

    //verificar puntos
    for(var index in puntos){

        puntos[index].latitud = puntos[index].latitud.trim();
        puntos[index].longitud = puntos[index].longitud.trim();

        if( /\-?\d+(\.\d+)/.test(puntos[index].latitud) &&  /\-?\d+(\.\d+)/.test(puntos[index].longitud) ){

            marcadores.push( puntos[index]);
        }else{
            //console.log("punto incorrecto", puntos[index])
        }

    }

    initMap(marcadores);
}



function initMap(puntos) {

    var latitude = -31.536395; // YOUR LATITUDE VALUE
    var longitude = -68.536976; // YOUR LONGITUDE VALUE

    var myLatLng = {lat: latitude, lng: longitude};

    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 7,
        disableDoubleClickZoom: true, // disable the default map zoom on double click
        fullscreenControl: false
    });


    for(var index in puntos){

        setMapPoint(puntos[index].latitud, puntos[index].longitud, puntos[index].planillaid);
    }

    function setMapPoint(lat, lng,id){


        var latlng = {lat: parseFloat(lat) , lng: parseFloat(lng) };
/*
        if(marker){
            marker.setMap(null);
        }
*/
        map
            .setCenter(latlng);

        marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Planilla: " + id.toString()
        });

    }
}
