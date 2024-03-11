/**
 * App entry point
 */

import app from "./app";
import config from "./config/config";

app.listen(config.HTTP_PORT, () => {
  console.log(`[HTTP] Server listening: ${config.HTTP_PORT}`);
});
