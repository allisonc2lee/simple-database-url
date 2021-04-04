const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const cors = require("cors");

const app = express();
var corsOptions = {
  origin: "http://localhost:8081",
};
const uri =
  "mongodb+srv://<user>:<password>@cluster0.y8ze7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

MongoClient.connect(uri, {
  useUnifiedTopology: true,
})
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("app1");
    const linksCollection = db.collection("saved");

    app.use(
      bodyParser.urlencoded({
        extended: true,
        limit: "50mb",
        parameterLimit: 100000,
      })
    );
    app.use(
      bodyParser.json({
        limit: "50mb",
        parameterLimit: 100000,
      })
    );

    app.use(cors(corsOptions));

    app.get("/saved", (req, res) => {
      const cursor = db.collection("saved").find();
      console.log(cursor);

      linksCollection
        .find()
        .toArray()
        .then((results) => {
          res.json(results);
        })
        .catch((error) => console.error(error));
    });

    app.post("/saved", (req, res) => {
      linksCollection
        .insertOne(req.body)
        .then((result) => {
          res.json(req.body);
          res.redirect("/");
        })
        .catch((error) => console.error(error));
    });
  })
  .catch((err) => console.log("Not Connected to Database ERROR! ", err));
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
