import "./NavbarCatalogue.css";
import { Link } from "react-router-dom";
import LogoNom from "../../Assets/images/Logo_Nom-nobg.png";
import LogoBallon from "../../Assets/images/logo_ballon-nobg.png";

const NavbarCatalogue = () => {
  return (
    <div className="container-fluid" id="nav">
      <header className="row aligner_centre" id="header">
        <img
          className="col-2 col-md-1"
          src={LogoBallon}
          alt="SportGlobes ballon"
        />
        <img className="col-4 col-md-4" src={LogoNom} alt="SportGlobes" />
        <div className="offset-md-3 col-2 col-md-1 nav_div d-flex align-items-center">
          <a href="#" className=" nav_link">
            Compte
          </a>
        </div>
        <div className="col-2 col-md-1 nav_div d-flex align-items-center">
          <a href="#" className="nav_link">
            Favoris
          </a>
        </div>
        <div className="col-2 col-md-1 nav_div d-flex align-items-center">
          <Link to="/panier" className="nav_link">
            <i className="bi bi-cart2"></i>Panier
          </Link>
        </div>
      </header>
      <div className="row row_icons barre_recherche">
        <div
          className="col-2 col-md-1 bordure_droite aligner_centre curseur_pointeur"
          onClick="ouvrirBurger()"
        >
          <i className="bi bi-text-paragraph"></i>
        </div>
        <div className="col-10">
          <div className="row aligner_centre">
            <i className="bi bi-search col-2 col-md-1"></i>
            <input
              type="text"
              className="col-9 col-md-11"
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
