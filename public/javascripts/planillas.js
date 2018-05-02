/**
 * Created by Ivan on 02/05/2018.
 */

$(function(){
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
    $(".selectDepartamento").select2({
        placeholder: 'Busque departamento',
        width: '100%'
    });

});