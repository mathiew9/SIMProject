const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../images/produits");
  },
  filename: function (req, file, cb) {
    const productTitre = req.body.titre;
    const fileExtension = file.mimetype.split("/")[1];
    const newFileTitre = `${productTitre}.${fileExtension}`;

    cb(null, `${newFileTitre}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
