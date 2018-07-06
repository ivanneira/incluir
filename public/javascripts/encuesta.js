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
        '   </tr>' +
        '   <tr>' +
        '      <td>' +
        '         <div class="row">' +
        '             <div class="col-4">' +
        '                      <label for="codigoEncuesta">Código</label>' +
        '                      <input maxlength="20" id="codigoEncuesta" name="codigoEncuesta" type="text" class="form-control" placeholder="Código de encuesta">' +
        '             </div>' +
        '             <div class="col-4">' +
        '             </div>' +
        '             <div class="col-4">' +
        '             </div>' +
        '         </div>' +
        '      </td>' +
        '   </tr>' +
        '';

    //¿Qué tipo de pensión tiene asignada?
    htmlEncuesta +=
        '   <tr>'+
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
        '   <tr>'+
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
        '               <input  value="3" class="form-check-input" type="checkbox" id="do3">' +
        '               <label class="atiende form-check-label" for="do3">Consultorio particular</label>' +
        '           </div>' +
        '           <div class="form-check form-check-inline">' +
        '               <input value="4" class="atiende form-check-input" type="checkbox" id="do4">' +
        '               <label class="form-check-label" for="do4">Otro</label>' +
        '           </div>' +
        '       </td>'+
        '   </tr>';

//¿Quién lo atiende?
    htmlEncuesta +=
        '   <tr>'+
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
        '   <tr>' +
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
        '   <tr>' +
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
        '   <tr>' +
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
        '   <tr>' +
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
        '   <tr>' +
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
        '   <tr>' +
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
        '   <tr>' +
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
        '               <input name="conseguir" class="form-check-input" type="radio" id="co5">' +
        '               <label class="form-check-label" for="co5">Más de 1 año</label>' +
        '           </div>' +
        '       </td>' +
        '   </tr>';

//¿Conoce los beneficios que brinda el programa?
    htmlEncuesta +=
        '   <tr>' +
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
        '   <tr>' +
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
            url: server_host + ":" + server_port + "/api/IncluirSalud/ObtenerEncuestadorSupervisor?id=" + 3 ,
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
        //minimumInputLength: 3,
        width: '100%',
        language: 'es',
        ajax: {
            //url: 'planillas/encuestadores',
            url: server_host + ":" + server_port + "/api/IncluirSalud/ObtenerDepartamentos?id=18",
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



        guardarDatosEncuesta();

    }

    function guardarDatosEncuesta(){

        var encuestaDATA = {
            //id de usuario forzado
            usuarioID: 1,
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

        encuestaDATA.codigo = $("#codigoEncuesta").val();



        console.dir(encuestaDATA)


        $.ajax({
            url: server_host+":"+server_port+server_url+"/api/IncluirSalud/GuardarEncuesta",
            method: "POST",
            data: encuestaDATA,
            dataType: "json"
        })
            .done(function(res){

                if(typeof (res) == "undefined")
                {
                    swal("Incluir Salud", "Se agrego una nueva registro!", "success");
                    setTimeout(function(){location.reload();},1500)
                }else{
                    console.log(res);
                }

            });

    }


}
