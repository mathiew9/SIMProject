const Product = (props) => {
  return (
    <div className="col mb-2 d-flex align-items-stretch">
      <div className="card shadow">
        <i
          className="bi bi-heart ajouter_favoris"
          title="Ajouter aux favoris"
        ></i>
        <div className="card_image">
          <img
            className="card-img-top"
            src={props.image}
            alt="Card image cap"
          />
        </div>
        <div className="card-body d-flex flex-column">
          <div>
            <span className="prix_produit">{props.prix} €</span>
            <h5 className="card-title">{props.titre}</h5>
          </div>
          <p className="card-text description">{props.description}</p>
          <a
            href="#"
            className="btn btn-primary btn_ajout_panier align-self-start mt-auto"
          >
            Ajouter au panier
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
