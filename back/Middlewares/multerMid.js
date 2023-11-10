const multer = require("multer");
const uuid = require("uuid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../images/produits");
  },
  filename: function (req, file, cb) {
    const idUnique = uuid.v4();
    const fileExtension = file.mimetype.split("/")[1];
    const newFileTitre = `${idUnique}.${fileExtension}`;

    cb(null, `${newFileTitre}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
