const Route = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../passportConfig');
const upload = require('../midleWare/uploadFile')
const cvController = require('../controllers/cvController')


Route.post("/AddCv", upload.single("cv"), cvController.createcv)
Route.get("/ALLCv", cvController.getAllcv)
Route.get("/getCvByID/:id", cvController.getcvById)
Route.get("/getcvByUser/:userId", cvController.getcvByUser)
Route.delete("/deleteCv/:id", cvController.deletecvById)
Route.put("/updateCv/:id", passport.authenticate('jwt', { session: false }), cvController.updatecvById)
Route.get("/search", cvController.getCVBySearch)

module.exports = Route;  