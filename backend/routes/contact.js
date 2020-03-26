const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

//@Api: http:localhost:5000/api/contacts
//@desc: Add new Contact
//@access: public
router.post("/", (req, res) => {
  const { Name, Mobile, EMail, Img } = req.body;
  const newcontact = new Contact({
    Name,
    Mobile,
    EMail,
    Img
  });
  newcontact
    .save()
    .then(contacts => res.send(contacts))
    .catch(err => console.log(err));
});

//@Api: http:localhost:5000/api/contacts
//@desc: Get All Contacts
//@access: public
router.get("/", (req, res) => {
  Contact.find()
    .then(data => res.send(data))
    .catch(err => console.log(err));
});

//@Api: http:localhost:5000/api/contacts/id
//@desc: Get Contact By ID
//@access: public
router.get("/contact/:_id", (req, res) => {
  const { _id } = req.params;
  Contact.findOne({ _id }).then(contact => res.send(contact));
});

//@Api: http:localhost:5000/api/contacts/id
//@desc: Delete Contact
//@access: public
router.delete("/contact/:_id", (req, res) => {
  const { _id } = req.params;
  Contact.findOneAndDelete({ _id })
    .then(contact => res.send("success"))
    .catch(err => res.send(err));
});

//@Api: http:localhost:5000/api/contacts/id
//@desc: Edit Contact
//@access: public
router.put("/contact/:_id", (req, res) => {
  const { _id } = req.params;
  const { Name, Mobile, EMail, Img } = req.body;
  Contact.findByIdAndUpdate({ _id }, { $set: { Name, Mobile, EMail, Img } })
    .then(contact => res.send("contact modified"))
    // .then(contact => res.send(contact))
    .catch(err => res.send(err));
});

module.exports = router;
