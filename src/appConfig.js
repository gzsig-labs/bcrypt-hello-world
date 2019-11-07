const express = require('express');
const app = express();
const hbs = require('hbs');
const viewsPath = `${__dirname}/views`;
const session    = require("express-session");
const mongoose = require('mongoose');
const MongoStore = require("connect-mongo")(session);
const {router} = require('./routes')

app.use(express.static(`${__dirname}/public`));
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(`${viewsPath}/components`)

app.use(session({
  secret: "basic-auth-secret",
  cookie: { maxAge: 60000 },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  })
}));

app.use(router)

module.exports = app;