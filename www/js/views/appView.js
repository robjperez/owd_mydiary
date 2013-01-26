var AppView = Backbone.View.extend({
	initialize: function(entryList) {
    this.entryList = entryList;
		for (var i = 0; i < 4; i+=1) {
			var e = new Entry();
			e.set('title', 'entry ' + i);
			e.set('body', 'Test Body');
			entryList.add(e)

			var view = new EntryView({model: entryList.at(i)});
			$("#entry-list").append(view.render().el);
		}
	}
});
