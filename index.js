const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Works Good");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("Server is running on port " + port);
});