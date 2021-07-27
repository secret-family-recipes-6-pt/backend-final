# Base URL: https://secret-family-recipes6.herokuapp.com

## Login and Register 
| Type      | Endpoint           | Description          | Protected |
| ------    | ----------------   | ------------------   | ----------|
| POST      | /api/auth/register | Create new user      | No              
| POST      | /api/auth/login    | Login existing user  | No           

### Token is required for all endpoints listed below

## recipes
| Type      | Endpoint                      | Description                     | Protected|
| ------    | ----------------              | ------------------------        | ---------|
|GET	    |/api/recipes/user/:id	        | Fetch all Recipes by user_id	                |Yes
|GET	    |/api/recipes/:id	            | Fetch one Recipe by recipe_id	                |Yes
|POST   	|/api/recipes/user/:id	        | Add a new user Recipe by user_id	            |Yes
|POST	    |/api/recipes/:id/instructions	|Add an Instruction to a Recipe by recipe_id	|Yes
|POST	    |/api/recipes/:id/ingredients	|Add an ingredient to a Recipe by recipe_id	    |Yes
|PUT	    |/api/recipes/:id	            |Update a Recipe by recipe_id	                |Yes
|DEL	    |/api/recipes/:id	            |Delete a Recipe by recipe_id	                |Yes

## ingredients
| Type   | Endpoint         | Description                     | Protected                       |
| ------ | ---------------- | ------------------------        | ----------------------------- |
|GET	|/api/ingredients/:id	|Get an Ingredient by ingredient_id	                |Yes
|PUT	|/api/ingredients/:id	|Update an existing Ingredient by ingredient_id	    |Yes
|DEL	|/api/ingredients/:id	|Remove an existing Ingredient by ingredient_id	    |Yes

## instructions
| Type   | Endpoint         | Description                     | Protected                       |
| ------ | ---------------- | ------------------------        | ----------------------------- |
|PUT	|/api/instructions/:id	|Update an existing Instruction by instruction_id	|Yes
|DEL	|/api/instructions/:id	|Remove an existing Instruction by instruction_id	|Yes
|GET	|/api/instructions/:id	|Get an existing Instruction by instruction_id	    |Yes

##### **perhaps for administrative use
## users 

| Type   | Endpoint         | Description                     | Protected                       |
| ------ | ---------------- | ------------------------        | ----------------------------- |
|GET	|/api/users/	        |Get all Users	                            |Yes
|GET	|/api/users/:id	|       Get all Users by user_id	                |Yes
|GET	|/api/users/:username	|Get all Users by username	                |Yes
|PUT	|/api/users/:id	        |Update an existing Instruction by user_id	|Yes
|DEL	|/api/users/:id	        |Remove an existing Instruction by user_id	|Yes

## Requirements by endpoint

