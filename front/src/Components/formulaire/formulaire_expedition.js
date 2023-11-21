import React, { useState } from 'react';
import "./formulaire_expedition.css";

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
    <div className="container">
      <div className="row">
        <span id="details_exp" className="text-center">Entrez les détails d'expédition</span>
      </div>
      <div className="row">
        <form>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">Nom de famille*</label>
            <input
              type="text"
              className="inputs form-control"
              id="nom"
              name="nom"
              value={formData.nom}
              onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
              placeholder="Entrez le nom"
              minLength="2"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="prenom" className="form-label">Prénom*</label>
            <input
              type="text"
              className="form-control inputs"
              id="prenom"
              name="prenom"
              value={formData.prenom}
              onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
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
                  className="form-control inputs"
                  name="tel"
                  id="tel"
                  value={formData.tel}
                  onChange={(e) => setFormData({ ...formData, tel: e.target.value })}
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
              className="form-control inputs"
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
              className="form-control inputs"
              name="postcode"
              id="postcode"
              value={formData.postcode}
              onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
              placeholder="Entrez le code postal"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">Pays*</label>
            <input
              type="text"
              className="form-control inputs"
              name="country"
              id="country"
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              placeholder="Entrez le pays"
              required
            />
          </div>
          <div className="mb-3">
            <button
              className="btn btn-primary"
              onClick={() => {
                console.log(formData);
              }}
            >
              Passer au paiement
            </button>
          </div>
        </form>
      </div>
      <p>Champs obligatoires*</p>
    </div>
  );
};

export default Form;
