import "./Catalogue.css";
import ListProducts from "../Products/ListProducts";
import NavbarCatalogue from "./NavbarCatalogue";
import Menuburger from "./Menuburger";
import banniere from "../../Assets/images/banniere2.png";
import Arrowup from "../Arrowup/Arrowup";

const Catalogue = () => {
  return (
    <div>
      <NavbarCatalogue />
      <div className="container-fluid">
        <img
          src={banniere}
          alt="banniere"
          id="banniere"
          className="centered-banner"
        />
      </div>
      <ListProducts />
      <Menuburger />
      <Arrowup />
    </div>
  );
};

export default Catalogue;
