import { Response, Request } from "express";
import {
  fetchAllCountries,
  fetchCountriesByRegion,
  fetchCountryByCode,
  filterCountries,
} from "../services/countriesService.js";

export const getAllCountries = async (req: Request, res: Response) => {
  try {
    const countries = await fetchAllCountries();
    res.status(200).json(countries);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCountryByCode = async (req: Request, res: Response) => {
  try {
    const { code } = req.params;
    const country = await fetchCountryByCode(code);
    if (!country) {
      res.status(404).json({
        error: "Country not found",
      });
    } else {
      res.status(200).json(country);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCountriesByRegion = async (req: Request, res: Response) => {
  try {
    const { region } = req.params;
    const countries = await fetchCountriesByRegion(region);
    if (!countries.length) {
      res.status(404).json({
        error: "Countries with given region not found",
      });
    } else {
      res.status(200).json(countries);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const searchCountries = async (req: Request, res: Response) => {
  try {
    const filters = {
      name: req.query.name,
      capital: req.query.capital,
      region: req.query.region,
      timezone: req.query.timezone,
    };
    const results = await filterCountries(JSON.parse(JSON.stringify(filters)));
    res.status(200).json(results);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
