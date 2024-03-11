/**
 * Environment file typing module
 */

import "dotenv/config";

interface ENV {
  HTTP_PORT: number | undefined;
}

interface Config {
  HTTP_PORT: number;
}

function getConfig(): ENV {
  return {
    HTTP_PORT: process.env.HTTP_PORT ? Number(process.env.HTTP_PORT) : undefined,
  };
}

function getSanitzedConfig(config: ENV): Config {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`[CONFIG] Missing key: ${key}`);
    }
  }
  return config as Config;
}

const sanitizedConfig = getSanitzedConfig(getConfig());
export default sanitizedConfig;
