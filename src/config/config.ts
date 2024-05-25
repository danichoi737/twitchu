/**
 * Environment file typing module
 */

import "dotenv/config";

interface ENV {
  COOKIE_SECRET: string | undefined;
  CRYPTO_ITERATIONS: number | undefined;
  HTTP_PORT: number | undefined;
}

interface Config {
  COOKIE_SECRET: string;
  CRYPTO_ITERATIONS: number;
  HTTP_PORT: number;
}

function getConfig(): ENV {
  return {
    COOKIE_SECRET: process.env.COOKIE_SECRET ? String(process.env.COOKIE_SECRET) : undefined,
    CRYPTO_ITERATIONS: process.env.CRYPTO_ITERATIONS ? Number(process.env.CRYPTO_ITERATIONS) : undefined,
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
