# Base URL: https://secret-family-recipes6.herokuapp.com

## Login and Register

| Type  | Endpoint             | Description         | Protected |
| ----- | -------------------- | ------------------- | --------- |
| xPOST | "/api/auth/register" | Create new user     | No        |
| xPOST | "/api/auth/login"    | Login existing user | No        |

### Token is required for all endpoints listed below

## recipes

| Type  | Endpoint               | Description                                 | Protected |
| ----- | ---------------------- | ------------------------------------------- | --------- |
| GET   | /api/recipes/:id       | Fetch one Recipe by recipe_id               | Yes       |
| PUT   | /api/recipes/:id       | Update a Recipe by recipe_id                | Yes       |
| DEL   | /api/recipes/:id       | Delete a Recipe by recipe_id                | Yes       |
| GET   | /api/recipes/users/:id | Fetch all Recipes by user_id                | Yes       |
| xPOST | /api/recipes/users/:id | Add a new user Recipe by user_id            | Yes       |
| xPOST | /api/recipes/:id/inst  | Add an Instruction to a Recipe by recipe_id | Yes       |
| xPOST | /api/recipes/:id/ing   | Add an ingredient to a Recipe by recipe_id  | Yes       |

## ingredients

| Type | Endpoint     | Description                                    | Protected |
| ---- | ------------ | ---------------------------------------------- | --------- |
| GET  | /api/ing/:id | Get an Ingredient by ingredient_id             | Yes       |
| PUT  | /api/ing/:id | Update an existing Ingredient by ingredient_id | Yes       |
| DEL  | /api/ing/:id | Remove an existing Ingredient by ingredient_id | Yes       |

## instructions

| Type | Endpoint      | Description                                      | Protected |
| ---- | ------------- | ------------------------------------------------ | --------- |
| PUT  | /api/inst/:id | Update an existing Instruction by instruction_id | Yes       |
| DEL  | /api/inst/:id | Remove an existing Instruction by instruction_id | Yes       |
| GET  | /api/inst/:id | Get an existing Instruction by instruction_id    | Yes       |

##### \*\*perhaps for administrative use

## users

| Type | Endpoint        | Description                        | Protected |
| ---- | --------------- | ---------------------------------- | --------- |
| GET  | /api/users/     | Get all Users                      | Yes       |
| GET  | /api/users/:id  | Get all Users by user_id           | Yes       |
| xPUT | x/api/users/:id | Update an existing User by user_id | Yes       |
| xDEL | x/api/users/:id | Remove an existing User by user_id | Yes       |
