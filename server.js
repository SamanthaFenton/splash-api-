const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8090;

app.get("/", (request, response) => {
  response.status(200).json("hello");
});

app.listen(PORT, () => `app is listening on ${PORT}`);

//https://api.unsplash.com/search/photos/?client_id=YOUR_ACCESS_KEY
