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
    var graficoPorDepartamentoData = [];
    var graficoPorDepartamentoEncuestaData = [];
    var registrosPorLocalidadData = [];

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

    for(var index in datos[9]){

        graficoPorDepartamentoData.push({
            name: datos[9][index].departamento,
            y: datos[9][index].cantidad
        });

    }

    for(var index in datos[10]){

        graficoPorDepartamentoEncuestaData.push({
            name: datos[10][index].departamento,
            y: datos[10][index].cantidad
        });

    }

    for(var index in datos[11]){

        registrosPorLocalidadData.push({
            name: datos[11][index].nombre,
            y: datos[11][index].cantidad
        });

    }


    var planillasPorUsuario = Highcharts.chart('planillasPorUsuario', {

        chart: {

            width: '500',
            type: 'bar'
        },
        title: {
            text: 'Planillas por usuario'
        },
        xAxis: {
            title: {
                text: 'Usuarios'
            },
            labels: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Planillas'
            }
        },
        series: planillasPorUsuarioData,
        tooltip: {
            formatter: function() {
                return '<b>'+ this.y + '</b> planillas de <b>'+ this.series.name +'</b>';
            }
        },
    });

    var planillasPorSupervisor = Highcharts.chart('planillasPorSupervisor', {
        chart: {
            width: '500',
            type: 'bar'
        },
        title: {
            text: 'Planillas por Supervisor'
        },
        xAxis: {
            title: {
                text: 'Usuarios'
            },
            labels: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Planillas'
            }
        },
        series: planillasPorSupervisorData,
        tooltip: {
            formatter: function() {
                return '<b>'+ this.y + '</b> planillas de <b>'+ this.series.name +'</b>';
            }
        }
    });

    var planillasPorEncuestador = Highcharts.chart('planillasPorEncuestador', {
        chart: {
            width: '500',
            type: 'column'
        },
        title: {
            text: 'Planillas por Encuestador'
        },
        xAxis: {
            title: {
                text: 'Usuarios'
            },
            labels: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Planillas'
            }
        },
        legend: {
            enabled: false
        },
        series: planillasPorEncuestadorData,
        tooltip: {
            formatter: function() {
                return '<b>'+ this.y + '</b> planillas de <b>'+ this.series.name +'</b>';
            }
        }
    });


    var registrosPorUsuario = Highcharts.chart('registrosPorUsuario', {
        chart: {
            width: '500',
            type: 'bar'
        },
        title: {
            text: 'Registros por usuario'
        },
        xAxis: {
            title: {
                text: 'Usuarios'
            },
            labels: {
                enabled: false
            }
        },
        yAxis: {
            title: {
                text: 'Registros'
            }
        },
        series: registrosPorUsuarioData,
        tooltip: {
            formatter: function() {
                return '<b>'+ this.y + '</b> registros de <b>'+ this.series.name +'</b>';
            }
        }
    });

    var registrosPorSupervisor = Highcharts.chart('registrosPorSupervisor', {
        chart: {
            width: '500',
            type: 'bar'
        },
        title: {
            text: 'Registros por supervisor'
        },
        xAxis: {
            title: {
                text: 'Supervisor'
            }
        },
        yAxis: {
            title: {
                text: 'Usuarios'
            }
        },
        series: registrosPorSupervisorData,
        tooltip: {
            formatter: function() {
                return '<b>'+ this.y + '</b> registros de <b>'+ this.series.name +'</b>';
            }
        }
    });

    var registrosPorEncuestador = Highcharts.chart('registrosPorEncuestador', {
        chart: {
            width: '500',
            type: 'column'
        },
        title: {
            text: 'Registros por encuestador'
        },
        xAxis: {
            title: {
                text: 'Encuestador'
            }
        },
        yAxis: {
            title: {
                text: 'Registros'
            },
            labels: {
                enabled: false
            }
        },
        legend: {
            enabled: false
        },
        series: registrosPorEncuestadorData,
        tooltip: {
            formatter: function() {
                return '<b>'+ this.y + '</b> registros de <b>'+ this.series.name +'</b>';
            }
        }
    });


    var graficoPorDepartamento = Highcharts.chart('graficoPorDepartamento', {
        chart: {
            width: '500',
            type: 'pie'
        },
        title: {
            text: 'Registros por departamento'
        },
        xAxis: {
            title: {
                text: 'Departamento'
            }
        },
        yAxis: {
            title: {
                text: 'Registros'
            }
        },
        series: [{
            name: "Departamentos",
            data: graficoPorDepartamentoData
        }],
        tooltip: {

            formatter: function() {

                return this.key + ': <b>' + this.y + '</b> registros,  <b>' + this.point.percentage.toFixed(2) + '%</b>';
            }
        },
    });

    var graficoPorDepartamentoEncuesta = Highcharts.chart('graficoPorDepartamentoEncuesta', {
        chart: {
            width: '500',
            type: 'pie'
        },
        title: {
            text: 'Encuestas por departamento'
        },
        xAxis: {
            title: {
                text: 'Departamento'
            }
        },
        yAxis: {
            title: {
                text: 'Registros'
            }
        },
        series: [{
            name: "Departamentos",
            data: graficoPorDepartamentoEncuestaData
        }],
        tooltip: {

            formatter: function() {

                return this.key + ': <b>' + this.y + '</b> registros,  <b>' + this.point.percentage.toFixed(2) + '%</b>';
            }
        },
    });

    var registrosPorLocalidad = Highcharts.chart('registrosPorLocalidad', {
            chart: {
                width: '500',
                type: 'pie'
            },
            title: {
                text: 'Registros por Localidad'
            },
            xAxis: {
                title: {
                    text: 'Localidad'
                }
            },
            yAxis: {
                title: {
                    text: 'Registros'
                },
                labels: {
                    enabled: false
                }
            },
            series: [{
                name: "Localidades",
                data: registrosPorLocalidadData
            }],
            tooltip: {
                formatter: function() {

                    return this.key + ': <b>' + this.y + '</b> registros,  <b>' + this.point.percentage.toFixed(2) + '%</b>';
                }
            }
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
