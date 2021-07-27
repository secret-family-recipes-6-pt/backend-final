require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT;

server.get("/api", (req, res) => {
  res.send(process.env.TEST_ENV_VARIABLE);
});

server.listen(port, () => {
  console.log("listening on " + port);
});
