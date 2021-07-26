const db = require("../data/db-config.js");

const findAll = () => {
  return db("users").select("id", "username", "email");
};

const findById = (id) => {
  return db("users").where("id", id);
};

const findByUsername = (username) => {
  return db("users").where("username", username).first();
};

const add = async (user) => {
  const [newUser] = await db("users").insert(user);
  return newUser;
};

const update = async (user) => {
  const updatedUser = await db("users").update(user, "*");
  return findById(updatedUser.id);
};

const remove = async (id) => {
  const deletedUser = await db("users").where("id", id).del("*");
  return findById(deletedUser.id);
};

module.exports = {
  findAll,
  findById,
  findByUsername,
  add,
  update,
  remove,
};
