const mongoose = require('mongoose');
const {Schema} = mongoose;

const definition = {
  Title: String
}

const pageSchema = new Schema(definition);
const PageModel = mongoose.model('Page', pageSchema);
module.exports = PageModel;