const express = require('express')
const users = require("./src/users");
const companies = require("./src/companies");
const app = express()
const port = 3000



const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(allowCrossDomain);

app.get('/companies', (req, res) => {
    const companies = require("./src/companies")
    res.send(JSON.stringify(companies))
})

app.get('/', (req, res) => {
    const users = require("./src/users")
    res.send(JSON.stringify(users))
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})