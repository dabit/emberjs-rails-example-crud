// For more information see: http://emberjs.com/guides/routing/

Webdev.BooksRoute = Ember.Route.extend({
  model: function() {
    this.store.find('book');
    return this.store.filter('book', function(book) {
      return !book.get('isNew');
    });
  },
  actions: {
    delete: function(book) {
      book.destroyRecord();
    }
  }
});
