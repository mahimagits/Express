const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/ig/:username", (req, res) => {
    let 
    const instaData = require("./data.json");
    res.render("instagram.ejs", {data: instaData});
})

app.get("/rollDice", (req, res) => {
    let num = Math.floor(Math.random() * 6) + 1;
    res.render("rollDice.ejs", {num});
})

app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
})