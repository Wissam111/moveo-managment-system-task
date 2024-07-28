const database = require("./database");
const expressLoader = require("./express");
module.exports = async ({ expressApp, server }) => {
  await expressLoader({ app: expressApp });
  console.log("express framework loaded");

  // connect to the databases
  await database();

  // const { emit: emitter } = makeSocketIoModel({
  //   server: server,
  //   initalEmitter: {
  //     topic: SOCKET_IO_TOPICS.Dashboard,
  //     getData: async () => await dashboardDb.find()
  //   }
  // });
  // console.log('socket io loaded')
};
