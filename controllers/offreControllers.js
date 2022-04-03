const offreModel = require('../models/offerModel')
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../passportConfig');
const ValidateOffre = require('../validation/offreValid')
module.exports={

    createoffre: function (req, res) {
        
            offreModel.create(req.body, (err, offre) => {
            if (err) {
                res.json({ message: 'error create offre' + err, data: null, status: 500 })
            }
            else {
                res.json({ message: 'offre created ', data: offre, status: 200 })
    
            }
        })
    },
getAlloffres: function (req, res) {
    offreModel.find({}).populate('userId').exec((err, offres) => {
        if (err) {
            res.json({ message: 'error get all offres' + err, data: null, status: 500 })
        }
        else {
            res.json({ message: 'all offres in system', size: offres.length, data: offres, status: 200 })

        }
    })
},
getoffreById: function (req, res) {
    offreModel.findById({ _id: req.params.id })
        .exec((err, offre) => {
            if (err) {
                res.json({ message: 'error get one offre' + err, data: null, status: 500 })
            }
            else {
                res.json({ message: ' offre in system', data: offre, status: 200 })


            }
        })
},
deleteoffreById: function (req, res) {
    offreModel.findByIdAndDelete({ _id: req.params.id })
         .exec((err, offre) => {

        if (err) { 
            res.json({ message: 'error delete  one offre' + err, data: null , status: 500 }) 
        }
        else { 
            res.json({ message: 'one offre delete system', data: offre  , status: 200 }) 
        }
    })
}, 
updateoffreById: (req, res) => {
    offreModel.findOneAndUpdate({ _id: req.params.id }, req.body, (err, offre) => {
        if (err) {
            res.status(500).json({
                message: "offre not updated ",
                data: null,
            });
        } else {
            res.status(200).json({
                message: "offre updated successfuly ",
                data: req.body,
            });
        }
    });
},
}