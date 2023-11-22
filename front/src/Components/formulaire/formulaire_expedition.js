import React, { useState } from 'react';
import imagebrand from "../../Assets/images/Logo_Nom-nobg.png";
import "./formulaire_expedition.css";
import { Link } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    tel: '',
    address: '',
    postcode: '',
    country: ''
  });

  return (
    <div>
      <div class="container">
      <img className="img-fluid" src={imagebrand} alt="panier!" />
      </div>
    <div className="container-fluid">
      <div className="row">
        <span id="details_exp" className="text-center">Entrez les détails d'expédition</span>
      </div>
      <div className="row justify-content-center">
        <form className="w-25">
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">Nom de famille*</label>
            <input
              type="text"
              className="form-control inputs limited-width"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={(e) => {
                const re = /^[a-zA-Z\s]*$/; // Expression régulière pour les lettres et les espaces
                if (re.test(e.target.value)) {
                  setFormData({ ...formData, nom: e.target.value });
                }
              }}              
              placeholder="Entrez le nom"
              minLength="2"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="prenom" className="form-label">Prénom*</label>
            <input
              type="text"
              className="form-control inputs limited-width"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={(e) => {
                const re = /^[a-zA-Z\s]*$/; // Expression régulière pour les lettres et les espaces
                if (re.test(e.target.value)) {
                  setFormData({ ...formData, prenom: e.target.value });
                }
              }}
              placeholder="Entrez le prénom"
              minLength="2"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tel" className="form-label">Numéro de téléphone*</label>
            <div className="d-flex flex-row">
              <div className="input-group">
                <div className="input-group-prepend">
                  <select className="form-select" aria-label="Default select example">
                    <option selected>+33</option>
                    <option value="1">+30</option>
                    <option value="2">+32</option>
                    <option value="3">+34</option>
                  </select>
                </div>
                <input
                  type="tel"
                  className="form-control inputs limited-width"
                  name="tel"
                  id="tel"
                  value={formData.tel}
                  onChange={(e) => {
                    const re = /^[0-9\b]+$/; // Expression régulière pour les chiffres
                    if (e.target.value === '' || re.test(e.target.value)) {
                      setFormData({ ...formData, tel: e.target.value });
                    }
                  }}
                  placeholder="00 00 00 00 00"
                  maxLength="10"
                  required
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Adresse Postale*</label>
            <input
              type="text"
              className="form-control inputs limited-width"
              name="address"
              id="address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="Entrez l'adresse postale"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="postcode" className="form-label">Code postal*</label>
            <input
              type="number"
              className="form-control inputs limited-width"
              name="postcode"
              id="postcode"
              value={formData.postcode}
              onChange={(e) => {
                const re = /^[0-9]+$/; // Expression régulière pour les chiffres
                if (e.target.value === '' || re.test(e.target.value)) {
                  setFormData({ ...formData, postcode: e.target.value });
                }
              }}
              placeholder="Entrez le code postal"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">Pays*</label>
            <input
              type="text"
              className="form-control inputs limited-width"
              name="country"
              id="country"
              value={formData.country}
              placeholder="Entrez le pays"
              required
            />
          </div>
          <div className="mb-3">
            <p>Champs obligatoires*</p>
          <Link className="bouton" to="/">
            <button
              id="pap"
              className="btn btn-primary"
              onClick={() => {
                console.log(formData);
              }}
            >
              Passer au paiement
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Form;
