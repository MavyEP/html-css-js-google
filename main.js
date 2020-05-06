
//imposto il focus della pagina al caricamento sull input di ricerca di google
$('.input input').focus();

//creo la variabile con dentro il dropdown che faro visualizzare al click
var dropdown = $('.dropdown_container');
//creo la funzione del click al quale ad ogni click mette e toglie la classe
$('.dropdown_click_icon i').click(function() {
   dropdown.toggleClass('hidden');
});

//dopo ore ho creato una funzione che mi chiude il dropdown se clicco al di fuori di esso
$(document).click(function(){
  var click_utente = $(event.target);
  // 1 PARTE :dell'' if : SE CIO CHE HO CLICCATO NON HA LA CLASSE FAS OVVERO ICONA  ....
  // 2 PARTE :dell'' if : SE CIO CHE HO CLICCATO NON HA LA CLASSE DROPDOWN CONTAINER OVVERO SE CLICCAVO NELLA PERTE BIANCA O BACKGROUND WHITE....
  // 3 PARTE :dell'' if : SE CIO CHE HO CLICCATO NON HA COME PARENTE UN ELEMENTO CON LA CLASSE DROPDOWNLO_ELEMENT OVVERO PER L img E LO span....
  // 4 PARTE :dell'' if : SE CIO CHE HO CLICCATO NON HA LA CLASSE DROPDOWN_ELEMENT ...
  // 5 PARTE :dell'' if : SE E SOLO SE IL DROPDOWN NON HA LA CLASSE HIDDEN PERCIO AL MOMENTO DEL CLICK IL DROPDOWN é VISIBILE IN PAGINA.
  if (!click_utente.hasClass("fas") && !click_utente.hasClass("dropdown_container") && !click_utente.hasClass('dropdown_element') && !click_utente.parent().hasClass('dropdown_element')  && !dropdown.hasClass('hidden')) {
    dropdown.addClass('hidden');
  }
})

//cerco il contenitore della privacy a comparsa
var privacy_popup = $('.privacy_popup');

setTimeout(privacypopup , 2000);


//faccio sparire in base all ' azione dellutente ' il pop della privacy
$('.right_actions span').click(function() {
  privacy_popup.addClass('hide_opacity');
});

//funzione per nascondere il privacy 
function privacypopup() {
  privacy_popup.removeClass('hide_opacity');
}
