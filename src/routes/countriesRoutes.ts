import express from "express";
import {
  getAllCountries,
  getCountriesByRegion,
  getCountryByCode,
  searchCountries,
} from "../controller/countriesController.js";

const router = express.Router();

router.get("/", getAllCountries);
router.get("/search", searchCountries);
router.get("/:code", getCountryByCode);
router.get("/region/:region", getCountriesByRegion);

export default router;
