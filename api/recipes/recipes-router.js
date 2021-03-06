const router = require("express").Router();
const Recipes = require("./recipes-model.js");
const Ingredients = require("../ingredients/ingredients-model.js");
const Instructions = require("../instructions/instructions-model.js");
const {
  checkUserExists,
  checkRecipeExists,
} = require("../middleware/middleware.js");

// GET - all recipes
router.get("/", (req, res, next) => {
  Recipes.findAll()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch(next);
});

// router.get("/", (req, res, next) => {
//   Recipes.findAll()
//     .then((recipes) => {
//       // let recipesArray = recipes.map((recipe) => {
//       //   return recipe;
//       // });
//       recipes.map((recipe) => {
//         Recipes.findById(recipe.id)
//           .then((recipe) => {
//             Ingredients.findByRecipeId(recipe.id)
//               .then((ingredients) => {
//                 Instructions.findByRecipeId(recipe.id)
//                   .then((instructions) => {
//                     res.status(200).json({
//                       ...recipe,
//                       ingredients: ingredients,
//                       instructions: instructions,
//                     });
//                   })
//                   .catch(next);
//               })
//               .catch(next);
//           })
//           .catch(next);
//       });
//     })
//     .catch(next);
// });

// GET -- recipes by recipe_id
router.get("/:id", checkRecipeExists, (req, res, next) => {
  const { id } = req.params;
  Recipes.findById(id)
    .then((recipe) => {
      Ingredients.findByRecipeId(recipe.id)
        .then((ingredients) => {
          Instructions.findByRecipeId(recipe.id)
            .then((instructions) => {
              res.status(200).json({
                ...recipe,
                ingredients: ingredients,
                instructions: instructions,
              });
            })
            .catch(next);
        })
        .catch(next);
    })
    .catch(next);
});

// PUT -- update recipes by recipe_id
router.put("/:id", checkRecipeExists, (req, res, next) => {
  Recipes.update(req.params.id, req.body)
    .then((recipe) => {
      res.status(201).json(recipe);
    })
    .catch(next);
});

// DELETE -- remove existing recipe by recipe_id
router.delete("/:id", checkRecipeExists, (req, res, next) => {
  Recipes.remove(req.params.id)
    .then((recipe) => {
      res.status(201).json(recipe);
    })
    .catch(next);
});

//GET -- recipes by user_id
router.get("/users/:id", checkUserExists, (req, res, next) => {
  Recipes.findByUserId(req.params.id)
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch(next);
});

// POST -- add new recipe by user_id
router.post("/users/:id", checkUserExists, (req, res, next) => {
  const newRecipe = { ...req.body, user_id: req.params.id };
  Recipes.add(newRecipe)
    .then((recipe) => {
      res.status(201).json(recipe);
    })
    .catch(next);
});

// POST -- add ingredient to existing recipe by id
router.post("/:id/ing", checkRecipeExists, (req, res, next) => {
  const newIngredient = { ...req.body, recipe_id: req.params.id };
  Ingredients.add(newIngredient)
    .then((ingredient) => {
      res.status(201).json(ingredient);
    })
    .catch(next);
});

// POST -- add instruction to existing recipe by id
router.post("/:id/inst", checkRecipeExists, (req, res, next) => {
  const newInstruction = { ...req.body, recipe_id: req.params.id };
  Instructions.add(newInstruction)
    .then((instruction) => {
      res.status(201).json(instruction);
    })
    .catch(next);
});

module.exports = router;
