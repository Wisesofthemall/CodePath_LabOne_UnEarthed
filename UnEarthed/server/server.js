import express from "express";

const app = express();
app.use("/public", express.static("./public"));
app.use("/scripts", express.static("./public/scripts"));
app.get("/", (req, res) => {
  res.status(200).send('<h1 style="text-align: center"> UnEarthed API </h1>');
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log("listening on port 3001");
});
