const router = require("express").Router();
const Instructions = require("./instructions-model.js");
const { checkInstructionExists } = require("../middleware/middleware.js");

// GET -- list all instructions along with their instruction_id
router.get("/", (req, res, next) => {
  Instructions.findAll()
    .then((instructions) => {
      res.status(200).json(instructions);
    })
    .catch(next);
});

// GET -- instruction by id
router.get("/:id", checkInstructionExists, (req, res, next) => {
  Instructions.findById(req.params.id)
    .then((instruction) => {
      res.status(200).json(instruction);
    })
    .catch(next);
});

// PUT -- update existing instruction by id
router.put("/:id", checkInstructionExists, (req, res, next) => {
  Instructions.update(req.params.id, req.body)
    .then((instruction) => {
      res.status(201).json(instruction);
    })
    .catch(next);
});

// DEL -- remove existing instruction by id
router.delete("/:id", checkInstructionExists, (req, res, next) => {
  Instructions.remove(req.params.id)
    .then((instruction) => {
      res.status(200).json(instruction);
    })
    .catch(next);
});

module.exports = router;
