var Entry = Backbone.Model.extend({
	defaults:{
		date: Date.now(),
		body: '',
		title: ''
	},

	initialize: function() {		
	}
});

var EntryList = Backbone.Collection.extend({
	model: Entry
});
