define(function(){

	var Config = {

		url: "http://localhost:8080/OsManagerWeb/api",
		
		groups: window.configGroups,
		
		traditionalSerialization: true,

		globalErrors: [
			{
				label: "400 - Bad Request",
				description: "Malformed request: the request you attempted to make, was not identified from the server."
			},
			{
				label: "403 - Forbidden",
				description: "Forbidden. You don't have permission to access this content."
			},
			{
				label: "401 - Unauthorized",
				description: "Unauthorized. You need to be logged in."
			}
		],

	};

	return Config;

});
