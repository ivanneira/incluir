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

    var chartData = [];

    for(var index in datos[2]){

        chartData.push({
            name: datos[2][index].nombre + ' ' + datos[2][index].apellido,
            data: datos[2][index].cantidad
        });

    }

    console.dir(chartData)

    var myChart = Highcharts.chart('planillasPorUsuario', {
        chart: {
            width: '600',
            type: 'bar'
        },
        title: {
            text: 'Planillas por usuario'
        },
        xAxis: {
            title: {
                text: 'usuarios'
            }
        },
        yAxis: {
            title: {
                text: 'planillas'
            }
        },
        series: chartData
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
