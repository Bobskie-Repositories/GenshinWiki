const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();

// Path to genshin.json
const filePath = path.join(__dirname, "src", "genshin.json");

// Enable write operations
const router = jsonServer.router(filePath);

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
    "/blog/:resource/:id/show": "/:resource/:id",
  })
);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

// Export the Server API
module.exports = server;
