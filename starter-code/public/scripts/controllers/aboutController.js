'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};

  // DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // routes.js calls aboutController.index on the /about page. This sets up the about page with some jquery show/hides, and then calls app.repos.requestRepos from repo.js, which gathers the gitHub repos objects and applies repoView.index as a callback.
  aboutController.index = () => {
    $('#about').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.aboutController = aboutController;
})(app);
