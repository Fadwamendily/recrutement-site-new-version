const Route = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../passportConfig');
const upload = require('../midleWare/uploadFile')
const cvController =  require('../controllers/cvController')


Route.post("/AddCv",upload.single("cv"), cvController.createcv)
Route.get("/ALLCv", passport.authenticate('jwt', {session: false}), cvController.getAllcv)
Route.get("/getCvByID/:id", passport.authenticate('jwt', {session: false}), cvController.getcvById)
Route.delete("/deleteCv/:id", passport.authenticate('jwt', {session: false}), cvController.deletecvById)
Route.put("/updateCv/:id", passport.authenticate('jwt', {session: false}), cvController.updatecvById)


module.exports = Route;  