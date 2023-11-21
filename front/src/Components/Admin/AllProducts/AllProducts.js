import "./AllProducts.css";

const AllProducts = () => {
  return (
    <div>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#produitModal"
      >
        Créer un produit
      </button>

      <div
        className="modal fade"
        id="produitModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="produitModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="produitModalLabel">
                Ajouter un produit
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fermer"
              ></button>
            </div>
            <div className="modal-body">
              <form
                method="post"
                enctype="multipart/form-data"
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
                    type="file"
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

                <button type="submit" id="" className="btn btn-primary">
                  Ajouter le produit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js"></script>
    </div>
  );
};

export default AllProducts;
