const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const productRoutes = require("./Routes/productRoutes.js");
const multer = require("multer");

const app = express();
const port = 3000;

app.use(cors());
app.use(multer().none());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(productRoutes);

// Connexion à la base de données
adresseBdd =
  "mongodb+srv://user_1:mongodbpw@cluster0.odskxg2.mongodb.net/sportglobes";

mongoose
  .connect(adresseBdd, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connecté à la base de données 'sportglobes'");
  })
  .catch((err) => {
    console.log(
      "Erreur de connection à la base de données 'sportglobes' : ",
      err
    );
  });

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
