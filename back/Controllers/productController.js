const Product = require("../Models/productModel.js");

const getProduct = (req, res) => {
  Product.find()
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      console.log("Erreur lors de la récupération des produits : ", err);
      res.status(500).send("Erreur lors de la récupération des produits");
    });
};

const addProduct = (req, res) => {
  console.log(req.body);
  const product = new Product({
    titre: req.body.titre,
    description: req.body.description,
    prix: req.body.prix,
    categorie: req.body.categorie,
    image: req.file.filename,
  });

  product
    .save()
    .then((addedProduct) => {
      res.json(addedProduct);
    })
    .catch((err) => {
      console.error("Erreur lors de l'enregistrement du produit : ", err);
      res.status(500).send("Erreur lors de l'enregistrement du produit");
    });
};

const getProductById = (req, res) => {
  Product.findById(req.params.id)
    .then((product) => {
      res.json(product);
    })
    .catch((err) => {
      console.log("Erreur lors de la récupération du produit : ", err);
      res.status(500).send("Erreur lors de la récupération du produit");
    });
};

const updateProduct = async (req, res) => {
  try {
    const updateProduct = await Product.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    res.json(updateProduct);
  } catch (err) {
    console.log("Erreur lors de la mise à jour du produit : ", err);
    res.status(500).send("Erreur lors de la mise à jour du produit");
  }
};

const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    res.json(deleteProduct);
  } catch (err) {
    console.log("Erreur lors de la suppression du produit : ", err);
    res.status(500).send("Erreur lors de la suppression du produit");
  }
};

module.exports = {
  addProduct,
  getProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
