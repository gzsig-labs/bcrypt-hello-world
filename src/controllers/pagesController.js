const {PageModel} = require('../models')

const PageHome =  (req, res) => {
  res.render('pages/home', "")
};


module.exports = {
  PageHome
}