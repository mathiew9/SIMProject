import "./Menuburger.css";
import LogoBallon from "../../Assets/images/logo_ballon-nobg.png";

function ouvrirBurger() {
  const menuBurger = document.getElementById("monMenuBurger");
  if (menuBurger) {
    menuBurger.style.width = "250px";
    document
      .querySelectorAll("body > *:not(.menuburger)")
      .forEach((element) => {
        element.classList.add("filtreflou");
      });
  }
}

function fermerBurger() {
  const menuBurger = document.getElementById("monMenuBurger");
  if (menuBurger) {
    menuBurger.style.width = "0";
    document
      .querySelectorAll("body > *:not(.menuburger)")
      .forEach((element) => {
        element.classList.remove("filtreflou");
      });
  }
}

const Menuburger = () => {
  return (
    <div id="monMenuBurger" className="menuburger">
      <div className="row mb-4 mx-2">
        <a href="javascript:void(0)" onClick={fermerBurger}>
          <i className="bi bi-text-paragraph icon_burger_rotate"></i>
        </a>
      </div>
      <div className="row">
        <img
          className="col-10 offset-1 mb-4"
          src={LogoBallon}
          alt="Logo deu site : un ballon de basket, une étoile filante et le texte SportGlobes."
        />
      </div>
      <div className="row align-items-center burger_categories">
        <i className="bi bi-house offset-1 col-2"></i>
        <a href="#" className="col-9">
          Page d'accueil
        </a>
      </div>
      <div className="row align-items-center burger_categories mt-4">
        <i className="bi bi-person offset-1 col-2"></i>
        <a href="#" className="col-9">
          Mon compte
        </a>
      </div>
      <div className="row align-items-center burger_categories mt-4">
        <i className="bi bi-cart2 offset-1 col-2"></i>
        <a href="#" className="col-9">
          {" "}
          Mon panier
        </a>
      </div>
      <div className="row align-items-center burger_categories mt-4">
        <i className="bi bi-handbag offset-1 col-2"></i>
        <a href="#" className="col-9">
          Mes achats
        </a>
      </div>
      <div className="row align-items-center burger_categories mt-4">
        <i className="bi bi-heart offset-1 col-2"></i>
        <a href="#" className="col-9">
          Mes favoris
        </a>
      </div>
      <div className="row align-items-center burger_categories mt-4">
        <i className="bi bi-gear offset-1 col-2"></i>
        <a href="#" className="col-9">
          Paramètres
        </a>
      </div>
    </div>
  );
};

export default Menuburger;
