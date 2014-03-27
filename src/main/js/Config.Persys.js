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
				label: "401 - Unauthorized",
				description: "Unauthorized. You need to be logged in."
			},
			{
				label: "403 - Forbidden",
				description: "Forbidden. You don't have permission to access this content."
			},
			{
				label: "405 - Method Not Allowed",
				description: "Method Not Allowed: The method specified in the Request-Line is not allowed for the resource identified by the Request-URI."
			}
		],

	};

	return Config;

});
