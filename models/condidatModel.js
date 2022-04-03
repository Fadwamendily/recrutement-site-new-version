const mongoose = require("mongoose");

const condidatSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }, 
    offreId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "offres",
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
    },
    
    autreCV: {
        type: String,
        //required: true,   
    }        
  },
  {timestamps: true}
);
  
module.exports = mongoose.model("Condidat", condidatSchema);