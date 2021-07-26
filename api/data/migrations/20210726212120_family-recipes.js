exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments();
      tbl.string("username", 128).notNullable().unique();
      tbl.string("password", 128).notNullable();
      tbl.string("email", 128).notNullable();
    })

    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("recipe_name", 128).notNullable();
      tbl.string("recipe_source", 256);
      tbl.string("category_name");
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("ingredient_name").notNullable();
      tbl.decimal("quantity");
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("instructions", (tbl) => {
      tbl.increments();
      tbl.integer("step_number").notNullable();
      tbl.string("step_instructions").notNullable();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
    .dropTableIfExists("users");
};
