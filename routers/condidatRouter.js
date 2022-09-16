const Route = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../passportConfig');
const condidatController = require('../controllers/condidatController')
const upload = require('../midleWare/uploadFile')

Route.post("/AddCondidat", upload.fields([{ name: 'cv', maxCount: 1 }, { name: 'autreCV', maxCount: 1 }]), condidatController.createcondidat) // Accepte un mélange de fichiers, spécifié par fields
Route.get("/ALLCondidat",  condidatController.getAllcondidat)
Route.get("/getCondidatByID/:id", condidatController.getcondidatById)
Route.delete("/deleteCondidat/:id", condidatController.deletecondidatById)
Route.put("/updateCondidat/:id", passport.authenticate('jwt', { session: false }), condidatController.updatecondidatById)
module.exports = Route; 