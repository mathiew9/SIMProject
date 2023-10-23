let dernierePositionScroll = 0;

function positionZero(scrollPos) {
  if(scrollPos == 0){
    $('.retour_haut').addClass('scroll_down'); 
  }
  else{
    $('.retour_haut').removeClass('scroll_down');
}
}

document.addEventListener("scroll", (event) => {
  dernierePositionScroll = window.scrollY;
    positionZero(dernierePositionScroll);
});


function ouvrirBurger() {
    document.getElementById("monMenuBurger").style.width = "250px";
    $('body > *:not(.menuburger)').addClass('filtreflou'); 
  }

function fermerBurger() {
    document.getElementById("monMenuBurger").style.width = "0";
    $('body > *:not(.menuburger)').removeClass('filtreflou'); 
  }