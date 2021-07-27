const db = require("../data/db-config.js");

const findAll = () => {
  return db("ingredients");
};

const findById = (id) => {
  return db("ingredients").where("id", id).first();
};

const findByRecipeId = (recipe_id) => {
  return db("ingredients").where("recipe_id", recipe_id);
};

const add = async (ingredient) => {
  const [newIngredient] = await db("ingredients").insert(ingredient, "*");
  return findByRecipeId(newIngredient.recipe_id);
};

const update = async (id, ingredient) => {
  const [updatedIngredient] = await db("ingredients", "*")
    .where("id", id)
    .update(ingredient, "*");
  return findByRecipeId(updatedIngredient.recipe_id);
};

const remove = async (id) => {
  const [deletedIngredient] = await db("ingredients").where("id", id).del("*");
  return `You just deleted ${deletedIngredient.ingredient_name}`;
};

module.exports = {
  findAll,
  findById,
  findByRecipeId,
  add,
  update,
  remove,
};
