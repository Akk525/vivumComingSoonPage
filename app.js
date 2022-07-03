const express = require("express");
const app = express();

app.listen(process.env.PORT || 3000, function() {
    console.log("Server running.");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});