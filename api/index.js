const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const fs = require("fs");
app.use(cors());
app.use(express.json());

module.exports = app;

const port = process.env.PORT || 3001;

app.get("/api/conditions", (req, res) => {
  fs.readFile(path.resolve(__dirname, "db", "conditions.json"), (err, data) => {
    if (err) {
      res.sendStatus(404, JSON.stringify(err));
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
