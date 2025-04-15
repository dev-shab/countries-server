import { Response, Request } from "express";
import {
  fetchAllCountries,
  fetchCountryByCode,
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
