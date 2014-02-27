define(function(){

	var Config = {

		url: "http://localhost:8080/OsManagerWeb/api",
		
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

		groups: [
			// SignUp API 
			{
				name: "Produto",
				endpoints: [
					{
						label: "Geral",
						url: "/produto",
						method: "POST, GET, PUT, DELETE",
						description: "Os campos são",
						params: [
							{
								name: "Id",
								description: "Identifiador do produto",
								multiValue: false
							},
							{
								name: "Nome",
								description: "Nome do produto",
								multiValue: false
							},
							{
								name: "Descrição",
								description: "Descrição do produto",
								multiValue: false
							},
							{
								name: "Marca",
								description: "Marca do produto",
								multiValue: false
							},
							{
								name: "Código de Barra",
								description: "Código do produto",
								multiValue: false
							}
						]
					},
					{
						label: "Incluir",
						url: "/produto",
						method: "POST",
						result:"{\"data\":[{\"id\":\"1\",\"codigo\":\"PPRO0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"Home Advanced 1Mbps\"}",
						description: "Criação de uma base de conhecimento",
					},
					{
						label: "Lista",
						url: "/produto",
						method: "GET",
						description: "List",
						params: [
							{
								name: "offset",
								description: "Identifiador do produto",
								multiValue: false
							},
							{
								name: "limit",
								description: "Nome do produto",
								multiValue: false
							},
							{
								name: "since",
								description: "Descrição do produto",
								multiValue: false
							}
						]
					},
					{
						label: "Pesquisa por ID",
						url: "/produto/{id}",
						method: "GET",
						description: "List",
						params: [
							{
								name: "id",
								description: "Identifiador do produto",
								multiValue: false
							}
						]
					},
					{
						label: "Alterar por ID",
						url: "/produto/{id}",
						method: "PUT",
						description: "Alterar...",
						params: [
							{
								name: "id",
								description: "Identifiador do produto",
								multiValue: false
							}
						]
					},
					{
						label: "Remover por ID",
						url: "/produto/{id}",
						method: "DELETE",
						description: "Remover...",
						params: [
							{
								name: "id",
								description: "Identifiador do produto",
								multiValue: false
							}
						]
					}
				]
			}
	     ]

	};

	return Config;

});
