# Base URL: https://secret-family-recipes6.herokuapp.com

## Login and Register

| Type | Endpoint           | Description         | Protected | Required                  |
| ---- | ------------------ | ------------------- | --------- | ------------------------- |
| POST | /api/auth/register | Create new user     | No        | username, password, email |
| POST | /api/auth/login    | Login existing user | No        | username, password        |

### Token is required for all endpoints listed below

## recipes

| Type | Endpoint              | Description                                 | Protected | Required   | Error returns|
| ---- | --------------------- | ------------------------------------------- | --------- | -----------| ------------------------------------ |
| GET  | /api/recipes/user/:id | Fetch all Recipes by user_id                | Yes       | valid user_id | (empty array if user_id invalid)|
| GET  | /api/recipes/:id      | Fetch one Recipe by recipe_id               | Yes       | valid recipe_id  | (server error if id invalid) |
| POST | /api/recipes/user/:id | Add a new user Recipe by user_id            | Yes       | valid user_id, recipe_name | (server error if id invalid)|
| POST | /api/recipes/:id/inst | Add an Instruction to a Recipe by recipe_id | Yes       | valid recipe_id | (server error if id invalid) |
| POST | /api/recipes/:id/ing  | Add an ingredient to a Recipe by recipe_id  | Yes       | valid recipe_id, ingredient_name | (server error if id invalid) |
| PUT  | /api/recipes/:id      | Update a Recipe by recipe_id                | Yes       | valid recipe_id, recipe_name | (server error if id invalid) |
| DEL  | /api/recipes/:id      | Delete a Recipe by recipe_id                | Yes       | valid recipe_id | (nothing returns on invalid id)|

## ingredients

| Type | Endpoint     | Description                                    | Protected | Required            | Error returns |
| ---- | ------------ | ---------------------------------------------- | --------- | ------------------- | ------------------------------- |
| GET  | /api/ing/:id | Get an Ingredient by ingredient_id             | Yes       | valid ingredient_id | (nothing returns on invalid id) |
| PUT  | /api/ing/:id | Update an existing Ingredient by ingredient_id | Yes       | valid ingredient_id | (server error if id invalid)    |
| DEL  | /api/ing/:id | Remove an existing Ingredient by ingredient_id | Yes       | valid ingredient_id | (server error if id invalid)    |

## instructions

| Type | Endpoint      | Description                                      | Protected | Required             | Error returns |
| ---- | ------------- | ------------------------------------------------ | --------- | -------------------- | ------------------------------- |
| GET  | /api/inst/:id | Get an existing Instruction by instruction_id    | Yes       | valid instruction_id | (nothing returns on invalid id) |
| PUT  | /api/inst/:id | Update an existing Instruction by instruction_id | Yes       | valid instruction_id | (server error if id invalid)    |
| DEL  | /api/inst/:id | Remove an existing Instruction by instruction_id | Yes       | valid instruction_id | (nothing returns on invalid id) |

##### \*\*perhaps for administrative use

## users

| Type | Endpoint       | Description                               | Protected | Required      | Error returns |
| ---- | -------------- | ----------------------------------------- | --------- | ------------- | -------------------------------- |
| GET  | /api/users/    | Get all Users                             | Yes       | nothing       |
| GET  | /api/users/:id | Get all Users by user_id                  | Yes       | valid user_id | (nothing returns on invalid id)  |
| xPUT | /api/users/:id | Update an existing user by user_id | Yes       | valid user_id |
| DEL  | /api/users/:id | Remove an existing user by user_id | Yes       | valid user_id | (empty array if user_id invalid) |
