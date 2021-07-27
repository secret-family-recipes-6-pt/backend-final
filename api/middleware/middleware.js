const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../secret.js");
const bcrypt = require("bcryptjs");
const Users = require("../users/users-model.js");
const Recipes = require("../recipes/recipes-model.js");

// CHECK_REGISTRATION_CREDENTIALS -- upon registration hashes password and checks that username is unique
const checkRegistrationCredentials = (req, res, next) => {
  let user = req.body;
  // bcyryt encodes password
  const rounds = process.env.BCRYPT_ROUNDS || 8;
  const hash = bcrypt.hashSync(user.password, rounds);
  // save hashed password
  user.password = hash;
  Users.findByUsername(user.username)
    .then((existingUser) => {
      if (existingUser) {
        res.status(401).json("Username already exists");
      } else {
        next();
      }
    })
    .catch(next);
};

// CHECK_REGISTRATION_FIELDS -- upon registration checks that username, password, and email are present
const checkRegistrationFields = (req, res, next) => {
  let user = req.body;
  if (!user.username || !user.password || !user.email) {
    res.status(401).json("Now you know all fields are required!");
  } else {
    next();
  }
};

// CHECK_IF_USERNAME_EXISTS
const checkIfUsernameExists = (req, res, next) => {
  // look for existence of user with given username
  Users.findByUsername(req.body.username)
    .then((savedUser) => {
      if (savedUser) {
        next();
      } else {
        res.status(401).json("Invalid credentials, playa");
      }
    })
    .catch(next);
};

// MAKE_TOKEN
const makeToken = (user) => {
  const payload = {
    subject: user.user_id,
    username: user.username,
    email: user.email,
  };
  const options = {
    expiresIn: "1d",
  };
  return jwt.sign(payload, jwtSecret, options);
};

// RESTRICTED - only allows users to access pages to which they have access when logged in and in possession of a token
const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(401).json("Hold on...you need a token");
  } else {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(403).json("Oh no! Your token is invalid " + err.message);
      } else {
        req.decodedToken = decodedToken;
        next();
      }
    });
  }
};

const checkUserExists = (req, res, next) => {
  // look for existence of user with given id
  Users.findById(req.params.id)
    .then((user) => {
      if (!user) {
        res.json({ message: "I'm not a hater, but that user doesn't exist" });
      } else {
        next();
      }
    })
    .catch(next);
};

module.exports = {
  checkRegistrationFields,
  checkRegistrationCredentials,
  checkIfUsernameExists,
  makeToken,
  restricted,
  checkUserExists,
};
