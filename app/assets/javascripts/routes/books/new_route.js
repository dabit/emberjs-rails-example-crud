// For more information see: http://emberjs.com/guides/routing/

Webdev.BooksNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('book');
  },

  actions: {
    create: function(book) {
      book.save();
    }
  }
});
