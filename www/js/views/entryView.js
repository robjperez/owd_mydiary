var EntryView = Backbone.View.extend({
	tagName: 'li',
	

	initialize: function() {		
	},

	render: function() {		
		this.$el.append(_.template($('#entry-template').html(), this.model.toJSON()));
		return this;
	}
});