const cvModel = require('../models/cvModel')
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../passportConfig');

module.exports = {

    /*createcv: function (req, res) {
        const {userId , skills, domaine, lm,cv:}= req.body
        cvModel.create(req.body, (err, cv) => {
            if (err) {
                res.json({ message: 'error create cv' + err, data: null, status: 500 })
            }
            else {
                res.json({ message: 'cv created ', data: cv, status: 200 })
    
            }
        })
    },*/

    createcv: function (req, res) {
        //productModel.create(req.body,function(err,product){
            console.log('fileee cv', req.file)
        let cvv = req.file
        console.log('fiiiiiiilllleee', req.body);
        if (cvv.mimetype === 'application/pdf') {
            cvModel.create({
                userId: req.body.userId,
                skills: req.body.skills,
                domaine: req.body.domaine,
                lm: req.body.lm,
                cv: cvv.filename

            },
                function (err, user) {

                    if (err) {
                        res.json({ message: 'error add cv' + err, data: null, status: 500 })
                    } else {
                        res.json({ message: 'cv created successfully', data: user, status: 200 })
                    }
                })

        }
        else {

            res.json({ msg: 'please enter a valid extention' })
        }
    },


    getAllcv: function (req, res) {

        cvModel.find({}).populate('userId').exec((err, cvs) => {
            if (err) {
                res.json({ message: 'error get all cvs' + err, data: null, status: 500 })
            }
            else {
                res.json({ message: 'all cvs in system', size: cvs.length, data: cvs, status: 200 })

            }
        })
    },


    getcvById: function (req, res) {

        cvModel.findById({ _id: req.params.id }).populate('userId')
            .exec((err, cv) => {
                if (err) {
                    res.json({ message: 'error get one cv' + err, data: null, status: 500 })
                }
                else {
                    res.json({ message: ' cv in system', data: cv, status: 200 })


                }
            })
    },

    getcvByUser: function (req, res) {
        cvModel.find({ userId: req.params.userId }).populate('userId')
            .exec((err, user) => {
                if (err) {
                    res.json({ message: 'error get one CV' + err, data: null, status: 500 })
                }
                else {
                    res.json({ message: ' CV in system', data: user, status: 200 })


                }
            })
    },

    deletecvById: function (req, res) {
        cvModel.findByIdAndDelete({ _id: req.params.id }, (err, cv) => {

            if (err) { res.json({ message: 'error delete  one cv' + err, data: null, status: 500 }) }
            else { res.json({ message: 'one cv delete system', data: cv, status: 200 }) }
        })
    },
    updatecvById: (req, res) => {
        cvModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, cv) => {
            if (err) {
                res.status(500).json({
                    message: "cv not updated ",
                    data: null,
                });
            } else {
                res.status(200).json({
                    message: "cv updated successfuly ",
                    data: cv,
                });
            }
        });
    },

      getCVBySearch : async (req, res) => {
        const { searchQuery } = req.query;
        try {
          const skills = new RegExp(searchQuery, "i");
          const CV = await cvModel.find({ skills });
          res.json(CV);
        } catch (error) {
          res.status(404).json({ message: "Something went wrong" });
        }
      },
}