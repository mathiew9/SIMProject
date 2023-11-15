const Product = (props) => {
  return (
    <div class="col mb-2 d-flex align-items-stretch">
      <div class="card shadow">
        <i class="bi bi-heart ajouter_favoris" title="Ajouter aux favoris"></i>
        <div class="card_image">
          <img class="card-img-top" src={props.image} alt="Card image cap" />
        </div>
        <div class="card-body d-flex flex-column">
          <div>
            <span class="prix_produit">{props.prix} €</span>
            <h5 class="card-title">{props.titre}</h5>
          </div>
          <p class="card-text description">{props.description}</p>
          <a
            href="#"
            class="btn btn-primary btn_ajout_panier align-self-start mt-auto"
          >
            Ajouter au panier
          </a>
        </div>
      </div>
    </div>
  );
};

export default Product;
