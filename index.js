const express = require("express");

const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
})


app.get("/", (req, res) => {
    res.send("This is a root path");
})

app.get("/help", (req, res) => {
    res.send("this is a help path");
})

app.get("/:username", (req, res) => {
    let {username} = req.params;
    res.send(`Hi! I am ${username}`);

})