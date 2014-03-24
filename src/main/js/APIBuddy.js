define([
	"Config.persys",
	"routers/AppRouter",
	"views/EndpointsView",
	"views/TryingView",
	"controllers/GroupsController",
	"controllers/ParamsController",
	"controllers/ErrorsController",
	"helpers/BackboneHelpers"
],function(Config, AppRouter, EndpointsView, TryingView, GroupsController, ParamsController, ErrorsController, BackboneHelpers) {

	window.APIBuddy = {

		router: null,

		start: function() {

			// Register Config globally, to make it easier to access 
			window.Config = Config;

			// Parse config data
			GroupsController.parseGroups( Config.groups );
			ParamsController.parseGlobalParams( Config.globalParams );
			ErrorsController.parseGlobalErrors( Config.globalErrors );
			
			// Init views
			new TryingView();
			new EndpointsView().render();

			// Start history manager
			this.router = new AppRouter();
			Backbone.history.start();
		}

	};

	_.extend(APIBuddy, Backbone.Events);

	return APIBuddy;

});
