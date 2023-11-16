import "./Menuburger.css";

const Menuburger = () => {
  return (
    <div id="monMenuBurger" class="menuburger">
      <div class="row mb-4 mx-2">
        <a href="javascript:void(0)" onclick="fermerBurger()">
          <i class="bi bi-text-paragraph icon_burger_rotate"></i>
        </a>
      </div>
      <div class="row">
        <img
          class="col-10 offset-1 mb-4"
          src="./images/SG_logo-nobg.png"
          alt="Logo deu site : un ballon de basket, une étoile filante et le texte SportGlobes."
        />
      </div>
      <div class="row align-items-center burger_categories">
        <i class="bi bi-house offset-1 col-2"></i>
        <a href="#" class="col-9">
          Page d'accueil
        </a>
      </div>
      <div class="row align-items-center burger_categories mt-4">
        <i class="bi bi-person offset-1 col-2"></i>
        <a href="#" class="col-9">
          Mon compte
        </a>
      </div>
      <div class="row align-items-center burger_categories mt-4">
        <i class="bi bi-cart2 offset-1 col-2"></i>
        <a href="#" class="col-9">
          {" "}
          Mon panier
        </a>
      </div>
      <div class="row align-items-center burger_categories mt-4">
        <i class="bi bi-handbag offset-1 col-2"></i>
        <a href="#" class="col-9">
          Mes achats
        </a>
      </div>
      <div class="row align-items-center burger_categories mt-4">
        <i class="bi bi-heart offset-1 col-2"></i>
        <a href="#" class="col-9">
          Mes favoris
        </a>
      </div>
      <div class="row align-items-center burger_categories mt-4">
        <i class="bi bi-gear offset-1 col-2"></i>
        <a href="#" class="col-9">
          Paramètres
        </a>
      </div>
    </div>
  );
};

export default Menuburger;
