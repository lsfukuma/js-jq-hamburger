// L'esercitazione di oggi prevede di aggiungere il codice js necessario per visualizzare l'hamburger menu su mobile, a partire da html e css già pronti.


$(".fa-bars").click(function(){
  $(".hamburger-menu").slideToggle()
});

$('a.close').on("click", function(){
    $('.hamburger-menu').slideUp();
});
