import "./Panier.css";
import { Link } from "react-router-dom";
import Arrowup from "../Arrowup/Arrowup";
import logo from "../../Assets/images/SG_logo-nobg.png";
import ImagePanierBasket from "../../Assets/images/panier_de_basket.png";

const Panier = () => {
  return (
    <div className="container-fluid">
      <header id="header">
        <div className="row">
          <Link to="/" id="fleche_retour" className="col-2">
            <i className="bi bi-arrow-left-circle-fill"></i>
          </Link>
          <img
            className="offset-1 offset-md-2 col-6 col-md-4"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="row">
          <span className="offset-4 col-4" id="panier_header">
            PANIER
          </span>
        </div>
        <div className="row panier_traits">
          <div className="offset-1 col-3 col-md-4 traits"></div>
          <div className="col-4 col-md-2" id="panier_basket">
            <img src={ImagePanierBasket} alt="panier de basket" />
          </div>
          <div className="col-3 col-md-4 traits"></div>
        </div>
      </header>
      <Arrowup />
    </div>
  );
};

export default Panier;
