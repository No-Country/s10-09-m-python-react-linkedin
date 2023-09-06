const server = require("./src/index");
const { conn } = require("./src/config/db");

// Syncing all the models at once.

conn.sync({ force: false }).then(() => {
  server.listen(3002, () => {
    console.log("%s listening at 3002"); // eslint-disable-line no-console
  });
});
