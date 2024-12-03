/**
 * SERVER CODE
 */
const express = require("express");
const path = require("path");

const PORT = 3000;
const publicDir = path.join(__dirname, "public");

const app = express();

app.use(express.static(publicDir));

app.use((req, res) => {
  res.status(404).sendFile(path.join(publicDir, "404.html"));
});

app.listen(PORT, () => {
  console.info(`Server started on http://localhost:${PORT}`);
});
