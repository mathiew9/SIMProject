import "./Panier.css";
import logo from "../../Assets/images/SG_logo-nobg.png";
import ImagePanierBasket from "../../Assets/images/panier_de_basket.png";

const Panier = () => {
  return (
    <div class="container-fluid">
      <header id="header">
        <div class="row">
          <i class="col-2 bi bi-arrow-left-circle-fill" id="fleche_retour"></i>
          <img
            class="offset-1 offset-md-2 col-6 col-md-4"
            src={logo}
            alt="logo"
          />
        </div>
        <div class="row">
          <span class="offset-4 col-4" id="panier_header">
            PANIER
          </span>
        </div>
        <div class="row panier_traits">
          <div class="offset-1 col-3 col-md-4 traits"></div>
          <div class="col-4 col-md-2" id="panier_basket">
            <img src={ImagePanierBasket} alt="panier de basket" />
          </div>
          <div class="col-3 col-md-4 traits"></div>
        </div>
      </header>
    </div>
  );
};

export default Panier;
