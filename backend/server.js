const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");

const assert = require("assert");

const app = express();

app.use(express.json());

const mongo_url = "mongodb://localhost:27017";
const dataBase = "contact";

MongoClient.connect(mongo_url, { useUnifiedTopology: true }, (err, client) => {
  assert.equal(err, null, "database connexion failed");
  console.log("db connected ...");
  const db = client.db(dataBase);

  /****get */
  app.get("/contacts", (req, res) => {
    db.collection("contactlist")
      .find()
      .toArray((err, data) =>
        err ? console.log(`can't find data`) : res.send(data)
      );
  });
  /***getcontactbyid */
  app.get("/contact/:id", (req, res) => {
    const contactId = req.params.id;
    db.collection("contactlist")
      .find({ _id: ObjectID(contactId) })
      .toArray((err, data) => {
        err ? console.error(err) : res.send(data);
      });
  });
  /******delete */
  app.delete("/deleteContact/:id", (req, res) => {
    const contactId = req.params.id;
    db.collection("contactlist").deleteOne(
      { _id: ObjectID(contactId) },
      (err, data) => {
        err ? console.error(err) : res.send(data);
      }
    );
  });
  /*****add */
  app.post("/addContact", (req, res) => {
    let newContact = req.body;
    db.collection("contactlist").insertOne(newContact, (err, data) =>
      err ? console.error(err) : res.send(data)
    );
  });
  /*****edit */
  app.put("/editContact/:id", (req, res) => {
    const id = req.params.id;
    db.collection("contactlist").updateOne(
      { _id: ObjectID(id) },
      { $set: req.body },
      (err, data) => (err ? console.error(err) : res.send(data))
    );
  });
});

app.listen(4000, err => {
  err
    ? console.log("server is not running")
    : console.log("server is running on port 4000");
});
