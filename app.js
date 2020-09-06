const express  = require('express');
const app = express();

app.get('/', (req,res)  => {
    res.send("Welcome to Home");
    });

app.listen(3000,() => {

    console.log("Wazap");
});

