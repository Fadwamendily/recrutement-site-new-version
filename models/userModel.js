const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var uniqueValidator = require('mongoose-unique-validator');


const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        trim: true,
        unique: true,
        //required: true   
    },
    password: {
        type: String,
        //required: true 
    }, 
    
    name: {
        type: String,
        //required: true 
    },
    
    adress: {
        type: String,
        //required: true
    },
    role: {  
        type: String,
        enum: ["client","freelancer","ESN"],
        //required: true
    },
    phoneNumber: {
        type: Number,
        //required: true 
      
    },  
    avatar: {
        type: String,
        default: 'useravatar.png'
       
    } 

}) 

//Presave middleware - NOTE: if use arrow function, this becomes empty object, and we can't use isModified()
UserSchema.pre("save", function(next) {
    //If there's no change to password field (no change, no add new), call next()
    if(!this.isModified('password')){
        next()
    }
 
    bcrypt.hash(this.password, 10, (err, hashedPassword) => {
        if(err)
            return next(err)
        this.password = hashedPassword;
        return next()
    })
})

//Custom method - if u wanna use 'this' as user document, don't use arrow function coz arrow function watch video 8 in my react document for more info

UserSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if(err)
            return cb(err)
        if(!isMatch)
            return cb(null, false)
        return cb(null, this)
    })
}
 
UserSchema.plugin(uniqueValidator);  

module.exports = mongoose.model("User", UserSchema);