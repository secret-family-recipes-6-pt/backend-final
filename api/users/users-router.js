const router = require("express").Router();
const Users = require("./users-model.js");

// GET -- all users
router.get("/", (req, res, next) => {
  Users.findAll()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(next);
});

// GET -- user by id
router.get("/:id", (req, res, next) => {
  Users.findById(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});

// POST
//doesn't the register endpoint in auth-router cover this?

// PUT -- update user
router.put("/:id", (req, res, next) => {
  Users.update(req.params.id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch(next);
});
// DEL -- delete user
router.delete("./:id", (req, res, next) => {
  Users.remove(req.params.id)
    .then((deletedUser) => {
      res.status(200).json(deletedUser);
    })
    .catch(next);
});
module.exports = router;
