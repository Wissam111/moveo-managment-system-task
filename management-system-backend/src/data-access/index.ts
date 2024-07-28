const { connect, default: mongoose } = require("mongoose");
const configs = require("../configs");

import { makeTaskDb } from "./task-db";
import { makeProjectDb } from "./project-db";


// connect to the database if it's not already connected
const makeDb = async () => {
  if (!configs.databaseURL) {
    throw new Error("databaseURL is required as an Environment variable");
  }
  if (mongoose.connection.readyState !== 1) {
    console.log("connecting to database");
    await connect(configs.databaseURL);
  }
};


// create the repositories
const projectDb = makeProjectDb({ makeDb });
const taskDb = makeTaskDb({ makeDb });

module.exports = {
  projectDb,
  taskDb,
  makeDb,
};
