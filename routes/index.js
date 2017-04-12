module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/posts');
  });

  app.use('/reg', require('./signup'));
  app.use('/login', require('./signin'));
  app.use('/signout', require('./signout'));
  app.use('/posts', require('./posts'));
  // 404 page
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.status(404).render('404');
    }
  });
};
