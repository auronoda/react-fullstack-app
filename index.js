const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send({Hi: "there again"});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("started");
});