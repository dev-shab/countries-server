import express from "express";
import {
  getAllCountries,
  getCountryByCode,
} from "../controller/countriesController.js";

const router = express.Router();

router.get("/", getAllCountries);
router.get("/:code", getCountryByCode);

export default router;
