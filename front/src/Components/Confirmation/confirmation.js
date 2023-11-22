import j from "../../Assets/images/joueur-de-basketball.png";

const Confirmation = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="offset-3 col-6">
          <img className="img-fluid" src="./images/joueur-de-basketball.png" alt="panier!" />
        </div>
      </div>
      <div id="confirmation">Votre commande a bien été enregistrée!</div>
      <p id="conf">Merci d'avoir choisi Sport Globes!<br />N'hésitez pas à continuer vos achats et à explorer notre gamme de produits.<br />Bon shopping!</p>
      <div className="row offset-3 col-6">
        <button className="btn btn-primary" type="submit">Continuer mes achats</button>
      </div>
    </div>
  );
};

export default Confirmation;
