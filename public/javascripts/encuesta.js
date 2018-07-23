//Encuesta de satisfacción


function agregarEncuesta(){

    var htmlEncuesta =
        '<table class="table table-striped table-hover text-center">'+
        '   <tr>'+
        '       <td>' +
        '           <div class="row">' +
        '              <div class="col-4">' +
        '                      <label for="nencuesta">Nº de encuesta</label>' +
        '                      <input maxlength="20" id="nencuesta" name="nencuesta" type="number" class="form-control" placeholder="Nº de encuesta">' +
        '              </div>' +
        '              <div class="col-4">' +
        '                      <label for="fechaEncuesta">Fecha de la encuesta</label>' +
        '                      <input maxlength="10" id="fechaEncuesta" name="fechaEncuesta" class="inputtipobootstrap" placeholder="Elija fecha" data-provide="datepicker">' +
        '              </div>' +
        '              <div class="col-4">' +
        '                      <label for="sexoEncuesta">Sexo</label>' +
        '                      <select class="form-control" id="sexoEncuesta" name="sexoEncuesta">' +
        '                          <option value="-1">Seleccione el sexo...</option>' +
        '                          <option value="1">Masculino</option>' +
        '                          <option value="2">Femenino</option>' +
        '                      </select>' +
        '              </div>' +
        '           </div>' +
        '        </td>' +
        '   </tr>' +
        '   <tr>' +
        '      <td>' +
        '         <div class="row">' +
        '             <div class="col-4">' +
        '                  <label for="selectEncuestadorEncuesta">Seleccione encuestador</label>' +
        '                  <select name="selectEncuestadorEncuesta" class="selectEncuestadorEncuesta"></select>' +
        '             </div>' +
        '             <div class="col-4">' +
        '                   <label for="fechaNacimientoEncuesta">Fecha de nacimiento</label>' +
        '                   <input id="fechaNacimientoEncuesta" name="fechaNacimientoEncuesta" class="inputtipobootstrap" placeholder="Elija fecha de nacimient" data-provide="datepicker">' +
        '             </div>' +
        '             <div class="col-4">' +
        '                  <label for="selectDepartamentoEncuesta">Departamento</label>' +
        '                  <select name="selectDepartamentoEncuesta" class="selectDepartamentoEncuesta">' +
        '             </div>' +
        '         </div>' +
        '      </td>' +
        '   </tr>';

    //¿Qué tipo de pensión tiene asignada?
    htmlEncuesta +=
        '   <tr class="pension">'+
        '       <td>' +
        '           <p class="font-italic">¿Qué tipo de pensión tiene asignada?</p>' +
        '           <div class="form-check form-check-inline">' +
        '               <input name="pension" value="1" class="form-check-input" type="radio" id="pe1">' +
        '               <label class="form-check-label" for="pe1">Invalidez </label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input name="pension" value="2" class="form-check-input" type="radio" id="pe2">' +
        '               <label class="form-check-label" for="pe2">Madres de 7 hijos</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input name="pension" value="3" class="form-check-input" type="radio" id="pe3">' +
        '               <label class="form-check-label" for="pe3">Personas mayores de 65 años</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input name="pension" value="4" class="form-check-input" type="radio" id="pe4">' +
        '               <label class="form-check-label" for="pe4">Héroes ex Combatientes de Malvina</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input name="pension" value="5" class="form-check-input" type="radio" id="pe5">' +
        '               <label class="form-check-label" for="pe5">Otro</label>' +
        '           </div>' +
        '       </td>'+
        '   </tr>';

//¿Dónde se atiende?
    htmlEncuesta +=
        '   <tr class="donde">'+
        '       <td>' +
        '           <p class="font-italic">¿Dónde se atiende?</p>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="1" class="atiende form-check-input" type="checkbox" id="do1">' +
        '               <label class="form-check-label" for="do1">CAPS</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="2" class="atiende form-check-input" type="checkbox" id="do2">' +
        '               <label class="form-check-label" for="do2">Hospital</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input  value="3" class="atiende form-check-input" type="checkbox" id="do3">' +
        '               <label class="form-check-label" for="do3">Consultorio particular</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="4" class="atiende form-check-input" type="checkbox" id="do4">' +
        '               <label class="form-check-label" for="do4">Otro</label>' +
        '           </div>' +
        '       </td>'+
        '   </tr>';

//¿Quién lo atiende?
    htmlEncuesta +=
        '   <tr class="quientr">'+
        '       <td>' +
        '           <p class="font-italic">¿Quién lo atiende?</p>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="1" class="quien form-check-input" type="checkbox" id="qu1">' +
        '               <label class="form-check-label" for="qu1">Médico de cabecera</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="2" class="quien form-check-input" type="checkbox" id="qu2">' +
        '               <label class="form-check-label" for="qu2">Médico especialista</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="3" class="quien form-check-input" type="checkbox" id="qu3">' +
        '               <label class="form-check-label" for="qu3">Médico de guardia</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="4" class="quien form-check-input" type="checkbox" id="qu4">' +
        '               <label class="form-check-label" for="qu4">Otro</label>' +
        '           </div>' +
        '       </td>'+
        '   </tr>';

//¿Cuánto tiempo le llevó encontrar el turno?
    htmlEncuesta +=
        '   <tr class="cuanto">' +
        '       <td>' +
        '           <p class="font-italic">¿Cuánto tiempo le llevó encontrar el turno?</p>' +
        '           <div class="form-check form-check-inline">' +
        '               <input  value="1" name="tiempo" class="form-check-input" type="radio" id="ti1">' +
        '               <label class="form-check-label" for="ti1">Menos de 15 días</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="2" name="tiempo" class="form-check-input" type="radio" id="ti2">' +
        '               <label class="form-check-label" for="ti2">Entre 15 y 30 días</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="3" name="tiempo" class="form-check-input" type="radio" id="ti3">' +
        '               <label class="form-check-label" for="ti3">Mas de 30 días</label>' +
        '           </div>' +
        '       </td>' +
        '   </tr>';

//¿Cómo fue atendido?
    htmlEncuesta +=
        '   <tr class="como">' +
        '       <td>' +
        '           <p class="font-italic">¿Cómo fue atendido?</p>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="1" name="atendido" class="form-check-input" type="radio" id="at1">' +
        '               <label class="form-check-label" for="at1">Muy bien</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="2" name="atendido" class="form-check-input" type="radio" id="at2">' +
        '               <label class="form-check-label" for="at2">Bien</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="3" name="atendido" class="form-check-input" type="radio" id="at3">' +
        '               <label class="form-check-label" for="at3">Regular</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="4" name="atendido" class="form-check-input" type="radio" id="at4">' +
        '               <label class="form-check-label" for="at4">Mal</label>' +
        '           </div>' +
        '       </td>' +
        '   </tr>';

//¿Le solicitaron estudios, cuáles?
    htmlEncuesta +=
        '   <tr class="solicitaron">' +
        '       <td>' +
        '           <p class="font-italic">¿Le solicitaron estudios, cuáles?</p>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="1" name="estudios" class="form-check-input" type="radio" id="es1">' +
        '               <label class="form-check-label" for="es1">RX</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="2" name="estudios" class="form-check-input" type="radio" id="es2">' +
        '               <label class="form-check-label" for="es2">Laboratorio</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="3" name="estudios" class="form-check-input" type="radio" id="es3">' +
        '               <label class="form-check-label" for="es3">otros</label>' +
        '           </div>' +
        '       </td>' +
        '   </tr>';

//¿Le indicaron remedios? Los consiguió con facilidad?
    htmlEncuesta +=
        '   <tr class="indicaron">' +
        '       <td>' +
        '           <p class="font-italic">¿Le indicaron remedios? Los consiguió con facilidad?</p>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="1" name="remedios" class="form-check-input" type="radio" id="re1">' +
        '               <label class="form-check-label" for="re1">Si, sin demora</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="2" name="remedios" class="form-check-input" type="radio" id="re2">' +
        '               <label class="form-check-label" for="re2">Si, con demora</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="3" name="remedios" class="form-check-input" type="radio" id="re3">' +
        '               <label class="form-check-label" for="re3">No</label>' +
        '           </div>' +
        '       </td>' +
        '   </tr>';

//¿Fue derivado a otro médico?
    htmlEncuesta +=
        '   <tr class="derivadotr">' +
        '       <td>' +
        '           <p class="font-italic">¿Fue derivado a otro médico?</p>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="true" name="derivado" class="form-check-input" type="radio" id="de1">' +
        '               <label class="form-check-label" for="de1">Si</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="false" name="derivado" class="form-check-input" type="radio" id="de2">' +
        '               <label class="form-check-label" for="de2">No</label>' +
        '           </div>' +
        '       </td>' +
        '   </tr>';

//¿Cómo es atendido en la UGP?
    htmlEncuesta +=
        '   <tr class="ugptr">' +
        '       <td>' +
        '           <p class="font-italic">¿Cómo es atendido en la UGP?</p>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="1" name="ugp" class="form-check-input" type="radio" id="ug1">' +
        '               <label class="form-check-label" for="ug1">Muy bien</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="2" name="ugp" class="form-check-input" type="radio" id="ug2">' +
        '               <label class="form-check-label" for="ug2">Bien</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="3" name="ugp" class="form-check-input" type="radio" id="ug3">' +
        '               <label class="form-check-label" for="ug3">Regular</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="4" name="ugp" class="form-check-input" type="radio" id="ug4">' +
        '               <label class="form-check-label" for="ug4">Mal</label>' +
        '           </div>' +
        '       </td>' +
        '   </tr>';

//¿Cuánto tiempo le llevó conseguir la prestación solicitada?
    htmlEncuesta +=
        '   <tr class="tiempo">' +
        '       <td>' +
        '           <p class="font-italic">¿Cuánto tiempo le llevó conseguir la prestación solicitada?</p>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="1" name="conseguir" class="form-check-input" type="radio" id="co1">' +
        '               <label class="form-check-label" for="co1">En el día</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="2" name="conseguir" class="form-check-input" type="radio" id="co2">' +
        '               <label class="form-check-label" for="co2">Más de 1 día</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="3" name="conseguir" class="form-check-input" type="radio" id="co3">' +
        '               <label class="form-check-label" for="co3">Más de 1 Semana</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="4" name="conseguir" class="form-check-input" type="radio" id="co4">' +
        '               <label class="form-check-label" for="co4">Más de 1 mes</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="5" name="conseguir" class="form-check-input" type="radio" id="co5">' +
        '               <label class="form-check-label" for="co5">Más de 1 año</label>' +
        '           </div>' +
        '       </td>' +
        '   </tr>';

//¿Conoce los beneficios que brinda el programa?
    htmlEncuesta +=
        '   <tr class="beneficiostr">' +
        '       <td>' +
        '           <p class="font-italic">¿Conoce los beneficios que brinda el programa?</p>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="true" name="beneficios" class="form-check-input" type="radio" id="be1">' +
        '               <label class="form-check-label" for="be1">Si</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="false" name="beneficios" class="form-check-input" type="radio" id="be2">' +
        '               <label class="form-check-label" for="be2">No</label>' +
        '           </div>' +
        '       </td>' +
        '   </tr>';

//¿Quién le brindó información del Programa?
    htmlEncuesta +=
        '   <tr class="brindo">' +
        '       <td>' +
        '           <p class="font-italic">¿Quién le brindó información del Programa?</p>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="1" name="informacion" class="form-check-input" type="radio" id="in1">' +
        '               <label class="form-check-label" for="in1">UGP</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="2" name="informacion" class="form-check-input" type="radio" id="in2">' +
        '               <label class="form-check-label" for="in2">CAPS</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="3" name="informacion" class="form-check-input" type="radio" id="in3">' +
        '               <label class="form-check-label" for="in3">Radio/TV</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="4" name="informacion" class="form-check-input" type="radio" id="in4">' +
        '               <label class="form-check-label" for="in4">Encuestador</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="5" name="informacion" class="form-check-input" type="radio" id="in5">' +
        '               <label class="form-check-label" for="in5">Otros</label>' +
        '           </div>' +
        '       </td>' +
        '   </tr>';

    htmlEncuesta +=
        '</table>';


    $("#encuesta")
        .append(htmlEncuesta);

    $("#modalACTitulo").text('Encuesta de satisfacción');

    $("#modalACBody")
        .empty()
        .append(htmlEncuesta);

    $("#fechaEncuesta")
        .datepicker({
            autoclose: true,
            language: 'es',
            container: $("#modalAC"),
            format: 'dd/mm/yyyy',
            orientation: 'bottom'
        });

    ////
    //select2 de supervisor
    $(".selectEncuestadorEncuesta").select2({
        placeholder: 'Busque encuestador',
        dropdownParent: $("#modalACBody"),
        width: '100%',
        //minimumInputLength: 3,
        language: 'es',
        ajax: {
            //url: 'planillas/supervisores',
            url: server_host+":"+server_port+server_url+"/api/IncluirSalud/ObtenerEncuestadorSupervisor?id=" + 3 ,
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
        },


    });
    ////



    $(".selectDepartamentoEncuesta").select2({
        placeholder: 'Busque departamento',
        dropdownParent: $("#modalACBody"),
        width: '100%',
        language: 'es',
        ajax: {
            //url: 'planillas/encuestadores',
            url:server_host+":"+server_port+server_url+"/api/IncluirSalud/ObtenerDepartamentos?id=18",
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


    $("#fechaNacimientoEncuesta")
        .datepicker({
            autoclose: true,
            language: 'es',
            container: $("#modalAC"),
            format: 'dd/mm/yyyy',
            orientation: 'bottom'
        });

    $("#modalAC")
        .modal('show')
        .modal('handleUpdate');

    $("#modalACAceptar")
        .unbind('click')
        .click(function(){


        verificarEncuesta();
    });

    function verificarEncuesta(){

        var error = false;

        function toggleWarning(selector, error){

            if(error){
                selector.addClass('bg-warning');
            }else{
                selector.removeClass('bg-warning');
            }
        }

        function toggleWarningSelect(selector,error){

            if(error){

                selector
                    .next()
                    .find('.select2-selection')
                    .addClass('bg-warning');

            }else{
                selector
                    .next()
                    .find('.select2-selection')
                    .removeClass('bg-warning');

                error = true;
            }
        }

        if($('#nencuesta').val() === ''){

            error = true;
            toggleWarning($('#nencuesta'),true);
        }else{

            toggleWarning($('#nencuesta'),false);
        }

        if($('#fechaEncuesta').val() === ''){

            error = true;
            toggleWarning($('#fechaEncuesta'),true);
        }else{

            toggleWarning($('#fechaEncuesta'),false);
        }

        if($('#sexoEncuesta').val() === '-1'){

            error = true;
            toggleWarning($('#sexoEncuesta'),true);
        }else{

            toggleWarning($('#sexoEncuesta'),false);
        }

        if($('.selectEncuestadorEncuesta').val() === null){

            error = true;
            toggleWarningSelect($('.selectEncuestadorEncuesta'),true);
        }else{

            toggleWarningSelect($('.selectEncuestadorEncuesta'),false);
        }

        if($('#fechaNacimientoEncuesta').val() === ''){

            error = true;
            toggleWarning($('#fechaNacimientoEncuesta'),true);
        }else{

            toggleWarning($('#fechaNacimientoEncuesta'),false);
        }

        if($('.selectDepartamentoEncuesta').val() === null){

            error = true;
            toggleWarningSelect($('.selectDepartamentoEncuesta'),true);
        }else{

            toggleWarningSelect($('.selectDepartamentoEncuesta'),false);
        }

        if(typeof($('input[name=pension]:checked').val()) === 'undefined'){

            $(".pension").addClass("bg-warning");
            error = true;

        }else{
            $(".pension").removeClass("bg-warning");
        }

        var almenosuno = false;

        $(".atiende").each(function(i,v){

            if($(v).prop('checked')){
                almenosuno = true;
                console.log("asdf")
            }
        });

        if(almenosuno){

            $(".donde").removeClass('bg-warning');
            console.log("error1")


        }else{
            error = true;
            $(".donde").addClass('bg-warning');
            console.log("error2")
        }

        almenosuno = false;

        $(".quien").each(function(i,v){

            if($(v).prop('checked')){
                almenosuno = true;
            }
        });

        if(almenosuno){

            $(".quientr").removeClass('bg-warning');

        }else{
            error = true;
            $(".quientr").addClass('bg-warning');
        }


        if(typeof($('input[name=tiempo]:checked').val()) === 'undefined'){

            $(".cuanto").addClass("bg-warning");
            error = true;

        }else{
            $(".cuanto").removeClass("bg-warning");
        }

        if(typeof($('input[name=atendido]:checked').val()) === 'undefined'){

            $(".como").addClass("bg-warning");
            error = true;

        }else{
            $(".como").removeClass("bg-warning");
        }

        if(typeof($('input[name=estudios]:checked').val()) === 'undefined'){

            $(".solicitaron").addClass("bg-warning");
            error = true;

        }else{
            $(".solicitaron").removeClass("bg-warning");
        }

        if(typeof($('input[name=remedios]:checked').val()) === 'undefined'){

            $(".indicaron").addClass("bg-warning");
            error = true;

        }else{
            $(".indicaron").removeClass("bg-warning");
        }

        if(typeof($('input[name=derivado]:checked').val()) === 'undefined'){

            $(".derivadotr").addClass("bg-warning");
            error = true;

        }else{
            $(".derivadotr").removeClass("bg-warning");
        }

        if(typeof($('input[name=ugp]:checked').val()) === 'undefined'){

            $(".ugptr").addClass("bg-warning");
            error = true;

        }else{
            $(".ugptr").removeClass("bg-warning");
        }

        if(typeof($('input[name=conseguir]:checked').val()) === 'undefined'){

            $(".tiempo").addClass("bg-warning");
            error = true;

        }else{
            $(".tiempo").removeClass("bg-warning");
        }

        if(typeof($('input[name=beneficios]:checked').val()) === 'undefined'){

            $(".beneficiostr").addClass("bg-warning");
            error = true;

        }else{
            $(".beneficiostr").removeClass("bg-warning");
        }

        if(typeof($('input[name=informacion]:checked').val()) === 'undefined'){

            $(".brindo").addClass("bg-warning");
            error = true;

        }else{
            $(".brindo").removeClass("bg-warning");
        }

        //muestra error o envía datos
        if(!error){

            guardarDatosEncuesta();

        }else{

            swal("Error", "Hay datos que no fueron completados", "error");
        }
    }

    function guardarDatosEncuesta(){

        var encuestaDATA = {

            usuarioID: userID,
            nroEncuesta: '',
            tipoSexoID: '',
            fechaEncuesta: '',
            encuestadorID: '',
            fechaNacimiento: '',
            departamentoID: '',
            codigo: '',
            enlace_encuestaLugarAtencion: [],
            tipoPensionID: '',
            enlace_atendidoPor: [],
            tiempoTurnoID: '',
            calidadAtencionID: '',
            estudiosSolicitadosID: '',
            demoraRemedios: '',
            derivado: '',
            calidadAtencionUgpID: '',
            tiempoPrestacionID: '',
            conoceBeneficioPrograma: '',
            informacionProgramaID: ''

        };


        $(".atiende").each(function(i,v){

            if($(v).prop('checked')){
                encuestaDATA.enlace_encuestaLugarAtencion.push({encuestaLugarAtencionID: v.value})
            }

        });

        $(".quien").each(function(i,v){

            if($(v).prop('checked')){
                encuestaDATA.enlace_atendidoPor.push({atendidoPorID: v.value})
            }

        });

        encuestaDATA.tipoPensionID = $("input:radio[name ='pension']:checked").val();

        encuestaDATA.tiempoTurnoID = $("input:radio[name ='tiempo']:checked").val();

        encuestaDATA.calidadAtencionID = $("input:radio[name ='atendido']:checked").val();

        encuestaDATA.estudiosSolicitadosID = $("input:radio[name ='estudios']:checked").val();

        encuestaDATA.demoraRemedios = $("input:radio[name ='remedios']:checked").val();

        encuestaDATA.derivado = $("input:radio[name ='derivado']:checked").val();

        encuestaDATA.calidadAtencionUgpID = $("input:radio[name ='ugp']:checked").val();

        encuestaDATA.tiempoPrestacionID = $("input:radio[name ='conseguir']:checked").val();

        encuestaDATA.conoceBeneficioPrograma = $("input:radio[name ='beneficios']:checked").val();

        encuestaDATA.informacionProgramaID = $("input:radio[name ='informacion']:checked").val();

        encuestaDATA.nroEncuesta = $("#nencuesta").val();

        encuestaDATA.tipoSexoID = $("#sexoEncuesta").val();

        var fe = $("#fechaEncuesta").val().split('/');

        encuestaDATA.fechaEncuesta = fe[2]+'-'+fe[1]+'-'+fe[0];

        var fn = $("#fechaNacimientoEncuesta").val().split('/');

        encuestaDATA.fechaNacimiento =  fn[2]+'-'+fn[1]+'-'+fn[0];

        encuestaDATA.encuestadorID = $(".selectEncuestadorEncuesta").val();


        encuestaDATA.departamentoID = $(".selectDepartamentoEncuesta").val();

        //encuestaDATA.codigo = $("#codigoEncuesta").val();
        encuestaDATA.codigo = 0;


        swal("Espere un momento...", "se está guardando la encuesta", "info");


        $.ajax({
            url: server_host+":"+server_port+server_url+"/api/IncluirSalud/GuardarEncuesta",
            method: "POST",
            data: encuestaDATA,
            dataType: "json"
        })
            .done(function(res){

                if(typeof (res) == "undefined")
                {
                    swal("Incluir Salud", "Se agrego una nueva encuesta!", "success");
                    setTimeout(function(){
                        //location.reload();
                        swal.close();
                        $("#modalAC").modal("hide");
                        $("#encuestasTable").empty()
                        fillDatatableEncuestas(userID)
                        },1500)
                }else{
                    swal("Error", "No se pudo guardar la encuesta, intente nuevamente en un momento.", "error");
                    console.log(res);
                }

            });

    }


}
