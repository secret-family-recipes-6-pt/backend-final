require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT;

server.get("/api", (req, res) => {
  res
    .status(200)
    .json({
      message: "Hello you wonderful human being! Your server is running",
    });
});

server.listen(port, () => {
  console.log("listening on " + port);
});
