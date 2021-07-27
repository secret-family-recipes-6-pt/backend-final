require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

// ROUTERS
const UsersRouter = require("./users/users-router.js");
const RecipesRouter = require("./recipes/recipes-router.js");
const AuthRouter = require("./auth/auth-router.js");
const IngredientsRouter = require("./ingredients/ingredients-router.js");
const InstructionsRouter = require("./instructions/instructions-router.js");
// const { restricted } = require("./middleware.js");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());

// ENDPOINTS
server.use("/api/auth", AuthRouter);
server.use("/api/users", /*restricted,*/ UsersRouter);
server.use("/api/recipes", /*restricted,*/ RecipesRouter);
server.use("/api/ing", /*restricted,*/ IngredientsRouter);
server.use("/api/inst", /*restricted,*/ InstructionsRouter);

// CATCH ALL
// server.use((err, req, res) => {
//   res.status(err.status || 500).json({
//     message: err.message,
//     stack: err.stack,
//   });
// });

module.exports = server;

/*
function getAllUsers() { return db('users') }

async function insertUser(user) {
  // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
  // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
  // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
  return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
}
*/
