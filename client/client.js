Meteor.subscribe('allStuff');

Router.configure({
	layoutTemplate: "layout"
});

Router.map(function() {
	this.route('home', {
		path: '/',
		template: 'home'
	});
});
