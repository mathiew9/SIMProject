import "./Panier.css";
import { Link } from "react-router-dom";
import Arrowup from "../Arrowup/Arrowup";
import logo from "../../Assets/images/SG_logo-nobg.png";
import ImagePanierBasket from "../../Assets/images/panier_de_basket.png";
import ProduitsPanierDisplay from "./ProduitsPanier";
import FetchProducts from "../../Services/FetchProducts";
import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";

export const addPanier = (produit) => {
  // Récupérer le panier actuel depuis localStorage
  const panierData = localStorage.getItem("panier");
  let panier = [];

  if (panierData) {
    panier = JSON.parse(panierData);
  }

  // Ajouter le nouveau produit
  panier.push(produit);

  // Sauvegarder le panier dans localStorage
  localStorage.setItem("panier", JSON.stringify(panier));
};

const Panier = () => {
  const clearPanier = () => {
    // Supprimer tous les éléments du panier dans le localStorage
    localStorage.removeItem("panier");
  };

  const handleViderPanier = () => {
    clearPanier(); // Appel de la fonction pour vider le panier
    setProduitsPanier([]); // Mettre à jour l'état local des produits du panier
  };

  const [produitsPanier, setProduitsPanier] = useState([]);

  // Fonction pour récupérer les produits du panier depuis le localStorage
  useEffect(() => {
    const panierData = localStorage.getItem("panier");
    if (panierData) {
      setProduitsPanier(JSON.parse(panierData));
    }
  }, []);

  const [produitsPanierDisplay, setProduitsPanierDisplay] = useState([]);

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

      <section className="h-100 mt-5" id="section_produits">
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Produits</h3>
                <div>
                  <p className="mb-0">
                    <span className="text-muted">Trier par:</span>{" "}
                    <a href="#!" className="text-body">
                      prix <i className="bi bi-chevron-down"></i>
                    </a>
                  </p>
                </div>
              </div>
              <div>
                {produitsPanier.map((product) => (
                  <ProduitsPanierDisplay key={product.id} produit={product} />
                ))}
              </div>
              <div className="card mb-4 w-100">
                <div className="card-body prix_paiement">
                  <div className="row mb-1">
                    <div className="col-8">Sous-total</div>
                    <div className="chiffres_paiement col-4">52.98</div>
                  </div>
                  <div className="row mb-1">
                    <div className="col-8">Frais de livraison</div>
                    <div className="chiffres_paiement col-4">5.99</div>
                  </div>
                  <div className="row pt-1 total">
                    <div className="col-8">Total</div>
                    <div className="chiffres_paiement col-4">58.97</div>
                  </div>
                </div>
              </div>

              <div className="card w-100">
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-primary col-12 btn-lg"
                    id="proceder_paiement"
                  >
                    Procéder au paiement
                  </button>
                  <button onClick={handleViderPanier}>Vider le panier</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Arrowup />
      <Footer />
    </div>
  );
};

export default Panier;
