const condidatModel = require('../models/condidatModel')
const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../passportConfig');

module.exports={ 

    createcondidat: async (req, res) => {
        try {

            console.log("files : ", req.files)
            const cvv = req.files.cv[0].filename;
            req.body["cv"] = cvv
            const autreCV = req.files.autreCV[0].filename; // import two  files in mongoose
            req.body["autreCV"] = autreCV

            if (req.files.cv[0].mimetype != 'application/pdf') {
                res.json({ msg: 'please enter a valid extention for cv1' })
            }
            else if (req.files.autreCV[0].mimetype != 'application/pdf') {
                res.json({ msg: 'please enter a valid extention for cv2' })

            } else {
                const condidat = new condidatModel({
                    userId: req.body.userId,
                    skills: req.body.skills,
                    domaine: req.body.domaine,
                    lm: req.body.lm,
                    cv: req.body.cv,
                    autreCV: req.body.autreCV,
                })
                const result = await condidat.save();
                res.json({ message: 'new condidat created', data: result, status: 200 })
            }
        }
            catch (error) 
            {
                console.log(error.message);
                res.json({ message: 'error', data: error, status: 500 });
            }
        },

    /*createcondidat: function (req, res) {
        let cv1= req.file;
        let cv2= req.file;
        console.log('reqbody', req.body)
        if(((cv1.mimetype== 'condcv/pdf')) || ((cv2.mimetype== 'condcv/pdf'))) {
            console.log('reqfile', req.file);
             res.json({msg:'please enter a valid extention'})
        }else {
            condidatModel.create({
                userId:req.body.userId,
                skills:req.body.skills,
                domaine:req.body.domaine,
                lm:req.body.lm,
                cv:cv1.filename, 
                autreCV:cv2.filename},
            (err, condidat) => {
                  
             if (err) {
                res.json({ message: 'error create condidat' + err, data: null, status: 500 })
             }
             else {
                res.json({ message: 'condidat created ', data: condidat, status: 200 })
    
              }
        })}
    },*/
getAllcondidat: function (req, res) {
    condidatModel.find({}).populate('userId').populate('offreId').exec((err, condidats) => {
        if (err) {
            res.json({ message: 'error get all condidats' + err, data: null, status: 500 })
        }
        else {
            res.json({ message: 'all condidats in system', size: condidats.length, data: condidats, status: 200 })

        }
    })
},
getcondidatById: function (req, res) {
    condidatModel.findById({ _id: req.params.id }).populate('offreId')
        .exec((err, condidat) => {
            if (err) {
                res.json({ message: 'error get one condidat' + err, data: null, status: 500 })
            }
            else {
                res.json({ message: ' condidat in system', data: condidat, status: 200 })


            }
        })
},
deletecondidatById: function (req, res) {
    condidatModel.findByIdAndDelete({ _id: req.params.id }, (err, condidat) => {

        if (err) { res.json({ message: 'error delete  one condidat' + err, data: null, status: 500 }) }
        else { res.json({ message: 'one condidat delete system', data: condidat, status: 200 }) }
    })
},
updatecondidatById: (req, res) => {
    condidatModel.findOneAndUpdate({ _id: req.params.id }, req.body, (err, condidat) => {
        if (!condidat) {
            res.status(500).json({
                message: "condidat not updated ",
                data: null,
            });  
        } else {
            res.status(200).json({
                message: "condidat updated successfuly ",
                data: req.body,
            });
        }
    });
},
}