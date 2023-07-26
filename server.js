const express = require("express");
const cors = require("cors");
const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());

const PORT = process.env.PORT || 8090;

app.get("/", (request, response)=>{
  response.status(200).json("hello");
});

app.get("/photos", async (request, response)=>{
    const API = `https://api.unsplash.com/search/photos/?client_id=${process.env.ACCESS_KEY}&query=sam`;
    const response = await axios.get(API);
    console.log(response.addTrailers.results[0].url.regular);
    response.status(200).json("testing");
    const photos = res.data.results.map(photos)=>{
        return{
            id: photos.id,
            img_url:photos.url.regular,
            original_image: photos.links.self,
            photographer: photos.user.name,
        }
        };
        response.status(200).json(photos);
    });

})

app.listen(PORT, ()=>(`app is listening on ${PORT}`));

//https://api.unsplash.com/search/photos/?client_id=YOUR_ACCESS_KEY
