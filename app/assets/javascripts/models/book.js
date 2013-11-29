// for more details see: http://emberjs.com/guides/models/defining-models/

Webdev.Book = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string')
});
