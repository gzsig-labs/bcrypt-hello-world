const express = require('express');
const app = express();
const hbs = require('hbs');
const viewsPath = `${__dirname}/views`;

const {router} = require('./routes')

app.use(express.static(`${__dirname}/public`));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(`${viewsPath}/components`)

app.use(router)

module.exports = app;