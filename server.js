require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const jsxViewEngine = require("jsx-view-engine");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Log = require("./models/logs")

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
app.get('/logs', async (req, res) => {
    try {
      const foundLogs = await Log.find({});
    //   res.send(foundLogs)
      // console.log(foundlogs);
      res.status(200).render('Index', {
        logs: foundLogs,
      });
    } catch (err) {
      res.status(400).send(err);
    }
  });

//New
app.get('/new', (req, res) => {
    // res.send("New")
    res.render("New")
  });

//Delete
app.delete("/logs/:id", async (req, res) => {
  try {
    await Log.findByIdAndDelete(req.params.id);
    res.status(201).redirect("/logs");
  } catch (err) {
    res.status(400).send(err);
  }
});

//Update
app.put('/logs/:id', async (req, res) => {
  try {
    if (req.body.shipIsBroken === 'on') {
      req.body.shipIsBroken = true;
    }
    else {
      req.body.shipIsBroken = false;
    }
    const updatedLog = await Log.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      {new: true})
      res.redirect(`/logs/${req.params.id}`);
  } catch (err) {
    res.status(400).send(err);
  }
});

//Create
app.post('/logs', async (req, res) => {
    try {
        req.body.shipIsBroken = req.body.shipIsBroken === "on"
        // res.send("received")
        // res.send(req.body)
     const createdLog = await Log.create(req.body)
      res.status(201).redirect('/logs');
    } catch (err) {
      res.status(400).send(err);
    }
  });

//Edit
app.get("/logs/:id/edit", async (req, res) => {
  try {
    const foundLog = await Log.findById(req.params.id);
    res.render("Edit", { log: foundLog });
  } catch (err) {
    res.status(400).send(err);
  }
});

//Show
app.get("/logs/:id", async (req, res) => {
    try {
      const foundLog = await Log.findById(req.params.id);
      res.render("Show", {
        log: foundLog,
      });
    } catch (err) {
      res.status(400).send(err);
    }
  });








app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})