import request from "supertest";
import app from "../app.js";

describe("Countries API test", () => {
  test("GET /countries - should return all countries", async () => {
    const response = await request(app).get("/countries");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
  test("GET /countries - should cache results", async () => {
    const firstResponse = await request(app).get("/countries");
    const secondResponse = await request(app).get("/countries");
    expect(secondResponse.body).toEqual(firstResponse.body);
  });

  test("GET /countries/:code - should return country by valid code", async () => {
    const response = await request(app).get("/countries/IN");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("name");
    expect(response.body.code).toBe("IN");
  });
  test("GET /countries/:code - should return 404 for invalid code", async () => {
    const response = await request(app).get("/countries/ABC");
    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: "Country not found" });
  });

  test("GET /countries/region/:region - should return countries by valid region", async () => {
    const response = await request(app).get("/countries/region/asia");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
  test("GET /countries/region/:region - should return 404 for invalid region", async () => {
    const response = await request(app).get("/countries/region/ABC");
    expect(response.status).toBe(404);
    expect(response.body).toEqual({
      error: "Countries with given region not found",
    });
  });

  test("GET /countries/search - should return countries based on valid filters", async () => {
    const response = await request(app).get(
      "/countries/search?capital=New Delhi"
    );
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0]).toHaveProperty("name", "India");
  });
  test("GET /countries/search - should return empty array for no matches", async () => {
    const response = await request(app).get("/countries/search?name=ABC");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
});
