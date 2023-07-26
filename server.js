const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8090;

app.get("/", (request, response) => {
  console.log("hello");
});

app.listen(PORT, () => `app is listening on ${PORT}`);
