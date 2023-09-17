require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const jsxViewEngine = require("jsx-view-engine");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

//// database connection //////////////
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("Bingo bongo connected to Mongo");
  });
  //////////////////////////////////////////

//Configure View Defaults
app.set('view engine', 'jsx')
app.set('views', './views')
app.engine('jsx',jsxViewEngine())

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));


//7 Restful routes
//Index

//New
app.get('/new', (req, res) => {
    // res.send("New")
    res.render("New")
  });
//Delete

//Update

//Create
app.post('/logs', async (req, res) => {
    try {
        req.body.shipIsBroken = req.body.shipIsBroken === "on"
        // res.send("received")
        res.send(req.body)
    //  const createdLog = await Log.create(req.body)
    //   res.status(201).redirect('/logs');
    } catch (err) {
      res.status(400).send(err);
    }
  });

//Edit

//Show









app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})