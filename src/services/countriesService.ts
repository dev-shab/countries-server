import axios from "axios";
import { BASE_URL } from "../constants.js";
import { Country, CountryResponse } from "../types.js";

const fetchFromApi = async () => {
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
