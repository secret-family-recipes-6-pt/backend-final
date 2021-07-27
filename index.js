require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT;

server.get("/api", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

server.listen(port, () => {
  console.log("listening on " + port);
});
