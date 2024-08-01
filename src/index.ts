/**
 * App entry point
 */

import app from "./app";
import config from "./config/config";
import dataSource from "./datasource";
import mongo from "./mongo";
import setSerializing from "./passport/index";
import websocket from "./websocket";

// Database
dataSource
  .initialize()
  .then(() => console.log("[DB] Init successfully"))
  .catch((error) => console.error("[DB] Init error: ", error));

// MongoDB
mongo.connect();

// Passport
setSerializing();

const httpServer = app.listen(config.HTTP_PORT, () => {
  console.log(`[HTTP] Server listening: ${config.HTTP_PORT}`);
});

websocket(httpServer);
