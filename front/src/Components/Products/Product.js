import "./Products.css";

const Product = (props) => {
  return (
    <div>
      <div className="card border-0 rounded-2 shadow">
        <div className="d-flex justify-content-center">
          <img
            src="https://www.club-shop.fr/40872-large_default/ballon-de-football-adidas-tiro-club.jpg"
            className="card-img-top rounded-0 pt-2"
            alt="..."
          />
        </div>
        <div className="card-body mt-3 mb-3">
          <div className="row">
            <div className="col-10">
              <h4 className="card-title">{props.titre}</h4>
              <p className="card-text">
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                <i className="bi bi-star-fill text-warning"></i>
                (123)
              </p>
            </div>
            <div className="col-2">
              <i className="bi bi-bookmark-plus fs-2"></i>
            </div>
          </div>
        </div>
        <div className="row align-items-center text-center g-0">
          <div className="col-4">
            <h5>{props.prix} €</h5>
          </div>
          <div className="col-8">
            <a href="#" className="btn w-100 p-3 addToCart">
              ADD TO CART
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
