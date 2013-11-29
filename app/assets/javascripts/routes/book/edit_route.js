// For more information see: http://emberjs.com/guides/routing/

Webdev.BookEditRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('book');
  },

  actions: {
    update: function(book) {
      book.save();
      this.transitionTo('book');
    }
  }
});

