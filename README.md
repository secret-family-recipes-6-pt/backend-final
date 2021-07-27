# Base URL: https://secret-family-recipes6.herokuapp.com

## Login and Register

| Type | Endpoint           | Description         | Protected | Required                  | Returns |
| ---- | ------------------ | ------------------- | --------- | ------------------------- | ------- |
| POST | /api/auth/register | Create new user     | No        | username, password, email |         |
| POST | /api/auth/login    | Login existing user | No        | username, password        |         |

### Token is required for all endpoints listed below

## recipes

| Type | Endpoint              | Description                                 | Protected | Required                         | Returns |
| ---- | --------------------- | ------------------------------------------- | --------- | -------------------------------- | ------- |
| GET  | /api/recipes/user/:id | Fetch all Recipes by user_id                | Yes       | valid user_id                    |         |
| GET  | /api/recipes/:id      | Fetch one Recipe by recipe_id               | Yes       | valid recipe_id                  |         |
| POST | /api/recipes/user/:id | Add a new user Recipe by user_id            | Yes       | valid user_id, recipe_name       |         |
| POST | /api/recipes/:id/inst | Add an Instruction to a Recipe by recipe_id | Yes       | valid recipe_id                  |         |
| POST | /api/recipes/:id/ing  | Add an ingredient to a Recipe by recipe_id  | Yes       | valid recipe_id, ingredient_name |         |
| PUT  | /api/recipes/:id      | Update a Recipe by recipe_id                | Yes       | valid recipe_id, recipe_name     |         |
| DEL  | /api/recipes/:id      | Delete a Recipe by recipe_id                | Yes       | valid recipe_id                  |         |

## ingredients

| Type | Endpoint     | Description                                    | Protected | Required            | Returns |
| ---- | ------------ | ---------------------------------------------- | --------- | ------------------- | ------- |
| GET  | /api/ing/:id | Get an Ingredient by ingredient_id             | Yes       | valid ingredient_id |         |
| PUT  | /api/ing/:id | Update an existing Ingredient by ingredient_id | Yes       | valid ingredient_id |         |
| DEL  | /api/ing/:id | Remove an existing Ingredient by ingredient_id | Yes       | valid ingredient_id |         |

## instructions

| Type | Endpoint      | Description                                      | Protected | Required             | Returns |
| ---- | ------------- | ------------------------------------------------ | --------- | -------------------- | ------- |
| GET  | /api/inst/:id | Get an existing Instruction by instruction_id    | Yes       | valid instruction_id |         |
| PUT  | /api/inst/:id | Update an existing Instruction by instruction_id | Yes       | valid instruction_id |         |
| DEL  | /api/inst/:id | Remove an existing Instruction by instruction_id | Yes       | valid instruction_id |         |

##### \*\*perhaps for administrative use

## users

| Type | Endpoint       | Description                        | Protected | Required      | Returns                         |
| ---- | -------------- | ---------------------------------- | --------- | ------------- | ------------------------------- |
| GET  | /api/users/    | Get all Users                      | Yes       | nothing       |                                 |
| GET  | /api/users/:id | Get User by user_id                | Yes       | valid user_id | (nothing returns on invalid id) |
| xPUT | /api/users/:id | Update an existing user by user_id | Yes       | valid user_id |                                 |
| DEL  | /api/users/:id | Remove an existing user by user_id | Yes       | valid user_id |                                 |
