/**
 * Created by Ivan on 02/05/2018.
 */

$(function(){

    //select2 de encuestador
    $(".selectEncuestador").select2({
        placeholder: 'Busque encuestador',
        width: '100%',
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
                                text: item.nombre + ', ' + item.apellido,
                                id: item.id
                            }

                    })
                };
            }
        }
    });


    //select2 de supervisor
    $(".selectSupervisor").select2({
        placeholder: 'Busque supervisor',
        width: '100%',
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
                            text: item.nombre + ', ' + item.apellido,
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
        ajax: {
            url: 'planillas/getDepartamentos',
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
                            text: item.Nombre,
                            id: item.ID
                        }

                    })
                };
            }
        }
    });

    $("#agregarRegistro").click(function(){

        fillModal();
    });

});

function fillModal(){

    var htmlString =
        '<table class="table table-primary table-striped table-hover">'+
        '   <tr>'+
        '       <td><input type="text" class="form-control" placeholder="Nombre"></td>'+
        '       <td><input type="text" class="form-control" placeholder="Apellido"></td>'+
        '       <td><input id="nacimiento" data-provide="datepicker"></td>'+
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
        '       <td><input type="number" class="form-control" placeholder="Tipo pensión"></td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td><input type="number" class="form-control" placeholder="Diagnóstico"></td>'+
        '       <td><input type="number" class="form-control" placeholder="Prestaciones"></td>'+
        '       <td><input type="number" class="form-control" placeholder="Nº conviven"></td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td><input type="number" class="form-control" placeholder="Nº G Familiar"></td>'+
        '       <td><input type="number" class="form-control" placeholder="Tipo vivienda"></td>'+
        '       <td><input type="number" class="form-control" placeholder="Servicios básicos"></td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td><input type="number" class="form-control" placeholder="Ingresos"></td>'+
        '       <td></td>'+
        '       <td></td>'+
        '   </tr>'+
        '</table>';


    $("#modalACBody")
        .empty()
        .append(htmlString);

    $("#modalACTitulo").text('Nuevo registro');

    $("#modalAC")
        .modal('show');

    fillDropDown();


}

function fillDropDown(){

    $("#nacimiento")
        .datepicker({
            autoclose: true,
            language: 'es'
        });

    $(".selectLocalidad").select2({
        placeholder: 'Busque localidad',
        width: '100%',
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
}