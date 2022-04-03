
const mongoose = require("mongoose");
const CvSchema = new mongoose.Schema(

  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }, 
    skills: {
        type: String,
        required: true  
    },
    domaine: {
        type: String,
        required: true  
    },
    lm: {
        type: String,
        required: true  
    },
    cv: {
        type: String,
        required: true, 
    }        
  },

  {timestamps: true}

);
  
module.exports = mongoose.model("Cv", CvSchema);
  