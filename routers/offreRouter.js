const Route = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../passportConfig');
const offreController = require('../controllers/offreControllers')


Route.post("/AddOffre",  offreController.createoffre)
Route.get("/ALLOffre", offreController.getAlloffres)
Route.get("/getOffreByID/:id", offreController.getoffreById)
Route.get("/getoffreByUser/:userId", offreController.getoffreByUser)
Route.delete("/deleteOffre/:id", offreController.deleteoffreById)
Route.delete("/deleteOffreByUser/:userId", offreController.deleteoffreByUser)
Route.put("/updateOffre/:userId",  offreController.updateoffreById)
module.exports = Route;

