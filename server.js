let express = require("express");
let bodyParser = require("body-parser");
let mongoClient = require("mongodb").MongoClient;
let db = require("./config/db");
let app = express();
let port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
mongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  require("./app/routes/note_routes")(app, {});

  app.listen(port, () => {
    console.log("here we are on port ! " + port);
  });
});
