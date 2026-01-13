const express = require("express");

const app = express();

let port = 3000;

app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
})


app.get("/", (req, res) => {
    res.send("You contacted root path");
})

app.get("/search", (req, res) => {
    res.send("You contacted search path");
})

app.get("/help", (req, res) => {
    res.send("You contacted help path");
})

app.get("*", (req, res) => {
    res.send("This is not a path"); //Any other path than the above mentioned path
})

// app.use((req, res) => {
//     console.log("request received");
//     let code = "<h1>Fruits</h1><ul><li>apple</li><li>banana</li><li>orange</li></ul>";
//     res.send(code);
// })