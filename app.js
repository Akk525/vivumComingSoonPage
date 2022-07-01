const express = require("express");
const app = express();

app.listen(process.env.PORT || 3000, function() {
    console.log("Server running on port 3000.");
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/failure", function(req, res) {
    res.redirect("/");
});