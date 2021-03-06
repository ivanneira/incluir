/**
 * Created by Ivan on 02/05/2018.
 */

var tipoPension;
var tipoVivienda;
var tipoServicios;
var userid = userID;
var planillaid;
var filaID = '';

var filaplanillaid;

var motivos;

var map;

var barrio = "";

var fechahora = "";

$(function(){


    $.ajax({
        //url: 'planillas/Obtenerotivos',
        url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/obtenerMotivos",
        type: 'GET',
        dataType: 'json',
        success: function(data){
            motivos = data;

        },
        error: function(e){
            ERROR();
            console.log(e);
        }
    });


    $.ajax({
        //url: 'planillas/getTipoPension',
        url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/obtenerTipoPensiones",
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
        //url: '/planillas/getTipoVivienda',
        url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/obtenerTipoViviendas",
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
        url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/ObtenerTipoServicios",
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

    //llamada ajax para traer los barrios
    $.ajax({
        url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/obtenerbarrios?id=",
        type: 'GET',
        dataType: 'json',
        success: function(data){

            for(var index in data){

                barrio += '<option value="' + data[index].id + '">' + data[index].text + '</option>'
            }

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


function ERROR(){

    alert("Hubo un error, por favor recargue la página");
}


function fillModal(NumeroPlanilla,idplanilla,filaid){


    filaplanillaid = idplanilla;

    if( typeof(filaid) !== 'undefined' ){
        filaID = filaid;
    }else{

        filaID = '';
    }



    planillaid = idplanilla;

    //tabs
    var htmlString =
        '<ul class="nav nav-tabs nav-fill" role="tablist" id="formTabs">'+
        '   <li class="nav-item">' +
        '       <a id="personales-tab" data-toggle="tab" class="nav-link active " href="#personales">Datos personales <i class="alerta personales fa fa-exclamation-triangle text-warning"></i> </a>' +
        '   </li>'+
        '   <li class="nav-item vivo">' +
        '       <a id="localizacion-tab" tabindex="9" data-toggle="tab" class="nav-link " href="#localizacion">Datos de localización <i class="alerta localizacion fa fa-exclamation-triangle text-warning"></i> </a>' +
        '   </li>'+
        '   <li class="nav-item vivo">' +
        '       <a id="prestaciones-tab" tabindex="16" data-toggle="tab" class="nav-link " href="#prestaciones">Datos de la prestación <i class="alerta prestacion fa fa-exclamation-triangle text-warning"></i> </a>' +
        '   </li>'+
        '   <li class="nav-item vivo">' +
        '       <a id="vivienda-tab"  tabindex="22" data-toggle="tab" class="nav-link " href="#vivienda">Datos de vivienda <i class="alerta vivienda fa fa-exclamation-triangle text-warning"></i> </a>' +
        '   </li>'+
        '   <li class="nav-item vivo">' +
        '       <a id="comentarios-tab"  tabindex="27" data-toggle="tab" class="nav-link " href="#comentarios">Comentarios </a>' +
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

    //esconde las alertas
    $(".alerta").hide();

    //pestaña de datos personales
    var htmlPersonales =
        '<table class="table table-striped">' +
        '   <thead>'+
        '       <tr class="tr-importante">' +
        '           <td class="bg-light" id="td-motivoPersonal">' +
        '               <div class="custom-control custom-checkbox">'+
        '                   <input type="checkbox" data-mot="1" id="mot-1" class="custom-control-input che">'+
        '                   <label class="custom-control-label" for="mot-1">Datos incompletos</label>'+
        '               </div>'+
        '           </td>' +
        '           <td  class="bg-light">' +
        '                <select class="form-control" id="sel-1">'+
        '               </select>'+
        '           </td>' +
        '       </tr>' +
        '   </thead>' +
        '   <tbody id="cam-1">' +
        '     <tr>'+
        '         <td>' +
        '              <label for="nombre">Nombre</label>' +
        '              <input tabindex="1" maxlength="50" id="nombre" name="nombre" type="text" class="form-control" placeholder="Nombre">' +
        '          </td>'+
        '          <td>' +
        '              <label for="apellido">Apellido</label>' +
        '              <input tabindex="2" maxlength="50" id="apellido" name="apellido" type="text" class="form-control" placeholder="Apellido">' +
        '          </td>'+
        '     </tr>'+
        '     <tr  class="vivo">'+
        '         <td>' +
        '              <label for="fecnac">Fecha de nacimiento</label>' +
        '              <input tabindex="3" id="fechaNacimiento" name="fecnac" class="inputtipobootstrap" placeholder="Elija fecha" data-provide="datepicker">' +
        '              <label for="sexo">Sexo</label>' +
        '              <select tabindex="5" class="form-control" id="sexo" name="sexo">' +
        '                  <option value="3">Seleccione el sexo...</option>' +
        '                  <option value="1">Masculino</option>' +
        '                  <option value="2">Femenino</option>' +
        '              </select>' +
        '          </td>'+
        '         <td>' +
        '              <label for="dni">DNI</label>' +
        '              <input tabindex="4" maxlength="8" id="dni" name="dni" type="number" class="form-control" placeholder="DNI">' +
        '          </td>'+
        '     </tr>'+
        '     <tr>'+
        '         <td  class="vivo">' +
        '              <label for="tel">Teléfono</label>' +
        '              <input tabindex="6" id="tel" name="tel" type="text" class="form-control" placeholder="Teléfono" maxlength="20">' +
        '          </td>'+
        '          <td id="fechaDefuncion">' +
        '              <label for="defuncion">Fecha de defunción</label>' +
        '              <input tabindex="7" maxlength="10" id="defuncion" name="defuncion" class="inputtipobootstrap" placeholder="Elija fecha de fallecimiento" data-provide="datepicker">' +
        '          </td>'+
        '         <td>' +
        '              <label for="vivo">Vivo</label>' +
        '             <input tabindex="8" name="vivo" id="fallecido" type="checkbox" checked data-toggle="toggle">' +
        '         </td>' +
        '     </tr>' +
        '   </tbody>'+
        '</table>';

    $("#personales")
        .append(htmlPersonales);

    $("#fechaDefuncion").hide();



    //pestaña de datos de localización
    var htmlLocalizacion =
        '<table class="table table-striped">'+
        '   <thead>'+
        '    <tr class="tr-importante">' +
        '        <td colspan="2" class="bg-light" id="td-motivoLocalizacion">' +
        '            <div class="custom-control custom-checkbox">'+
        '                <input type="checkbox" data-mot="2" id="mot-2" class="custom-control-input che che-1" >'+
        '                <label class="custom-control-label" for="mot-2">Datos incompletos</label>'+
        '            </div>'+
        '        </td>' +
        '           <td colspan="2" class="bg-light">' +
        '                <select class="form-control" id="sel-2">'+
        '               </select>'+
        '           </td>' +
        '    </tr>'+
        '   </thead>'+
        '   <tbody id="cam-2">' +
        '   <tr>'+
        '       <td>' +
        '           <label for="Departamento">Departamento</label>' +
        '           <select tabindex="10" name="departamento" class="selectDepartamento"></select>' +
        '       </td>'+
        '       <td>' +
        '           <label for="localidad">Localidad</label>' +
        '           <select tabindex="11" name="localidad" class="selectLocalidad"></select>' +
        '       </td>'+
        '       <td>' +
        '           <label for="domicilio">Calle, orientación y altura o referencia</label>' +
        '           <input tabindex="12" maxlength="50" id="domicilio" name="domicilio" type="text" class="form-control" placeholder="Domicilio">' +
        '       </td>'+
        '       <td>' +
        '           <label for="barrio">Barrio</label>' +
        //'           <input maxlength="150" id="barrio" name="barrio" type="text" class="form-control" placeholder="Barrio">' +
        '               <select tabindex="13" class="selectBarrio" name="barrio">' +
                            barrio +
        '              </select>' +
        '       </td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td>' +
        '           <div class="input-group input-group">'+
        '               <div class="input-group-prepend">'+
        '                   <span class="input-group-text" id="latitud">Latitud</span>'+
        '               </div>'+
        '               <input tabindex="14" maxlength="20" name="lat" id="lat" type="text" class="form-control" aria-describedby="latitud" placeholder="latitud">'+
        '           </div>'+
        '       </td>' +
        '       <td>' +
        '           <div class="input-group input-group">'+
        '               <div class="input-group-prepend">'+
        '                   <span class="input-group-text" id="longitud">Longitud</span>'+
        '               </div>'+
        '               <input tabindex="15" maxlength="20" name="lon" id="lon" type="text" class="form-control" aria-describedby="longitud" placeholder="longitud">'+
        '           </div>'+
        '       </td>' +
        '   </tr>'+
        '   <tr>'+
        '       <td colspan="4" >' +
        '           <div style="padding:10px">'+
        '           <label for="map">Mapa interactivo</label>' +
        '               <div id="map"></div>'+
        '           </div>'+
        '       </td>'+
        '   </tr>'+
        '</tbody>'+
        '</table>';

    $("#localizacion")
        .append(htmlLocalizacion);

    initMap();

    //pestaña de datos de la prestación
    var htmlPrestaciones =
        '<table class="table table-striped">'+
        '<thead>'+
        '    <tr class="tr-importante">' +
        '        <td  class="bg-light" id="td-motivoPrestaciones">' +
        '            <div class="custom-control custom-checkbox">'+
        '                <input type="checkbox" class="custom-control-input che" data-mot="3" id="mot-3">'+
        '                <label class="custom-control-label" for="mot-3">Datos incompletos</label>'+
        '            </div>'+
        '        </td>' +
        '        <td colspan="2" class="bg-light">' +
        '                <select class="form-control" id="sel-3">'+
        '               </select>'+
        '           </td>' +
        '    </tr>'+
        '</thead>'+
        '   <tbody id="cam-3">' +
        '   <tr>'+
        '       <td >' +
        '           <label for="titular">Titularidad</label>' +
        '           <div  id="titular" class="btn-group btn-group-toggle" data-toggle="buttons">'+
        '               <label class="btn btn-light">'+
        '                   <input tabindex="17" id="btnTitular" type="radio" name="options" autocomplete="off"> Titular'+
        '               </label>'+
        '               <label class="btn btn-light">'+
        '                   <input id="btnAdherente" type="radio" name="options" autocomplete="off"> Adherente'+
        '               </label>'+
        '           </div>' +
        '       </td>'+

        '       <td >' +
        '              <label for="ingresosDeclarados">Ingresos declarados</label>' +
        '              <input tabindex="18" maxlength="19" id="ingresosDeclarados" name="ingresosDeclarados" type="text" class="form-control" placeholder="Ingresos declarados">' +
        '       </td>'+
        '   </tr>'+

        '   <tr>'+
        '       <td>' +
        '           <label for="pension">Tipo de pensión</label>' +
        '           <select tabindex="19" name="pension" class="selectTipoPension"></select>' +
        '       </td>'+
        '       <td>' +
        '           <label for="motivo">Diagnóstico (CIE10)</label>' +
        '           <select tabindex="20" name="motivo" class="selectCIE10">' +
        '</select>' +
        '       </td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td colspan="2">' +
        '           <label for="prestaciones">Prestaciones</label>' +
        '           <select  tabindex="21" name="prestaciones" class="selectPrestaciones">' +
        '       </td>'+
        '   </tr>'+
        '</tbody>'+
        '</table>';

    $("#prestaciones")
        .append(htmlPrestaciones);


    //pestaña de vivienda
    var htmlVivienda =
        '<table class="table table-striped">'+
            '<thead>' +
            '<tr class="tr-importante">'+
                '<td  class="bg-light" colspan="2" id="td-motivoVivienda">' +
                    '<div class="custom-control custom-checkbox">'+
                        '<input type="checkbox" class="custom-control-input che" data-mot="4" id="mot-4">'+
                        '<label class="custom-control-label" for="mot-4">Datos incompletos</label>'+
                    '</div>'+
                '</td>' +
        '        <td colspan="2" class="bg-light">' +
        '                <select class="form-control" id="sel-4">'+
        '               </select>'+
        '           </td>' +
            '</tr>'+
        '</thead>'+
        '   <tbody id="cam-4">' +
        '   <tr>'+
        '       <td>' +
        '           <label for="conviven">Nº de personas que conviven</label>' +
        '           <input  tabindex="23" id="conviven" name="conviven" type="number" class="form-control" placeholder="Nº conviven">' +
        '       </td>'+
        '       <td>' +
        '           <label for="grupo">Nº del grupo familiar</label>' +
        '           <input  tabindex="24" id="grupo" name="grupo" type="number" class="form-control" placeholder="Nº G Familiar">' +
        '       </td>'+
        '       <td>' +
        '           <label for="vivienda">Tipo de vivienda</label>' +
        '           <select tabindex="25"  name="vivienda" class="selectTipoVivienda">' +
        '           <input maxlength="100" id="comentarioTipoVivienda" class="form-control" type="text" placeholder="Especifique" >' +
        '       </td>'+
        '   </tr>'+
        '   <tr>'+
        '       <td colspan="3">' +
        '           <label for="servicios">Servicios básicos</label>' +
        '           <select  tabindex="26" name="servicios" class="selectTipoServicios">' +
        '       </td>'+
        '   </tr>'+
        '   <tr>'+
        '   </tr>'+
        '</tbody>'+
        '</table>';


       $("#vivienda")
        .append(htmlVivienda);


    $("#sel-1").hide();
    $("#sel-2").hide();
    $("#sel-3").hide();
    $("#sel-4").hide();

    $.each(motivos, function(key, value) {

        $('#sel-1')
            .append($("<option></option>")
                .attr("value",value.id)
                .text(value.text));

        $('#sel-2')
            .append($("<option></option>")
                .attr("value",value.id)
                .text(value.text));

        $('#sel-3')
            .append($("<option></option>")
                .attr("value",value.id)
                .text(value.text));

        $('#sel-4')
            .append($("<option></option>")
                .attr("value",value.id)
                .text(value.text));
    });

    $("#fallecido").bootstrapToggle({
        on: "Vivo",
        off: "Fallecido",
        onstyle: 'success',
        offstyle: 'danger',
        width: '100%'
    });

    $(".che").change(function(){


        if($(this).prop('checked') == true){


            $("#sel-"+$(this).data('mot')).show();


        }else{

            $("#sel-"+$(this).data('mot')).hide();

        }




    });


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
            .text('Agregar registro, planilla nº: ' + NumeroPlanilla);


    $("#nombre").focus();



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

    if(typeof(filaid) != 'undefined'){

        completarDatos(filaid);

        editar = 1;
    }else{
        editar = 0;
    }

}

function completarDatos(filaid){


    $("#modalACTitulo")
        .text('Editar registro');

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

        console.log(data)

        //fix de error al editar
        fechahora = data.FechaCarga.split("/")[1] + "/" + data.FechaCarga.split("/")[0] + "/" + data.FechaCarga.split("/")[2] ;
        //console.log(fechahora)

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
        $('.selectDepartamento')
            .empty()
            .append('<option selected value="' + data.DepartamentoID + '">'+ data.DepartamentoNombre +'</option>')
            .trigger('change');


        $('.selectLocalidad')
            .empty()
            .append('<option selected value="' + data.LocalidadID + '">'+ data.Localidad +'</option>')
            .trigger('change');

        $("#domicilio").val(data.Domicilio);


        $(".selectBarrio")
            .val(data.BarrioID)
            .trigger('change');

        $("#lat").val(data.Latitud);
        $("#lon").val(data.Longitud);

        $("#lat").trigger('change');


        //Prestaciones

        if(data.Titularidad == 1)
        {
            $(".btn-light").first().button("toggle");
        }
        else
        {
            $(".btn-light").slice(1,2).button("toggle");

        }

        $("#ingresosDeclarados").val(data.IngresosDeclarados);

        if(data.enlace_prestaciones)

        $(".selectPrestaciones")
            .empty();

        for(var index in data.enlace_prestaciones){

            $(".selectPrestaciones")
                .append('<option selected value="' + data.enlace_prestaciones[index].PrestacionID + '">'+ data.enlace_prestaciones[index].PrestacionID + ' - ' + data.enlace_prestaciones[index].PrestacionNombre +'</option>')
        }

        $(".selectPrestaciones")
            .trigger('change');

        if(data.enlace_tipoPension.length !== 0){


            $(".selectTipoPension")
                .val(data.enlace_tipoPension[0].PensionID)
                .trigger('change');
        }




        $('.selectCIE10')
            .empty();

        if(data.enlace_diagnosticos.length !== 0){

            for(var index in data.enlace_diagnosticos){

                $('.selectCIE10')
                    .append('<option selected value="' + data.enlace_diagnosticos[index].DiagnosticoID + '">'+ data.enlace_diagnosticos[index].DiagnosticoID + ' - ' + data.enlace_diagnosticos[index].DiagnosticoNombre +'</option>')

            }

        }else{

            $('.selectCIE10')
                .append('<option selected value="000">(000) Sin diagnóstico</option>')
        }

        $('.selectCIE10')
            .trigger('change');


        //Vivienda

        $("#conviven").val(data.NroPersonasConviven);
        $("#grupo").val(data.NroIntegrantesConviven);

        if(data.TipoVivienda !== 0){


            $(".selectTipoVivienda")
                .val(data.TipoViviendaID)
                .trigger('change');
        }

        //$(".selectTipoVivienda").val();
        $("#comentario").val(data.Comentario);


        if(data.enlace_serviciosBasicos.length !== 0){

            for(var index in data.enlace_serviciosBasicos){

                $(".selectTipoServicios")
                    .append('<option selected value="' + data.enlace_serviciosBasicos[index].ServicioID + '">'+ data.enlace_serviciosBasicos[index].ServicioID + ' - ' + data.enlace_serviciosBasicos[index].ServicioNombre +'</option>');
            }

        }

        $(".selectTipoServicios ")
            .trigger('change');

        /*DropDown de motivos*/
        $("#sel-1").val(data.motivoPersonalID);
        $("#sel-2").val(data.motivoLocalizacionID);
        $("#sel-3").val(data.motivoPrestacionID);
        $("#sel-4").val(data.motivoViviendaID);

        if(data.motivoPersonalID !=1)
        {
            $("#mot-1").prop("checked",true);
            $("#sel-1").show()
        }

        if(data.motivoLocalizacionID !=1)
        {
            $("#mot-2").prop("checked",true);
            $("#sel-2").show()
        }

        if(data.motivoPrestacionID !=1)
        {
            $("#mot-3").prop("checked",true);
            $("#sel-3").show()
        }

        if(data.motivoViviendaID !=1)
        {
            $("#mot-4").prop("checked",true);
            $("#sel-4").show()
        }

    })
}

//verificación
function verificarCampos(){

    //bandera para comprobar que no salió alguna corrección
    var error = false;

    //si falleció solamente son obligatorios algunos campos personales e incluso estos no son obligatorios con motivo
    var fallecido = $("#fallecido").prop('checked');

    //alerta de errores por grupo
    var grupos = [
        {
            clase: '.personales',
            alerta: false
        },
        {
            clase: '.localizacion',
            alerta: false
        },
        {
            clase: '.prestacion',
            alerta: false
        },
        {
            clase: '.vivienda',
            alerta: false
        }
    ];


    //es un toggle de alerta
    function mostrarError(condition,selector){

        if(condition){
            $(selector)
                .addClass('bg-warning');
        }else{
            $(selector)
                .removeClass('bg-warning');
        }
    }

    //función genérica para inputs simples
    function inputsVacios(selector,indice){

        if(!selector.prop('checked')){

            if(selector.val() === ''){
                mostrarError(true,selector);
                error = true;
                grupos[indice].alerta = true;

            }else{
                mostrarError(false,selector);

            }

        }
    }

    //función genérica para comprobar errores en select2 de simple selección
    function errorEnSelect2(selector,indice){

        if((selector).val()){

            $(selector)
                .next()
                .find('.select2-selection')
                .removeClass('bg-warning');

        }else{
            $(selector)
                .next()
                .find('.select2-selection')
                .addClass('bg-warning');

            error = true;

            grupos[indice].alerta = true;
        }
    }

    //función genérica par acomprobar errores en selec2 de selección múltiple
    function errorEnSelect2Multiple(selector,indice){

        if($(selector).val().length !== 0){

            $(selector)
                .next()
                .find('.select2-selection--multiple')
                .removeClass('bg-warning');

        }else{
            $(selector)
                .next()
                .find('.select2-selection--multiple')
                .addClass('bg-warning');

            error = true;

            grupos[indice].alerta = true;
        }
    }


    //datos personales
    if(!$("#mot-1").prop('checked')){

        //si no paró las patas
        if(fallecido){

            //nombre
            inputsVacios($("#nombre"),0);
            //apellido
            inputsVacios($("#apellido"),0);
            //dni
            inputsVacios($("#dni"),0);
            //fecha
            inputsVacios($("#fechaNacimiento"),0);
            //teléfono
            inputsVacios($("#tel"),0);

            //sexo
            if($("#sexo").val() === '3'){

                error = true;
                grupos[0].alerta = true;

                $("#sexo").addClass('bg-warning');
            }else{
                $("#sexo").removeClass('bg-warning');
            }

        }else{

            //datos obligatorios en caso de fallecido

            //nombre
            inputsVacios($("#nombre"),0);
            //apellido
            inputsVacios($("#apellido"),0);
            //fecha de defunción
            inputsVacios($("#defuncion"),0);
        }
    }

    //datos de localización
    if(!$("#mot-2").prop('checked')){

        if(fallecido){

            //departamento
            errorEnSelect2($(".selectDepartamento"),1);

            //localidad
            errorEnSelect2($(".selectLocalidad"),1);

            //calle
            inputsVacios($("#domicilio"),1);

            //barrio
            errorEnSelect2($(".selectBarrio"),1);


            //borro latitud y longitud incorrecta
            if($("#lat").val() < -40 || $("#lat").val() > -20){
                $("#lat").val('');
            }
            if($("#lon").val() < -80 || $("#lon").val() > -60){
                $("#lon").val('');
            }


            //latitud
            inputsVacios($("#lat"),1);

            //longitud
            inputsVacios($("#lon"),1);
        }
    }

    //datos de prestación
    if(!$("#mot-3").prop('checked')){

        if(fallecido) {

            //titularidad
            if ($("#btnTitular").prop('checked') || $("#btnAdherente").prop('checked')) {

                $("#titular").removeClass('alert alert-warning');
            } else {
                error = true;
                grupos[2].alerta = true;
                $("#titular").addClass('alert bg-warning');
            }

            //tipo de pensión
            errorEnSelect2($(".selectTipoPension"), 2);

            //diagnóstico
            errorEnSelect2Multiple($(".selectCIE10"), 2);

            //prestaciones
            errorEnSelect2Multiple($(".selectPrestaciones"), 2);
        }
    }

    //vivienda

    if(!$("#mot-4").prop('checked')) {

        if (fallecido) {

            //nº de personas que conviven
            inputsVacios($("#conviven"),3)

            //nº de grupo familiar
            inputsVacios($("#grupo"),3)

            //servicios básicos
            errorEnSelect2Multiple($(".selectTipoServicios"), 3);
        }
    }



    for(var index in grupos){

        if(grupos[index].alerta){

            $(grupos[index].clase).show();
        }else{

            $(grupos[index].clase).hide();
        }
    }

    if(error){

        swal("Incluir Salud", "verifique los datos ingresados!", "warning");
    }else{
        swal("Espere por favor...", "Se están enviando los datos", "info");
        armarJSON();
    }

}



function armarJSON(){

    var data = {
        enlace_tipoPension: [],
        enlace_prestaciones: [],
        enlace_serviciosBasicos: [],
        enlace_diagnosticos: [],
    };

    //en caso de que el encuestado esté fallecido
    if(!$('#fallecido').prop('checked')){

        if($("#nombre").val().trim() == '')
            $("#nombre").val('Nombre no declarado');


        data.nombre = $("#nombre").val();

        if($("#apellido").val().trim() == '')
            $("#apellido").val('Apellido no declarado');


        data.IngresosDeclarados = $("#ingresosDeclarados").val();

        data.apellido = $("#apellido").val();

        if($("#defuncion").val() === ''){

            $("#defuncion").val('01/01/1900');
            fn = $("#defuncion").val().split('/');
            data.fechaDefuncion = fn[2]+'-'+fn[1]+'-'+fn[0];

        }else{
            fn = $("#defuncion").val().split('/');
            data.fechaDefuncion = fn[2]+'-'+fn[1]+'-'+fn[0];
        }

        data.planillaID = planillaid;

        data.fechahora = fechahora;

        enviarDatos(data);

    //caso común de la encuesta
    }else{



        //planilla
        if(filaID) data.ID = filaID;

        data.planillaID = planillaid;
        //personales
        if($("#nombre").val().trim() == '')
            $("#nombre").val('Nombre no declarado');


        data.nombre = $("#nombre").val();

        if($("#apellido").val().trim() == '')
            $("#apellido").val('Apellido no declarado');


        data.apellido = $("#apellido").val();

        var fd = $("#defuncion").val().split('/');
        data.fechaDefuncion = typeof(fd[0]) === 'undefined' ? fd[2]+'-'+fd[1]+'-'+fd[0] : null;

        var fn;

        if($("#fechaNacimiento").val() === ''){

            $("#fechaNacimiento").val('01/01/1900');
            fn = $("#fechaNacimiento").val().split('/');
            data.fechaNacimiento = fn[2]+'-'+fn[1]+'-'+fn[0];

        }else{
            fn = $("#fechaNacimiento").val().split('/');
            data.fechaNacimiento = fn[2]+'-'+fn[1]+'-'+fn[0];
        }



        data.dni = $("#dni").val();
        data.tipoSexoID = $("#sexo").val();
        data.tel = $("#tel").val();
        //localizacion
        data.localidadID = $(".selectLocalidad").val();
        data.domicilio  = $("#domicilio").val();
        data.barrioid = $(".selectBarrio").val();
        data.latitud = $("#lat").val();
        data.longitud = $("#lon").val();
        data.departamentoID = $(".selectDepartamento").val();
        //prestación
        data.tipoBeneficiarioID = $("#btnTitular").prop('checked') ? 1 : 2;
        data.IngresosDeclarados = $("#ingresosDeclarados").val();

        data.enlace_tipoPension = [
            {

                tipoPensionID: $(".selectTipoPension ").val(),
                filaPlanillaID: filaID ? filaID : 0
            }
        ];


        var diagnosticos = $(".selectCIE10").val();

        for(var index in diagnosticos){

            data.enlace_diagnosticos.push({
                id10: diagnosticos[index],
                filaPlanillaID: filaID ? filaID : 0
            });
        }

        var prestaciones = $(".selectPrestaciones").val();

        for(var index in prestaciones){

            data.enlace_prestaciones.push({
                prestacionID: prestaciones[index],
                filaPlanillaID: filaID ? filaID : 0
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
                serviciosBasicosID: serviciosBasicos[index],
                filaPlanillaID: filaID ? filaID : 0
            });
        }

        /*DropDown de motivos*/
        data.motivoPersonalID = $("#sel-1").val();
        data.motivoLocalizacionID = $("#sel-2").val();
        data.motivoPrestacionID = $("#sel-3").val();
        data.motivoViviendaID = $("#sel-4").val();

        data.comentario = $("#comentario").val();

        data.fechahora = fechahora;

        enviarDatos(data);
    }

}

function enviarDatos(jsonDATA){


    var url =
        (editar==0)
            ?
            server_host+":"+server_port+server_url+"/api/IncluirSalud/GuardarFilaPlanilla"
            :
            server_host+":"+server_port+server_url+"/api/IncluirSalud/ActualizarFilaPlanilla";

    $.ajax({
        url: url,
        method: "POST",
        dataType: "json",
        data: jsonDATA
    })
        .done(function(res){

            if(typeof(res)=="undefined")
                {

                    swal.close();
                    swal("Incluir Salud", (editar==1) ? "Se ha editado el registro" :  "Se agregó un nuevo registro!", "success");
                    setTimeout(function(){

                        $("#modalAC").modal("hide");
                        $("#registrosTable").empty();
                        swal.close();

                        mostarRegistros(planilla_back,encuestador_back,supervisor_back, numeroplanulla_back);

                        },1500)
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

    $(".selectBarrio")
        .select2({
            placeholder: 'Elija barrio',
            width: '100%',
            language: 'es',
            dropdownParent: $("#modalACBody")
        });

    $(".selectTipoVivienda")
        .select2({
            placeholder: 'Elija tipo de vivienda',
            dropdownParent: $("#modalACBody"),
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
            dropdownParent: $("#modalACBody"),
            width: '100%',
            language: 'es',
            //minimumResultsForSearch: -1,
            multiple: true,
            data: tipoServicios
        }).on('select2:select',function(e){

    });


    $(".selectDepartamento").select2({
        dropdownParent: $("#modalACBody"),
        placeholder: 'Busque departamento',
        width: '100%',
        language: 'es',
        ajax: {
            url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/ObtenerDepartamentos?id="+ 18, // San Juan
            type: 'GET',
            dataType: 'json',
            delay: 250,
            data: function (params) {

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
            url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/ObtenerLocalidades?id="+ $(".selectDepartamento").val(),
            type: 'GET',
            dataType: 'json',
            delay: 250,
            data: function (params) {

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
                url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/ObtenerLocalidades?id="+ $(".selectDepartamento").val(),
                type: 'GET',
                dataType: 'json',
                delay: 250,
                data: function (params) {

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
        ajax: {
            //url: '/planillas/getCIE10',
            url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/ObtenerCIE10",
            type: 'GET',
            dataType: "json",
            delay: 250,
            data: function (params) {

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


    $(".selectPrestaciones").select2({
        placeholder: 'Elija prestaciones',
        width: '100%',
        language: 'es',
        //minimumInputLength: 3,
        multiple: true,
        dropdownParent: $("#modalACBody"),
        ajax: {
            //url: '/planillas/getCIE10',
            url: server_host+":"+server_port+server_url+ "/api/IncluirSalud/ObtenerPrestaciones",
            type: 'GET',
            dataType: "json",
            delay: 250,
            data: function (params) {

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
