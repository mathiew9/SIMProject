import "./ListProducts.css";
import Product from "./Product";
import React, { useState, useEffect } from "react";
import FetchProducts from "../../Services/FetchProducts";

const ListProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    FetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  let longueur = products.length;

  return (
    <div className="container mt-4">
      <div className="row aligner_centre nbr_articles mt-3 mb-3">
        <div className="col-12">{longueur} articles trouvés</div>
      </div>

      {products.map((product) => Product(product))}
    </div>
  );
};

export default ListProducts;
