import http from "http";
import express, { Application } from "express";
const configs = require("./src/configs");
const loaders = require("./src/loaders");
// const { run_workers } = require("./workers");

const port = configs.port;

const mode = () => `${configs.debug ? "Debug" : "Production"}`;
const auth_mode = () => `${configs.auth_mode ? "On" : "off"}`;

const onListening = () => {
  console.log(
    `
      ################################################
      🛡️  Server listening on port: ${port} 🛡️
                
              Mode: ${mode()}
              Authorization Mode: ${auth_mode()}
              
              http://localhost:${port}/api/${configs.apiVersion}/
      ################################################
    `
  );
};

const start = async () => {
  console.log("server is starting", `in ${mode()} mode`);

  const app: Application = express();
  const server: http.Server = http.createServer(app);
  await loaders({ expressApp: app, server: server });

  console.log("loaded workers");

  server.on("error", (err: Error) => console.log(err));
  server.on("listening", onListening);
  server.listen(port);
};

start();
