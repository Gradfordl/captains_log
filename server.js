require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const jsxViewEngine = require("jsx-view-engine");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const Log = require("./models/logs");
const logRouter = require("./controllers/logs")

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
app.set("view engine", "jsx");
app.set("views", "./views");
app.engine("jsx", jsxViewEngine());

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

//Seed Route
//adds data to your database for testing purposes
app.get("/logs/seed", async (req, res) => {
  try {
     await Log.create([
      {
        title: "Gweeba Zeeba",
        entry: "Gedna fwingle tor balami shanga dwam fleebs kana. Badipsa ongie lay woohoo dwam swobe swoobie dwam oosh wanbah frabbit myshuno kowlenin. Chum-cha klop lukimazy lalo vanu army-putar. Kweb discufa sherb smustle ta swobe sperk arogaba delco stamby swaybe lalo." ,
        shipIsBroken: true
      },
      {
        title: "Glorpa Florp" ,
        entry: "Wetsul delco wetsul zurzoh sul me mala foop. Nip dufka arogaba nay oosh kweb ta ono gronk lukimazy hipta krem fro. Me neeba yib dowl taw jepsi sula gartzel zid zebanay prooshtis neep. Fleeny sperk kooj frabbit fa kabuna docka be afenk nay zor delco fuens mee-la swobe." ,
        shipIsBroken: true
      },
      {
        title: "Peepa Yer" ,
        entry: "Miza vendu nay cou squib frash ah zaroo nay ern. Euranka welb delco kana om army-putar avoo klop gerbits hopple delco jepsi apper ne. Fleebs kabuna nart shooflee firbs vana. Fergoob morpher ooba neib mezino mala sedna choba nib norb zurzoh vanu abanoop. Shooflee jepsi fazoo zor gam foop neeba norb. Sa evawop ono wub lalo fazoo nay chum-cha yibs. Yib favu fwingle me afenk noobie ongie sons gir taw mebzi." ,
        shipIsBroken: false
      }
     ]);
     res.redirect("/logs")
  } catch (err) {
      res.status(400).send(err);
  }
})

// //7 Restful routes
// //Index
// app.get("/logs", async (req, res) => {
//   try {
//     const foundLogs = await Log.find({});
//     //   res.send(foundLogs)
//     // console.log(foundlogs);
//     res.status(200).render("Index", {
//       logs: foundLogs,
//     });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// //New
// app.get("/logs/new", (req, res) => {
//   // res.send("New")
//   res.render("New");
// });

// //Delete
// app.delete("/logs/:id", async (req, res) => {
//   try {
//     await Log.findByIdAndDelete(req.params.id);
//     res.status(201).redirect("/logs");
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// //Update
// app.put("/logs/:id", async (req, res) => {
//   try {
//     if (req.body.shipIsBroken === "on") {
//       req.body.shipIsBroken = true;
//     } else {
//       req.body.shipIsBroken = false;
//     }
//     const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });
//     res.redirect(`/logs/${req.params.id}`);
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// //Create
// app.post("/logs", async (req, res) => {
//   try {
//     req.body.shipIsBroken = req.body.shipIsBroken === "on";
//     // res.send("received")
//     // res.send(req.body)
//     const createdLog = await Log.create(req.body);
//     res.status(201).redirect("/logs");
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// //Edit
// app.get("/logs/:id/edit", async (req, res) => {
//   try {
//     const foundLog = await Log.findById(req.params.id);
//     res.render("Edit", { log: foundLog });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

// //Show
// app.get("/logs/:id", async (req, res) => {
//   try {
//     const foundLog = await Log.findById(req.params.id);
//     res.render("Show", {
//       log: foundLog,
//     });
//   } catch (err) {
//     res.status(400).send(err);
//   }
// });

app.use("/", logRouter)

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
