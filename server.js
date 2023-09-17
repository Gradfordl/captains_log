require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const jsxViewEngine = require("jsx-view-engine");


//Configure View Defaults
app.set('view engine', 'jsx')
app.set('views', './views')
app.engine('jsx',jsxViewEngine())


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

//Edit

//Show









app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})