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
                    '<tr class="abrirplanilla" data-toggle="collapse"  href="#collapse' + res[index].PlanillaID + '" data-id="' + res[index].PlanillaID + '">' +
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
                    //'       <button class="btn btn-sm btn-success editarPlanilla" data-toggle="collapse"  href="#collapse' + res[index].PlanillaID + '" data-id="' + res[index].PlanillaID + '">Ver</button>' +
                    //'       <button id="agregarRegistro" class="btn btn-sm btn-success" data-id="' + res[index].PlanillaID + '">+Agregar Registro</button>' +
                    //'       <button class="btn btn-danger borrarPlanilla" data-id="' + res[index].PlanillaID + '">Borrar</button>' +
                    '       <button class="btn btn-sm btn-success nuevoRegistro" data-numeroplanilla="' + res[index].NumeroPlanilla + '" data-departamentoid="' + res[index].DepartamentoID + '" data-id="' + res[index].PlanillaID + '">+Agregar Registro</button>' +
                    '   </td>' +
                    '</tr>' +
                    '<tr>' +
                    '   <td colspan="4">' +
                    '       <div class="collapse" id="collapse' + res[index].PlanillaID + '">' +
                    //'       <button class="btn btn-sm btn-success nuevoRegistro" data-numeroplanilla="' + res[index].NumeroPlanilla + '" data-departamentoid="' + res[index].DepartamentoID + '" data-id="' + res[index].PlanillaID + '">+Agregar Registro</button>' +
                    //'          <p>lorem</p>'+
                    '       </div>' +
                    '   </td>' +
                    '</tr>' +
                    '';



                //console.log(res[index]);
            }


            $("#planillasBody")
                .append(htmlStringPlanilla);

            $(".abrirplanilla").click(function(){

                console.log($(this).data().id)

                var idplanilla = $(this).data().id;

                $("#collapse"+idplanilla )
                    .empty()
                    .append("Espere mientras se cargan los datos por favor...");

                $.ajax({
                    url: "http://192.168.3.105:45455/api/IncluirSalud/ObtenerFilasPlanilla?id=" + idplanilla,
                    method: "GET",
                    dataType: "json"
                })
                    .done(function(res2){


                        console.log(res2);

                        var htmlStringFilaPlanillas = '';



                        for(var index in res2){

                            htmlStringFilaPlanillas +=
                                '<tr class="bg-dark text-light d-block">' +
                                '   <td>' +
                                res2[index].Nombre + " " + res2[index].Apellido +
                                '   </td>' +
                                '   <td>' +
                                    res2[index].Localidad +
                                '   </td>' +
                                '   <td>' +
                                    res2[index].Domicilio +
                                '   </td>' +
                                '   <td>' +
                                '       <button class="btn btn-warning" data-id="' + res2[index].PlanillaID + '">Editar</button>' +
                                '   </td>' +
                                '</tr>'

                        }

                        if(res2 == ''){
                            htmlStringFilaPlanillas = 'No se encontraron datos.';
                        }

                        $("#collapse"+idplanilla )
                            .empty()
                            .append(htmlStringFilaPlanillas);

                    })
                .fail(function(e){console.log(e)})

            });

            $(".nuevoRegistro").click(function(){

                console.log($(this).data())


                fillModal($(this).data().departamentoid,$(this).data().numeroplanilla,$(this).data().id);

            });
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



                //console.log(res[index]);
            }

            $("#encuestasBody")
                .append(htmlStringEncuesta)



            //console.log(res)

        });

});