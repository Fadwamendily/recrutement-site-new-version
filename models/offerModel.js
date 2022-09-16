const mongoose = require("mongoose");

const OffreSchema = new mongoose.Schema(
    {
       userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            //required: true
        },
        title: {
            type: String,
            //required: true
        },
        jobType: {
            type: String,
            enum: ["à plein temps", "à temps partiel", "travail à domicile"],
            //required: true
        },
        duration: {
            type: Number,
            //required: true
        },

        salary: {
            type: Number,
            //integer: true
            //required: true
        },

        date: {
             type: Date, 
             default: Date
            },
        maxApplicant: {
            type: Number,
            //integer: true
            //required: true
        },
        posAvailable: {
            type: Number,
            //integer: true
            //required: true
        },
        skills: {
            type: String,
            //required: true
        },
        bio: {
            type: String,
            //required: true
        }

    },
    { timestamps: true }
);

module.exports = mongoose.model("offres", OffreSchema);
