const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const log4js = require('log4js');
const path = require('path');
const routes = require('./routes/v1/index_route')
const defaultRoute = require('./routes/index')
//const db = require('./dbConnection/dbConnection')

const port = process.env.PORT || 8080; // set the port

app.use(express.json());
app.use(express.static("client"));
app.use(cors());
app.use(bodyParser.json());
app.use("/api/v1", routes);
//app.use("/", defaultRoute);

app.listen(port, () => console.log(`listen port ${port}`));


