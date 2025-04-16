import axios from "axios";
import { BASE_URL, CACHE_KEY } from "../utils/constants.js";
import { Country, CountryResponse, Filters } from "../utils/types.js";
import { getCache, setCache } from "../utils/cache.js";

const fetchFromApi = async () => {
  const cachedCountries = getCache(CACHE_KEY);
  if (cachedCountries) {
    return cachedCountries;
  }
  const response = await axios.get(BASE_URL);
  const processedResponse = response.data.map((country: CountryResponse) => ({
    name: country.name?.common,
    code: country.cca2,
    capital: country.capital?.[0],
    region: country.region,
    population: country.population,
    timezone: country.timezones?.[0],
    flag: country.flags?.png || country.flags?.svg,
    currency: Object.keys(country.currencies || {})[0],
  }));
  setCache(CACHE_KEY, processedResponse);
  return processedResponse;
};

export const fetchAllCountries = async () => {
  return await fetchFromApi();
};

export const fetchCountryByCode = async (code: string) => {
  const countries = await fetchFromApi();
  return countries.find(
    (country: Country) => country.code.toLowerCase() === code.toLowerCase()
  );
};

export const fetchCountriesByRegion = async (region: string) => {
  const countries = await fetchFromApi();
  return countries.filter(
    (country: Country) => country.region.toLowerCase() === region.toLowerCase()
  );
};

export const filterCountries = async (filters: Filters) => {
  const countries = await fetchFromApi();
  return countries.filter((country: Country) => {
    const matchName = filters.name
      ? country.name?.toLowerCase() === filters.name?.toLowerCase()
      : true;
    const matchCapital = filters.capital
      ? country.capital?.toLowerCase() === filters.capital?.toLowerCase()
      : true;
    const matchRegion = filters.region
      ? country.region?.toLowerCase() === filters.region?.toLowerCase()
      : true;
    const matchTimezone = filters.timezone
      ? country.timezone?.toLowerCase() === filters.timezone?.toLowerCase()
      : true;
    return matchName && matchCapital && matchRegion && matchTimezone;
  });
};
