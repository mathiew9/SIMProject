import imagejoueur from "../../Assets/images/joueur-de-basketball.png";
import imagebrand from "../../Assets/images/Logo_Nom-nobg.png";
import "./confirmation.css";
import { Link } from "react-router-dom";


const Confirmation = () => {
  return (
    <>
     <div class="container">
          <img className="img-fluid" src={imagebrand} alt="panier!" />
    </div>
    <div class="container">
          <img className="img-fluid" src={imagejoueur} alt="panier!" />
    </div>
    <div className="row offset-3 col-6"> 
          <div id="confirmation">Votre commande a bien été enregistrée!</div>
          <div id="conf">
            Merci d'avoir choisi Sport Globe!
            N'hésitez pas à continuer vos achats et à explorer notre gamme de produits.
            Bon shopping!
          </div>
     </div>
    <div className="row offset-3 col-6" >
    <Link className="bouton" to="/">
        <button id="button" className="btn btn-primary" type="submit">Continuer mes achats</button>
    </Link>
    </div>
    </>
  );  
};

export default Confirmation;
