'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  // DONE: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // callback function from repos.requestRepos. assembles the UI with ui(). applies the 'with()' method on app.repos to 'reduce' the results to those with property 'name'. I wonder why we're using 'with' here and not 'reduce'? each item is passed to 'render()' / handlebars to each item. map() implicitly returns on each item
  repoView.index = function() {
    ui();
    $('#about ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
