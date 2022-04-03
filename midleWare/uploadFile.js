const express = require("express");
const multer = require("multer");
const fs = require("fs");
const dir = "./upload";

const storage = multer.diskStorage({ //Where to store the files
  
  destination: function (req, file, callback) {
    //fonction pour ajouter des nouveaux files sans l'intégrer manuellement
    /************************/
    if (!fs.existsSync(dir)) { //used to synchronously check if a file already exists in the given path or not
      fs.mkdirSync(dir); //which provides an API for interacting with the file system
    }
    callback(null, "./upload");
  },
  /***************************/
  filename: function (req, file, callback) {
    callback(null, Date.now()+'-'+file.originalname);
  },

});

const fileFilter = (req, file, callback) => {  //Function to control which files are accepted
  if (
    file.mimetype == "image/jpg" ||
    file.mimetype == "image/png" ||
    "application/pdf"
  ) {
    //mimetype of the file
    callback(null, true);
  } else {
    callback(null, false);
  }
};
const upload = multer({ storage: storage, fileFilter: fileFilter });  //Multer is a node.js middleware for handling multipart/form-data, which is used for uploading files.
module.exports = upload;