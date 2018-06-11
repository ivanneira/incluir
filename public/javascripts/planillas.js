$(function(){


    $.ajax({
        //id de usuario forzado a 1
        url: "http://192.168.3.105:45455/api/IncluirSalud/ObtenerPlanillas?id=1",
        method: "GET",
        dataType: "json"
    })
        .done(function(res){

            console.log(res);
        });


    $("#planillasBody")
        .append("lorem ipsum")
});