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

function trash(el){
        let element = el.parentElement.parentElement.parentElement.parentElement;
        element.remove();
    };

function plusUn(prix, parent){
    let prix_addition = Math.round((prix*parent.value)*100)/100;
    prix_addition += " €"
    parent.parentElement.nextElementSibling.firstElementChild.innerHTML = prix_addition;
}