/**
 * Created by Ivan on 02/05/2018.
 */

var tipoPension;
var tipoVivienda;
var tipoServicios;
//TODO: traer userid sin forzar
var userid = 1;
var planillaid;

var motivos;

var map;
$(function(){


    $.ajax({
        //url: 'planillas/Obtenerotivos',
        url: server_host + ":" + server_port + "/api/IncluirSalud/obtenerMotivos",
        type: 'GET',
        dataType: 'json',
        success: function(data){
            motivos = data;
            //console.dir(data)
        },
        error: function(e){
            ERROR();
            console.log(e);
        }
    });


    $.ajax({
        //url: 'planillas/getTipoPension',
        url: server_host + ":" + server_port + "/api/IncluirSalud/obtenerTipoPensiones",
        type: 'GET',
        dataType: 'json',
        success: function(data){
            tipoPension = data;
            //console.dir(data)
        },
        error: function(e){
            ERROR();
            console.log(e);
        }
    });

    $.ajax({
        //url: '/planillas/getTipoVivienda',
        url: server_host + ":" + server_port + "/api/IncluirSalud/obtenerTipoViviendas",
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
        //url: '/planillas/getTipoServicios',
        url: server_host + ":" + server_port + "/api/IncluirSalud/ObtenerTipoServicios",
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


    $("#agregarPlanilla").click(function(){

        agregarEncabezado(userid);
    });

    $("#agregarEncuesta").click(function(){

        agregarEncuesta();
    });

});

var marker;

var $modal = $("#modalAC");
function ERROR(){

    alert("Hubo un error, por favor recargue la página");
}

var modal;


function fillModal(NumeroPlanilla,idplanilla,filaid){



    planillaid = idplanilla;

    //tabs
    var htmlString =
        '<ul class="nav nav-tabs nav-fill" role="tablist" id="formTabs">'+
        '   <li class="nav-item">' +
        '       <a id="personales-tab" data-toggle="tab" class="nav-link active " href="#personales">Datos personales  </a>' +
        '   </li>'+
        '   <li class="nav-item vivo">' +
        '       <a id="localizacion-tab" data-toggle="tab" class="nav-link " href="#localizacion">Datos de localización</a>' +
        '   </li>'+
        '   <li class="nav-item vivo">' +
        '       <a id="prestaciones-tab" data-toggle="tab" class="nav-link " href="#prestaciones">Datos de la prestación</a>' +
        '   </li>'+
        '   <li class="nav-item vivo">' +
        '       <a id="vivienda-tab" data-toggle="tab" class="nav-link " href="#vivienda">Datos de vivienda</a>' +
        '   </li>'+
        '   <li class="nav-item vivo">' +
        '       <a id="comentarios-tab" data-toggle="tab" class="nav-link " href="#comentarios">Comentarios</a>' +
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
        '<table class="table table-striped">' +
        '<thead class="motivosPersonales">'+
            '<tr class="tr-importante">' +
                '<td colspan="2" id="td-motivoPersonal">' +
                    '<div class="custom-control custom-checkbox">'+
                        '<input type="checkbox" class="custom-control-input" id="motivoPersonal">'+
                        '<label class="custom-control-label" for="motivoPersonal">No tengo este dato</label>'+
                    '</div>'+
                '</td>' +
            '</tr>' +
        '</thead>' +
        '<tbody class="camposPersonales">' +
        '  <tr>'+
        '      <td>' +
        '           <label for="nombre">Nombre</label>' +
        '           <input maxlength="50" id="nombre" name="nombre" type="text" class="form-control" placeholder="Nombre">' +
        '       </td>'+
        '       <td>' +
        '           <label for="apellido">Apellido</label>' +
        '           <input maxlength="50" id="apellido" name="apellido" type="text" class="form-control" placeholder="Apellido">' +
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
        '           <input maxlength="8" id="dni" name="dni" type="number" class="form-control" placeholder="DNI">' +
        '       </td>'+
        '  </tr>'+
        '  <tr>'+
        '      <td  class="vivo">' +
        '           <label for="tel">Teléfono</label>' +
        '           <input id="tel" name="tel" type="text" class="form-control" placeholder="Teléfono">' +
        '       </td>'+
        '       <td id="fechaDefuncion">' +
        '           <label for="defuncion">Fecha de defunción</label>' +
        '           <input maxlength="10" id="defuncion" name="defuncion" class="inputtipobootstrap" placeholder="Elija fecha de fallecimiento" data-provide="datepicker">' +
        '       </td>'+
        '      <td>' +
        '           <label for="vivo">Vivo</label>' +
        '          <input name="vivo" id="fallecido" type="checkbox" checked data-toggle="toggle">' +
        '      </td>' +
        '  </tr>' +
        '</tbody>'+
        '</table>';

    $("#personales")
        .append(htmlPersonales);

    $("#fechaDefuncion").hide();


    //pestaña de datos de localización
    var htmlLocalizacion =
        '<table class="table table-striped">'+
            '<tr class="tr-importante">' +
                '<td colspan="4" id="td-motivoLocalizacion">' +
                    '<div class="custom-control custom-checkbox">'+
                        '<input type="checkbox" class="custom-control-input" id="motivoLocalizacion">'+
                        '<label class="custom-control-label" for="motivoLocalizacion">No tengo este dato</label>'+
                    '</div>'+
                '</td>' +
            '</tr>'+
        '   <tr>'+
        '       <td>' +
        '           <label for="Departamento">Departamento</label>' +
        '           <select name="departamento" class="selectDepartamento"></select>' +
        '       </td>'+
        '       <td>' +
        '           <label for="localidad">Localidad</label>' +
        '           <select name="localidad" class="selectLocalidad"></select>' +
        '       </td>'+
        '       <td>' +
        '           <label for="domicilio">Calle, orientación y altura</label>' +
        '           <input maxlength="50" id="domicilio" name="domicilio" type="text" class="form-control" placeholder="Domicilio">' +
        '       </td>'+
        '       <td>' +
        '           <label for="barrio">Barrio</label>' +
        '           <input maxlength="150" id="barrio" name="barrio" type="text" class="form-control" placeholder="Barrio">' +
        '       </td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td>' +
        '           <div class="input-group input-group">'+
        '               <div class="input-group-prepend">'+
        '                   <span class="input-group-text" id="latitud">Latitud</span>'+
        '               </div>'+
        '               <input maxlength="20" name="lat" id="lat" type="text" class="form-control" aria-describedby="latitud" placeholder="latitud">'+
        '           </div>'+
        '       </td>' +
        '       <td>' +
        '           <div class="input-group input-group">'+
        '               <div class="input-group-prepend">'+
        '                   <span class="input-group-text" id="longitud">Longitud</span>'+
        '               </div>'+
        '               <input maxlength="20" name="lon" id="lon" type="text" class="form-control" aria-describedby="longitud" placeholder="longitud">'+
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
        '<table class="table table-striped">'+
            '<tr class="tr-importante">' +
                '<td colspan="2" id="td-motivoPrestaciones">' +
                    '<div class="custom-control custom-checkbox">'+
                        '<input type="checkbox" class="custom-control-input" id="motivoPrestaciones">'+
                        '<label class="custom-control-label" for="motivoPrestaciones">No tengo este dato</label>'+
                    '</div>'+
                '</td>' +
            '</tr>'+
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
        '<table class="table table-striped">'+
            '<tr class="tr-importante">'+
                '<td colspan="3" id="td-motivoVivienda">' +
                    '<div class="custom-control custom-checkbox">'+
                        '<input type="checkbox" class="custom-control-input" id="motivoVivienda">'+
                        '<label class="custom-control-label" for="motivoVivienda">No tengo este dato</label>'+
                    '</div>'+
                '</td>' +
            '</tr>'+
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
        '           <input maxlength="100" id="comentarioTipoVivienda" class="form-control" type="text" placeholder="Especifique" >' +
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


    $("#motivoPersonal").change(function(){
        console.log("clicked");
        console.log($("#motivoPersonal").prop("checked"))
        $("#td-motivoPersonal").append("<p>Hola</p>")

    })

    $("#motivoLocalizacion").change(function(){
        console.log("clicked");
        console.log($("#motivoLocalizacion").prop("checked"))
        $("#td-motivoLocalizacion").append("<p>Hola</p>")
    })

    $("#motivoPrestaciones").change(function(){
        console.log("clicked");
        console.log($("#motivoPrestaciones").prop("checked"))
        $("#td-motivoPrestaciones").append("<p>Hola</p>")
    })

    $("#motivoVivienda").change(function(){
        console.log("clicked");
        console.log($("#motivoVivienda").prop("checked"))
        $("#td-motivoVivienda").append("<p>Hola</p>")
    })



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
        '<table class="table table-striped">'+
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
        .text('Editar registro, planilla nº: ' + NumeroPlanilla);

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

    fillDropDown();

}

function completarDatos(filaid){


    $.ajax({
        url: server_host + ":" + server_port + server_url + "/api/IncluirSalud/ObtenerFilaPlanilla?id=" + filaid,
        method: "GET",
        dataType: "json",

        beforeSend: function()
        {

            swal("Espere...", "Se están completando los datos", "info");
        }

    }).done(function(res){
        //Tiempo de creacion sugerido para el swalert
        setTimeout(function(){
            swal.close();
        },500)

        //datos para completar
        var data = res[0];

        //console.dir(data);

        //datos personales

        $("#nombre").val(data.Nombre);

        $("#apellido").val(data.Apellido);

        $("#dni").val(data.DNI);

        //el json trae un error de ortografía

        var conversorDeSexo = data.Sexo === 'Masculino' ? 1 : 2;

        $("#fechaNacimiento").val(data.FechaNacimiento);

        $("#sexo").val(conversorDeSexo);

        $("#tel").val(data.Telefono);




         //localizacion
        $('.selectLocalidad')
            .empty()
            .append('<option selected value="' + data.LocalidadID + '">'+ data.Localidad +'</option>')
            .trigger('change');

        $('.selectDepartamento')
            .empty()
            .append('<option selected value="' + data.DepartamentoID + '">'+ data.DepartamentoNombre +'</option>')
            .trigger('change');


        $("#domicilio").val(data.Domicilio);

        $("#barrio").val(data.Barrio);

        $("#lat").val(data.Latitud);
        $("#lon").val(data.Longitud);

        $("#lat").trigger('change');


        //Prestaciones
        $(tipoPension).each(function(i,v){


            if(v.text == data.TipoPension){

                $(".selectTipoPension")
                    .val(v.id)
                    .trigger('change');
            }
        });

        $('.selectCIE10')
            .empty()
            .append('<option selected value="' + data.Pension_cie10_id10 + '">'+ data.Pension_cie10_id10 + ' - ' + data.Pension_cie10_dec10 +'</option>')
            .trigger('change');

        //Vivienda
        $("#conviven").val(data.NroIntegrantesConviven);
        $("#grupo").val(data.NroPersonasConviven);

        //$(".selectTipoVivienda").val();
        $("#comentario").val(data.Comentario);

        //Titularidad
        // Base 1- Titular | 2 - Adherente


            if(data.Titularidad == 1)
            {
                $(".btn-light").first().button("toggle");
            }
            else
            {
                $(".btn-light").slice(1,2).button("toggle");

            }

        //verga
        $(".selectPrestaciones").select2('val', 1);

         /*
         //prestación
         $("#btnTitular").prop('checked') ? 1 : 2;
         $(".selectPrestaciones").val();
         //vivienda
         $("#conviven").val();
         $("#grupo").val();
         $(".selectTipoVivienda").val();
         $("#comentarioTipoVivienda").val();
         $(".selectTipoServicios").val();
         $("#comentario").val();
         */
    })
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
                $("#apellido"),
                $('#lat'),
                $('#lon')
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

    var data = {
        enlace_tipoPension: [],
        enlace_prestaciones: [],
        enlace_serviciosBasicos: []
    };

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
        //data.ID = ID;
        data.planillaID = planillaid;
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
        data.departamentoID = $(".selectDepartamento").val();
        //prestación
        data.tipoBeneficiarioID = $("#btnTitular").prop('checked') ? 1 : 2;

        data.enlace_tipoPension = [
            {

                tipoPensionID: $(".selectTipoPension ").val()
            }
        ];
        data.diagnosticoID = $(".selectCIE10").val();
        //data.enlace_prestaciones = $(".selectPrestaciones").val();

        var prestaciones = $(".selectPrestaciones").val();

        for(var index in prestaciones){

            data.enlace_prestaciones.push({
                prestacionID: prestaciones[index]
            });
        }

        //vivienda
        data.nroPersonasConviven = $("#conviven").val();
        data.nroIntegrantesBeneficiario = $("#grupo").val();
        data.tipoViviendaID = $(".selectTipoVivienda").val();
        data.tipoViviendaDetalle = $("#comentarioTipoVivienda").val();
        //data.enlace_serviciosBasicos = $(".selectTipoServicios").val();

        var serviciosBasicos = $(".selectTipoServicios").val();

        for(var index in serviciosBasicos){

            data.enlace_serviciosBasicos.push({
                serviciosBasicosID: serviciosBasicos[index]
            });
        }

        data.comentario = $("#comentario").val();

        enviarDatos(data);
    }

}

function enviarDatos(jsonDATA){


    console.log("los datos que se enviarían son los siguientes:");
    console.dir(jsonDATA);

    var url = (editar==0) ? server_host+":"+server_port+server_url+"/api/IncluirSalud/GuardarFilaPlanilla" : server_host+":"+server_port+server_url+"/api/IncluirSalud/ActualizarFilaPlanilla";
    $.ajax({
        //id de usuario forzado a 1
        url: url,
        method: "POST",
        dataType: "json",
        data: jsonDATA
    })
        .done(function(res){
            if(typeof(res)=="undefined")
                {
                    swal("Incluir Salud", "Se agrego una nuevo registro!", "success");
                    setTimeout(function(){location.reload();},1500)
                }
                else
                {
                    console.dir(res);
                }

        });
}

function fillDropDown(){

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
            dropdownParent: $("#modalACBody"),
            //minimumResultsForSearch: -1,
            data: tipoPension
        });

    $(".selectTipoVivienda")
        .select2({
            placeholder: 'Elija tipo de vivienda',
            width: '100%',
            language: 'es',
            //minimumResultsForSearch: -1,
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
            //minimumResultsForSearch: -1,
            multiple: true,
            data: tipoServicios
        }).on('select2:select',function(e){
        console.log(e)
    });


    $(".selectDepartamento").select2({
        dropdownParent: $("#modalACBody"),
        placeholder: 'Busque departamento',
        width: '100%',
        language: 'es',
        ajax: {
            url: server_host + ":" + server_port + "/api/IncluirSalud/ObtenerDepartamentos?id="+ 18, // San Juan
            type: 'GET',
            dataType: 'json',
            delay: 250,
            data: function (params) {
                console.dir(params)
                return {
                    searchTerm: params.term // search term
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
        }
    });

    $(".selectLocalidad").select2({
        dropdownParent: $("#modalACBody"),
        placeholder: 'Busque localidad',
        width: '100%',
        language: 'es',
        ajax: {
            url: server_host + ":" + server_port + "/api/IncluirSalud/ObtenerLocalidades?id="+ $(".selectDepartamento").val(),
            type: 'GET',
            dataType: 'json',
            delay: 250,
            data: function (params) {
                console.dir(params)
                return {
                    searchTerm: params.term // search term
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
        }
    });


    $(".selectDepartamento").change(function(){
        $(".selectLocalidad").empty();
        $(".selectLocalidad").select2({
            dropdownParent: $("#modalACBody"),
            placeholder: 'Busque localidad',
            width: '100%',
            language: 'es',
            ajax: {
                url: server_host + ":" + server_port + "/api/IncluirSalud/ObtenerLocalidades?id="+ $(".selectDepartamento").val(),
                type: 'GET',
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    console.dir(params)
                    return {
                        searchTerm: params.term // search term
                    };
                },
                processResults: function (response) {
                    return {
                        results: response
                    };
                },
                cache: true
            }
        });
    })


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
            //url: '/planillas/getCIE10',
            url: server_host + ":" + server_port + "/api/IncluirSalud/ObtenerCIE10",
            type: 'GET',
            dataType: "json",
            delay: 250,
            data: function (params) {
                console.dir(params)
                return {
                    searchTerm: params.term // search term
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
        }
    });


// Fetch the preselected item, and add to the control


    //**//
    $(".selectPrestaciones").select2({
        placeholder: 'Elija prestaciones',
        width: '100%',
        language: 'es',
        //minimumInputLength: 3,
        multiple: true,
        dropdownParent: $("#modalACBody"),
        ajax: {
            //url: '/planillas/getCIE10',
            url: server_host + ":" + server_port + "/api/IncluirSalud/ObtenerPrestaciones",
            type: 'GET',
            dataType: "json",
            delay: 250,
            data: function (params) {
                console.dir(params)
                return {
                    searchTerm: params.term // search term
                };
            },
            processResults: function (response) {
                return {
                    results: response
                };
            },
            cache: true
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
