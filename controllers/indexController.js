const controller = {
  index: (req, res) => {
    res.render("home", {title: 'home'})
  },
  error404: (req, res) => {
    res.render('error', {title: 'error'})
  },
  register: (req, res) => {
    res.render('register', {title: 'register'})
  }
}

module.exports = controller;