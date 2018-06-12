$(function(){


    $.ajax({
        //id de usuario forzado a 1
        url: "http://192.168.3.105:45455/api/IncluirSalud/ObtenerPlanillas?id=1",
        method: "GET",
        dataType: "json"
    })
        .done(function(res){

            var htmlStringPlanilla =
                '<tr>' +
                '   <th>' +
                '       Nº Planilla' +
                '   </th>' +
                '   <th>' +
                '       Encuestador' +
                '   </th>' +
                '   <th>' +
                '       Departamento' +
                '   </th>' +
                '   <th>' +
                '       Acción' +
                '   </th>' +
                '</tr>';

            for(var index in res){

                htmlStringPlanilla +=
                    '<tr>' +
                    '   <td>' +
                    res[index].NumeroPlanilla +
                    '   </td>' +
                    '   <td>' +
                    res[index].EncuestadorNombre +
                    '   </td>' +
                    '   <td>' +
                    res[index].DepartamentoNombre +
                    '   </td>' +
                    '   <td>' +
                    '       <button class="btn btn-sm btn-success editarPlanilla" data-toggle="collapse"  href="#collapse' + res[index].PlanillaID + '" data-id="' + res[index].PlanillaID + '">Editar</button>' +
                    //'       <button id="agregarRegistro" class="btn btn-sm btn-success" data-id="' + res[index].PlanillaID + '">+Agregar Registro</button>' +
                    //'       <button class="btn btn-danger borrarPlanilla" data-id="' + res[index].PlanillaID + '">Borrar</button>' +
                    '   </td>' +
                    '</tr>' +
                    '<tr>' +
                    '   <td colspan="4">' +
                    '       <div class="collapse" id="collapse' + res[index].PlanillaID + '">' +
                    '       <button class="btn btn-sm btn-success nuevoRegistro" data-departamentoid="' + res[index].DepartamentoID + '" data-id="' + res[index].PlanillaID + '">+Agregar Registro</button>' +
                    '       </div>' +
                    '   </td>' +
                    '</tr>' +
                    '';



                console.log(res[index]);
            }


            $("#planillasBody")
                .append(htmlStringPlanilla)
        });

    $.ajax({
        //id de usuario forzado a 1
        url: "http://192.168.3.105:45455/api/IncluirSalud/ObtenerEncuesta?id=1",
        method: "GET",
        dataType: "json"
    })
        .done(function(res){

            var htmlStringEncuesta =
                '<tr>' +
                '   <th>' +
                '       Nº de Encuesta' +
                '   </th>' +
                '   <th>' +
                '       Encuestador' +
                '   </th>' +
                '   <th>' +
                '       Departamento' +
                '   </th>' +
                '   <th>' +
                '       Acción' +
                '   </th>' +
                '</tr>';

            for(var index in res){

                htmlStringEncuesta +=
                    '<tr>' +
                    '   <td>' +
                    res[index].NumeroEncuesta +
                    '   </td>' +
                    '   <td>' +
                    res[index].EncuestadorNombre +
                    '   </td>' +
                    '   <td>' +
                    res[index].DepartamentoNombre +
                    '   </td>' +
                    '   <td>' +
                    '       <button class="btn btn-sm btn-success editarPlanilla" data-id="' + res[index].PlanillaID + '">Editar</button>' +
                    //'       <button id="agregarRegistro" class="btn btn-sm btn-success" data-id="' + res[index].PlanillaID + '">+Agregar Registro</button>' +
                    //'       <button class="btn btn-danger borrarPlanilla" data-id="' + res[index].PlanillaID + '">Borrar</button>' +
                    '   </td>' +
                    '</tr>';



                console.log(res[index]);
            }

            $("#encuestasBody")
                .append(htmlStringEncuesta)

            $(".nuevoRegistro").click(function(){

                console.log($(this).data().departamentoid)

                fillModal($(this).data().departamentoid);
/*
                $.ajax({
                    url: 'http://192.168.3.105:45455/api/IncluirSalud/ObtenerFilasPlanilla?id=' + $(this).data('id'),
                    type: 'GET',
                    dataType: 'json',
                    success: function(data){
                        tipoPension = data;
                    },
                    error: function(e){
                        ERROR();
                        console.log(e);
                    }
                });*/

            });

            console.log(res)

        });

});