/**
 * App entry point
 */

import app from "./app";
import config from "./config/config";
import database from "./models/index";
import setSerializing from "./passport/index";

// Database
database.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("[DB] Synced successfully");
  })
  .catch((error) => {
    console.error("[DB] Sync error: ", error);
  });

// Passport
setSerializing();

app.listen(config.HTTP_PORT, () => {
  console.log(`[HTTP] Server listening: ${config.HTTP_PORT}`);
});
