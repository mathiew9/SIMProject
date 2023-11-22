import React from "react";
import Footer from "./Footer/Footer";
import Catalogue from "./Catalogue/Catalogue";
import Panier from "./Panier/Panier";
import Form from "./formulaire/formulaire_expedition";
import Confirmation from "./Confirmation/confirmation";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import CheckoutPayment from "./CheckoutPayment/CheckoutPayment";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Catalogue />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/checkoutexpedition" element={<Form />} />
          <Route path="/CheckoutPayment" element={<CheckoutPayment />} />
          <Route path="/checkountdone" element={<Confirmation />} />
          <Route path="/checkountdone" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
