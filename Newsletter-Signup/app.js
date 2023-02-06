const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.user(bodyParser.urlencoded({extended: true}));

app.listen(3000, function() {
    console.log("Server started on port 3000");
});
