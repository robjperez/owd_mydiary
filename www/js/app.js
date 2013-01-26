var Entry = Backbone.Model.extend({
	defaults:{
		date: new Date().toLocaleString(),
		body: '',
		title: ''
	},

	initialize: function() {		
	}
});

var EntryList = Backbone.Collection.extend({
	model: Entry
});

var PhotoEntryModel = Entry.extend({
	defaults:{
		photoUrl: null
	},
});

var LocationEntryModel = Entry.extend({
	defaults:{
		latitude: 0.0,
		longitude: 0.0
	},
});

var entryList = new EntryList

var AppView = Backbone.View.extend({
	initialize: function() {
	},

  addOne: function(data) {
    var e = new Entry();
    e.set('date', new Date().toLocaleString());
	  e.set('title', data.title);
	  e.set('body', data.body);
    entryList.add(e);
    var view = new EntryView({model: e});
		$("#entry-list").prepend(view.render().el);
  }
});

var EntryView = Backbone.View.extend({
	tagName: 'li',
	

	initialize: function() {		
	},

	render: function() {		
		this.$el.append(_.template($('#entry-template').html(), this.model.toJSON()));
		return this;
	}
});
