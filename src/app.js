import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello fron Country Data",
  });
});

app.listen(3000, () => {
  console.log(`app listening to port 3000`);
});
