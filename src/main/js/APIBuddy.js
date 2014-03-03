define([
	"Config.persys",
	//"Config2.persys",
	"routers/AppRouter",
	"views/EndpointsView",
	"views/TryingView",
	"controllers/GroupsController",
	"controllers/ParamsController",
	"controllers/ErrorsController",
	"helpers/BackboneHelpers"
],function(Config, /*Config2,*/ AppRouter, EndpointsView, TryingView, GroupsController, ParamsController, ErrorsController, BackboneHelpers) {

	window.APIBuddy = {

		router: null,

		start: function() {

			// Register Config globally, to make it easier to access 
			window.Config = Config;

			// Parse config data
			GroupsController.parseGroups( Config.groups );
			ParamsController.parseGlobalParams( Config.globalParams );
			ErrorsController.parseGlobalErrors( Config.globalErrors );
			
			// Register Config globally, to make it easier to access 
			// window.Config2 = Config2;

			// Parse config data
			// GroupsController.parseGroups( Config2.groups );
			// ParamsController.parseGlobalParams( Config2.globalParams );
			// ErrorsController.parseGlobalErrors( Config2.globalErrors );

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
