import { CACHE_TTL } from "./constants.js";
import { cache, Country } from "./types.js";

const cacheData: cache = {};

export const setCache = (key: string, data: Country[]) => {
  cacheData[key] = {
    data,
    expiry: Date.now() + CACHE_TTL,
  };
};

export const getCache = (key: string): Country[] | null => {
  const entry = cacheData[key];
  if (entry && entry.expiry > Date.now()) {
    return entry.data;
  }
  return null;
};
