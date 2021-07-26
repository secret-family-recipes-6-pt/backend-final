exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipe_name: "cereal",
          recipe_source: "Dad",
          category_name: "breakfast",
          user_id: 1,
        },
        {
          recipe_name: "toast",
          recipe_source: "Mom",
          category_name: "breakfast",
          user_id: 2,
        },
        {
          recipe_name: "soup",
          recipe_source: "Grandmother",
          category_name: "lunch",
          user_id: 3,
        },
        {
          recipe_name: "sandwich",
          recipe_source: "Mom",
          category_name: "lunch",
          user_id: 1,
        },
        {
          recipe_name: "spaghetti",
          recipe_source: "Mom",
          category_name: "dinner",
          user_id: 2,
        },
        {
          recipe_name: "nachos",
          recipe_source: "Pops",
          category_name: "dinner",
          user_id: 3,
        },
        {
          recipe_name: "cake",
          recipe_source: "Mom",
          category_name: "dessert",
          user_id: 1,
        },
        {
          recipe_name: "soda",
          recipe_source: "Mom",
          category_name: "dessert",
          user_id: 2,
        },
        {
          recipe_name: "granola bar",
          recipe_source: "Uncle Ralph",
          category_name: "snack",
          user_id: 3,
        },
        {
          recipe_name: "protein shake",
          recipe_source: "Mom",
          category_name: "snack",
          user_id: 1,
        },
      ]);
    });
};
