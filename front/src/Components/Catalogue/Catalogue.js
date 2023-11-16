import ListProducts from "../Products/ListProducts";
import NavbarCatalogue from "./NavbarCatalogue";
import Menuburger from "./Menuburger";

const Catalogue = () => {
  return (
    <div>
      <NavbarCatalogue />
      <ListProducts />
      <Menuburger />
    </div>
  );
};

export default Catalogue;
