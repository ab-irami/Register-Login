const express = require("express");
const router = express.Router();
const signUpTemplateCopy = require("../models/signupmodels");
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  const signedUpUser = new signUpTemplateCopy({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: securePassword,
  });
  signedUpUser
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});

router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  signUpTemplateCopy.find({ email }).then((data) => {
    if (data) {
      const hashedPassword = data[0].password;
      bcrypt.compare(password, hashedPassword).then((result) => {
        if (result) {
          res.send({
            message: "Successful Login",
          });
        } else {
          res.send({
            message: "Oops!, Login Failed try again",
          });
        }
      });
    }
  });
});

module.exports = router;
