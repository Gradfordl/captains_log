const express = require("express")
const router = express.Router();
const Log = require("../models/logs")

//7 Restful routes
//Index
router.get("/logs", async (req, res) => {
    try {
      const foundLogs = await Log.find({});
      //   res.send(foundLogs)
      // console.log(foundlogs);
      res.status(200).render("Index", {
        logs: foundLogs,
      });
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  //New
  router.get("/logs/new", (req, res) => {
    try {
        res.render("New"); 
    } catch (err) {
        res.status(400).send(err);
    }
  });
  
  //Delete
  router.delete("/logs/:id", async (req, res) => {
    try {
      await Log.findByIdAndDelete(req.params.id);
      res.status(201).redirect("/logs");
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  //Update
  router.put("/logs/:id", async (req, res) => {
    try {
      if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
      } else {
        req.body.shipIsBroken = false;
      }
      const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.redirect(`/logs/${req.params.id}`);
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  //Create
  router.post("/logs", async (req, res) => {
    try {
      req.body.shipIsBroken = req.body.shipIsBroken === "on";
      // res.send("received")
      // res.send(req.body)
      const createdLog = await Log.create(req.body);
      res.status(201).redirect("/logs");
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  //Edit
  router.get("/logs/:id/edit", async (req, res) => {
    try {
      const foundLog = await Log.findById(req.params.id);
      res.render("Edit", { log: foundLog });
    } catch (err) {
      res.status(400).send(err);
    }
  });
  
  //Show
  router.get("/logs/:id", async (req, res) => {
    try {
      const foundLog = await Log.findById(req.params.id);
      res.render("Show", {
        log: foundLog,
      });
    } catch (err) {
      res.status(400).send(err);
    }
  });

 router.get("*", (req, res) => {
  res.redirect("/logs")
})

  
  // const userRouter = require("./controllers/logs")
  // app.use("/logs", userRouter)

  module.exports = router
  