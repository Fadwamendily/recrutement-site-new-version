const Route = require('express').Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../passportConfig');
const upload=require('../midleWare/uploadFile') 
const userController =  require('../controllers/usersControllers')

Route.post("/register",upload.single("avatar"), userController.register)
Route.post("/login", passport.authenticate('local', {session: false}),userController.login )

Route.get("/logout", passport.authenticate('jwt', {session: false}), userController.logout)
Route.get('/allUser',passport.authenticate('jwt', {session: false}),userController.getAllUsers)
Route.get('/getUserbyid/:id',passport.authenticate('jwt', {session: false}),userController.getUserById)
Route.get('/getUserbyrole/:role',passport.authenticate('jwt', {session: false}),userController.getUserbyRole)
Route.delete('/deleteUserbyid/:id',passport.authenticate('jwt', {session: false}),userController.deleteUserById)
Route.put('/avatar/:id',passport.authenticate('jwt', {session: false}),upload.single("avatar"),userController.uploadavatar);







module.exports = Route;