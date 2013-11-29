// For more information see: http://emberjs.com/guides/routing/

Webdev.Router.map(function() {
  this.resource('books', function() {
    this.resource('book', {path: '/:book_id'}, function() {
      this.route('edit');
    });
    this.route('new');
  });
});
