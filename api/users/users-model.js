const db = require("../data/db-config.js");

const findAll = () => {
  return db("users").select("id", "username", "email");
};

const findById = (id) => {
  return db("users").where("id", id).first();
};
// .select("id", "username", "email")

const findByUsername = (username) => {
  return db("users").where("username", username).first();
};

const add = async (user) => {
  const [newUser] = await db("users").insert(user, "*");
  return newUser;
};

const update = async (id, user) => {
  const [updatedUser] = await db("users").where("id", id).update(user, "*");
  return updatedUser;
};

const remove = async (id) => {
  return db("users").where("id", id).del("*");
};

module.exports = {
  findAll,
  findById,
  findByUsername,
  add,
  update,
  remove,
};
