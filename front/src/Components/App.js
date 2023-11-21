import React from "react";
import Footer from "./Footer/Footer";
import Catalogue from "./Catalogue/Catalogue";
import Panier from "./Panier/Panier";
import Form from "./Formulaire/formulaire_expedition";
import Confirmation from "./Confirmation/confirmation";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Catalogue />} />
          <Route path="/panier" element={<Panier />} />
          <Route path="/checkoutexpedition" element={<Form />} />
          <Route path="/checkoutdone" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
      <Form />
      <Confirmation />
      <Footer />
    </div>
  );
}

export default App;