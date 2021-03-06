const router = require("express").Router();
const Ingredients = require("./ingredients-model.js");
const { checkIngredientExists } = require("../middleware/middleware.js");

// GET -- list all ingredients along with their ingredient_id
router.get("/", (req, res, next) => {
  Ingredients.findAll()
    .then((ingredients) => {
      res.status(200).json(ingredients);
    })
    .catch(next);
});

// GET -- ingredient for given id
router.get("/:id", checkIngredientExists, (req, res, next) => {
  Ingredients.findById(req.params.id)
    .then((ingredient) => {
      res.status(200).json(ingredient);
    })
    .catch(next);
});

// PUT -- update existing ingredient by id
router.put("/:id", checkIngredientExists, (req, res, next) => {
  Ingredients.update(req.params.id, req.body)
    .then((ingredient) => {
      res.status(201).json(ingredient);
    })
    .catch(next);
});

// DEL -- remove existing ingredient by id
router.delete("/:id", checkIngredientExists, (req, res, next) => {
  Ingredients.remove(req.params.id)
    .then((ingredient) => {
      res.status(200).json(ingredient);
    })
    .catch(next);
});

module.exports = router;
