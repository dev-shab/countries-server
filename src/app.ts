import express from "express";
import countriesRouter from "./routes/countriesRoutes.js";

const app = express();

app.use("/countries", countriesRouter);

app.listen(3000, () => {
  console.log(`app listening to port 3000`);
});

export default app;
