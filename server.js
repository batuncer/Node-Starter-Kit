const express = require("express");
const app = express();
const axios = require("axios");
const port = 3002;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/multiply", function (req, res) {
  let value1 = 5;
  let value2 = 4;
  let result = value1*value2
  res.json(result);
});

app.get("/node", (req, res) => {
  // for the location
  const latitude = 51.5311;
  const longitude = 0.0481;


  axios
    .get(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`)
    .then((response) => {
      // Extract the sunrise and sunset data from the API response
      const { sunrise, sunset } = response.data.results;

      // Send the sunrise and sunset data as the response to the client
      res.json({ sunrise, sunset });
    })
    .catch((error) => {
      console.error("Error fetching data from API:", error);
      res.status(500).json({ error: "Error fetching data from API" });
    });
});

app.get("/json", function (req, res) {
  let lat = req.query.lat;
  let lng = req.query.lng;
  res.send(`You searched for Lat: ${lat} and Lng: ${lng}`);
});