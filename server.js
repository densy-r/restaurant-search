const express = require("express");
const app = express();
const db = require("./db");
const searchRouter = require("./routes/search");

require("dotenv").config();

require("./seed");

app.get("/", (req, res) => {
  res.send("Restaurant Search API is running!");
});

app.use('/search', searchRouter);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));