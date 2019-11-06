require('dotenv').config();
const {PORT} = process.env;
const app = require('./appConfig.js');
const mongoose = require('mongoose')

mongoose
  .connect('mongodb://localhost/appName', {useNewUrlParser: true})
  .then(db => {
    console.log(`Connected to Mongo! Database name: "${db.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`App running on port: ${PORT}`)
});

