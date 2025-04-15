import axios from "axios";
import { BASE_URL } from "../constants.js";

const fetchFromApi = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const fetchAllCountries = async () => {
  return await fetchFromApi();
};
