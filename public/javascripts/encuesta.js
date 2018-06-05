//Encuesta de satisfacción


var htmlEncuesta =
    '<table class="table table-dark table-striped table-hover text-center">'+
    '   <tr>'+
    '       <td>' +
    '           <label for="necuesta">Nº de encuesta</label>' +
    '           <input name="necuesta" type="number" class="form-control" placeholder="Nº de encuesta">' +
    '       </td>'+
    '   </tr>';

//¿Dónde se atiende?
htmlEncuesta +=
    '   <tr>'+
    '       <td>' +
    '           <p class="font-italic">¿Dónde se atiende?</p>' +
    '           <div class="form-check form-check-inline">' +
    '               <input class="form-check-input" type="checkbox" id="do1">' +
    '               <label class="form-check-label" for="do1">CAPS</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input class="form-check-input" type="checkbox" id="do2">' +
    '               <label class="form-check-label" for="do2">Hospital</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input class="form-check-input" type="checkbox" id="do3">' +
    '               <label class="form-check-label" for="do3">Consultorio particular</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input class="form-check-input" type="checkbox" id="do4">' +
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
    '               <input class="form-check-input" type="checkbox" id="qu1">' +
    '               <label class="form-check-label" for="qu1">Médico de cabecera</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input class="form-check-input" type="checkbox" id="qu2">' +
    '               <label class="form-check-label" for="qu2">Médico especialista</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input class="form-check-input" type="checkbox" id="qu3">' +
    '               <label class="form-check-label" for="qu3">Médico de guardia</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input class="form-check-input" type="checkbox" id="qu4">' +
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
    '               <input name="tiempo" class="form-check-input" type="radio" id="ti1">' +
    '               <label class="form-check-label" for="ti1">Menos de 15 días</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="tiempo" class="form-check-input" type="radio" id="ti2">' +
    '               <label class="form-check-label" for="ti2">Entre 15 y 30 días</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="tiempo" class="form-check-input" type="radio" id="ti3">' +
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
    '               <input name="atendido" class="form-check-input" type="radio" id="at1">' +
    '               <label class="form-check-label" for="at1">Muy bien</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="atendido" class="form-check-input" type="radio" id="at2">' +
    '               <label class="form-check-label" for="at2">Bien</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="atendido" class="form-check-input" type="radio" id="at3">' +
    '               <label class="form-check-label" for="at3">Regular</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="atendido" class="form-check-input" type="radio" id="at4">' +
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
    '               <input name="estudios" class="form-check-input" type="radio" id="es1">' +
    '               <label class="form-check-label" for="es1">RX</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="estudios" class="form-check-input" type="radio" id="es2">' +
    '               <label class="form-check-label" for="es2">Laboratorio</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="estudios" class="form-check-input" type="radio" id="es3">' +
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
    '               <input name="remedios" class="form-check-input" type="radio" id="re1">' +
    '               <label class="form-check-label" for="re1">Si, sin demora</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="remedios" class="form-check-input" type="radio" id="re2">' +
    '               <label class="form-check-label" for="re2">Si, con demora</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="remedios" class="form-check-input" type="radio" id="re3">' +
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
    '               <input name="derivado" class="form-check-input" type="radio" id="de1">' +
    '               <label class="form-check-label" for="de1">Si</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="derivado" class="form-check-input" type="radio" id="de2">' +
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
    '               <input name="ugp" class="form-check-input" type="radio" id="ug1">' +
    '               <label class="form-check-label" for="ug1">Muy bien</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="ugp" class="form-check-input" type="radio" id="ug2">' +
    '               <label class="form-check-label" for="ug2">Bien</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="ugp" class="form-check-input" type="radio" id="ug3">' +
    '               <label class="form-check-label" for="ug3">Regular</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="ugp" class="form-check-input" type="radio" id="ug4">' +
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
    '               <input name="conseguir" class="form-check-input" type="radio" id="co1">' +
    '               <label class="form-check-label" for="co1">En el día</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="conseguir" class="form-check-input" type="radio" id="co2">' +
    '               <label class="form-check-label" for="co2">Más de 1 día</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="conseguir" class="form-check-input" type="radio" id="co3">' +
    '               <label class="form-check-label" for="co3">Más de 1 Semana</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="conseguir" class="form-check-input" type="radio" id="co4">' +
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
    '               <input name="beneficios" class="form-check-input" type="radio" id="be1">' +
    '               <label class="form-check-label" for="be1">Si</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="beneficios" class="form-check-input" type="radio" id="be2">' +
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
    '               <input name="informacion" class="form-check-input" type="radio" id="in1">' +
    '               <label class="form-check-label" for="in1">UGP</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="informacion" class="form-check-input" type="radio" id="in2">' +
    '               <label class="form-check-label" for="in2">CAPS</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="informacion" class="form-check-input" type="radio" id="in3">' +
    '               <label class="form-check-label" for="in3">Radio/TV</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="informacion" class="form-check-input" type="radio" id="in4">' +
    '               <label class="form-check-label" for="in4">Encuestador</label>' +
    '           </div>' +
    '           <div class="form-check form-check-inline">' +
    '               <input name="informacion" class="form-check-input" type="radio" id="in5">' +
    '               <label class="form-check-label" for="in5">Otros</label>' +
    '           </div>' +
    '       </td>' +
    '   </tr>';

htmlEncuesta +=
    '</table>';



$("#agregarPlanilla").click(function(){

    $("#encuesta")
        .append(htmlEncuesta);

    $("#modalACTitulo").text('Encuesta de satisfacción');

    $("#modalACBody")
        .empty()
        .append(htmlEncuesta);

    $("#modalAC")
        .modal('show')
        .modal('handleUpdate');

});
