/**
 * Created by Ivan on 13/04/2018.
 */


$(function(){

    console.log("- DOM ready -");

    $("#logout").click(function(){

        modalAC("Confirmar", "¿Está seguro de querer salir?", function(){ window.location.replace('logout')});

    });
});

function modalAC(title, body, action){

    var modalT = $('#modalACTitulo');
    var modalB = $('#modalACBody');
    var modalA = $('#modalACAceptar');
    var modal = $('#modalAC');

    modalT.text(title);

    modalB
        .empty()
        .append(body);

    modalA
        .unbind('click')
        .click(action);

    modal.modal('show');

}