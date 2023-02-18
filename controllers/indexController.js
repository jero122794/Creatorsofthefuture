const controller = {
  index: (req, res) => {
    res.render("home", {title: 'home'})
  },
  error404: (req, res) => {
    res.render('error', {title: 'error'})
  }
}

module.exports = controller;