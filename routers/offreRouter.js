const Route = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../passportConfig');
const offreController =  require('../controllers/offreControllers')


Route.post("/AddOffre", passport.authenticate('jwt', {session: false}), offreController.createoffre)
Route.get("/ALLOffre", passport.authenticate('jwt', {session: false}), offreController.getAlloffres)
Route.get("/getOffreByID/:id", passport.authenticate('jwt', {session: false}), offreController.getoffreById)
Route.delete("/deleteOffre/:id", passport.authenticate('jwt', {session: false}), offreController.deleteoffreById)
Route.put("/updateOffre/:id", passport.authenticate('jwt', {session: false}), offreController.updateoffreById)
module.exports = Route;