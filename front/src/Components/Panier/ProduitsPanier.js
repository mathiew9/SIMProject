import "./ProduitsPanier.css";
import { Link } from "react-router-dom";

const ProduitsPanier = (props) => {
  const produit = props.produit;

  const supprimerProduit = () => {
    props.onSupprimerProduit(produit.id);
  };

  return (
    <div className="card rounded-3 mb-4 w-100">
      <div className="card-body p-4">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-2 col-lg-2 col-xl-2">
            <img
              src={produit.image}
              className="img-fluid rounded-3 img_produit_panier"
              alt="Card image"
            />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3">
            <p className="lead fw-normal mb-2">{produit.titre}</p>
            <p>{produit.description}</p>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
            <button
              className="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepDown(); plusUn({produit.prix}, this.parentNode.querySelector('input[type=number]'))"
            >
              <i className="bi bi-dash"></i>
            </button>

            <input
              min="1"
              name="quantity"
              value="{produit.quantite}"
              type="number"
              className="form-control form-control-sm"
            />

            <button
              className="btn btn-link px-2"
              onclick="this.parentNode.querySelector('input[type=number]').stepUp(); plusUn({produit.prix}, this.parentNode.querySelector('input[type=number]'))"
            >
              <i className="bi bi-plus"></i>
            </button>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
            <h5 className="mb-0">{produit.prix} €</h5>
          </div>
          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
            <a
              href="#!"
              className="text-danger"
              onClick={supprimerProduit}
              title="Supprimer cet article du panier"
            >
              <i className="bi bi-trash3-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProduitsPanier;
