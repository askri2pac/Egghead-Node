/**
 * Modules dependencies
 */

const config = require("./config"),
  restify = require('restify'),
  mongodb = require('mongodb').MongoClient;

/**
 * initialize server
 */

 const a =1;

const server = restify.createServer({
  name: config.name,
  version: config.version
});

/**
  * Bundled plugins
  */

server.use(restify.jsonBodyParser({ mapParams: true }));
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser({ mapParams: true }));
server.use(restify.fullResponse());

/**
 * lift server, connect to DB & Require Route File
 */

server.listen(config.port, () => {
  // establish connection to MongoAtlas
  mongodb.connect(config.db.uri, (err, db) => {
    if (err) {
      console.log(
        "there was an error while attempting to connect to Database !"
      );
      process.exit(1);
    }
    console.log(
      "%s v%s ready to accept connection on port %s in %s environment",
      server.name,
      config.version,
      config.port,
      config.env
    );

    require("./routes")({ db, server });
  });
});
