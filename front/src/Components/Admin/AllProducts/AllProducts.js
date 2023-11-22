import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AllProducts.css";

const AllProducts = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(document.getElementById("produitForm"));
    for (const [key, value] of formData.entries()) {
      console.log(`Clé: ${key}, Valeur: ${value}`);
    }
    fetch("http://localhost:3000/product", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.error("Fetch error:", err);
      });

    // handleClose();
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Créer un produit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un produit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            method="post"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            id="produitForm"
          >
            <div className="mb-3">
              <label for="titre" className="form-label">
                Titre du produit
              </label>
              <input
                type="text"
                className="form-control"
                id="titre"
                name="titre"
                required
              />
            </div>

            <div className="mb-3">
              <label for="prix" className="form-label">
                Prix du produit
              </label>
              <input
                type="number"
                className="form-control"
                id="prix"
                name="prix"
              />
            </div>

            <div className="mb-3">
              <label for="categorie" className="form-label">
                Categorie du produit
              </label>
              <input
                type="text"
                className="form-control"
                id="categorie"
                name="categorie"
              />
            </div>

            <div className="mb-3">
              <label for="image" className="form-label">
                Image du produit
              </label>
              <input
                type="text"
                className="form-control"
                id="image"
                name="image"
              />
            </div>

            <div className="mb-3">
              <label for="description" className="form-label">
                Description du produit
              </label>
              <textarea
                className="form-control"
                id="description"
                name="description"
                rows="4"
              ></textarea>
            </div>

            {/* <button type="submit" id="" className="btn btn-primary">
              Ajouter le produit
            </button> */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button variant="primary" type="submit" form="produitForm">
            Ajouter le produit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AllProducts;
