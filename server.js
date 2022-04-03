

const express = require('express');
const app = express();
const port = 5000
const fs = require('fs');
const database = require('./config/bd')


const cookieParser = require('cookie-parser');
const cors = require('cors');
app.use(cookieParser())    //<----- This middleware is needed to read Cookie from request. Without it, we'll get no req.cookie...
app.use(express.json())    //<----- this middleware is needed to read JSON from request. Without it, we'll get req.body == undefined.
app.use(express.urlencoded({extended: true}));

/*app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}))*/
   

const userRouter = require('./routers/userRouter');
const offreRouter = require('./routers/offreRouter');
const cvRouter = require('./routers/cvRouter');
const condidatRouter = require('./routers/condidatRouter');
app.use("/users", userRouter);
app.use("/offre", offreRouter); 
app.use("/cv", cvRouter);
app.use("/condidat", condidatRouter);


app.get("/getfile/:cv", function (req, res) {
  res.sendFile(__dirname + "/uploads/" + req.params.cv);
});


app.use(function(req,res, next) {
    let err = new Error();
       err.status = 404;
       next(err);
   });
   // handle errors
   app.use(function(err, req, res, next) {
    console.log(err);
     if(err.status === 404) 
      res.status(404).json({message: " Path Not found"});
     else
       res.status(500).json({message: "Something looks wrong "});
   }); 


app.listen(port, console.log(`server is running at http//localhost:${port}`));