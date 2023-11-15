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

  return <div>{products.map((product) => Product(product))}</div>;
};

export default ListProducts;
