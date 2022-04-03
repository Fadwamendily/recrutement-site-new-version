const Route = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../passportConfig');
const condidatController =  require('../controllers/condidatController')
const upload = require('../midleWare/uploadFile')

Route.post("/AddCondidat",upload.fields([{name: 'cv', maxCount: 1},{name: 'autreCV', maxCount: 1}]), condidatController.createcondidat)
Route.get("/ALLCondidat", passport.authenticate('jwt', {session: false}), condidatController.getAllcondidat)
Route.get("/getCondidatByID/:id", passport.authenticate('jwt', {session: false}), condidatController.getcondidatById)
Route.delete("/deleteCondidat/:id", passport.authenticate('jwt', {session: false}), condidatController.deletecondidatById)
Route.put("/updateCondidat/:id", passport.authenticate('jwt', {session: false}), condidatController.updatecondidatById)
module.exports = Route; 