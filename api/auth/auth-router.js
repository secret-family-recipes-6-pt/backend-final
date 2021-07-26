const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model.js");
const {
  checkRegistrationFields,
  checkRegistrationCredentials,
  checkIfUsernameExists,
  makeToken,
} = require("../middleware.js");

// POST -- registers new user
router.post(
  "/register",
  checkRegistrationFields,
  checkRegistrationCredentials,
  (req, res, next) => {
    const user = req.body;
    // add user to database as newUser
    Users.add(user)
      .then((newUser) => {
        const token = makeToken(newUser);
        res.status(201).json({
          message: `Welcome aboard ${user.username}`,
          token,
        });
      })
      .catch(next);
  }
);

// POST -- login existing user
router.post("/login", checkIfUsernameExists, (req, res, next) => {
  const user = req.body;
  // find existing user
  Users.findByUsername(user.username)
    .then((savedUser) => {
      if (savedUser && bcrypt.compareSync(user.password, savedUser.password)) {
        const token = makeToken(savedUser);
        res.status(200).json({
          message: `Welcome back ${savedUser.username}`,
          token,
        });
      } else {
        res
          .status(401)
          .json({ message: "Please check your credentials and try again" });
      }
    })
    .catch(next);
});
module.exports = router;
