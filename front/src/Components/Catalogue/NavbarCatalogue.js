import "./NavbarCatalogue.css";
import { Link } from "react-router-dom";
import LogoNom from "../../Assets/images/Logo_Nom-nobg.png";
import LogoBallon from "../../Assets/images/Logo_Ballon-nobg.png";

const NavbarCatalogue = () => {
  return (
    <div class="container-fluid" id="nav">
      <header class="row aligner_centre" id="header">
        <img class="col-2 col-md-1" src={LogoBallon} alt="SportGlobes ballon" />
        <img class="col-4 col-md-4" src={LogoNom} alt="SportGlobes" />
        <div class="offset-md-3 col-2 col-md-1 nav_div d-flex align-items-center">
          <a href="#" class=" nav_link">
            Compte
          </a>
        </div>
        <div class="col-2 col-md-1 nav_div d-flex align-items-center">
          <a href="#" class="nav_link">
            Favoris
          </a>
        </div>
        <div class="col-2 col-md-1 nav_div d-flex align-items-center">
          <Link to="/panier" class="nav_link">
            <i class="bi bi-cart2"></i>Panier
          </Link>
        </div>
      </header>
      <div class="row row_icons barre_recherche">
        <div
          class="col-2 col-md-1 bordure_droite aligner_centre curseur_pointeur"
          onclick="ouvrirBurger()"
        >
          <i class="bi bi-text-paragraph"></i>
        </div>
        <div class="col-10">
          <div class="row aligner_centre">
            <i class="bi bi-search col-2 col-md-1"></i>
            <input
              type="text"
              class="col-9 col-md-11"
              id="input_recherche"
              placeholder="Rechercher un produit.."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarCatalogue;
