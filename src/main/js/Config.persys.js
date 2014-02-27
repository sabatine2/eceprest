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
				name: "Base de Conhecimento",
				endpoints: [
					{
						label: "Geral",
						url: "/ordem/baseconhecimento",
						method: "POST, GET, PUT, DELETE",
						description: "Os campos que podem ser acessados na URL /ordem/baseconhecimento sao os seguintes:",
						params: [
							{
								name: "id",
								description: "Identificador da Base de conhecimento.",
								type: "long",
							},
							{
								name: "codigo",
								description: "Codigo da Base de Conhecimento.",
								type: "char",
							},
							{
								name: "dataCriacao",
								description: "Data em que a base de conhecimento foi criada.",
								type: "UNIX timestamp"
								
							},
							{
								name: "dataAlteracao",
								description: "Data da ultima alteracao da base de conhecimento.",
								type: "UNIX timestamp"
							},
							{
								name: "statusModel",
								description: "Status da Base de Conhecimento.",
								type: "int"
							},
							{
								name: "permitidoExcluir",
								description: "Flag que determina se a Base de Conhecimento pode ser excluida.",
								type: "boolean"
							},
							{
								name: "permitidoAlterar",
								description: "Flag que determina se a Base de Conhecimento pode ser alterada.",
								type: "boolean"
							},
							{
								name: "titulo",
								description: "Titulo da base de conhecimento.",
								type: "char"
							},
							{
								name: "tipo",
								description: "Tipo da base de conhecimento.",
								type: "char"
							},
							{
								name: "mensagem",
								description: "Mensagem contida na base de conhecimento.",
								type: "char"
							}
						]
					},
					{
						label: "Incluir",
						url: "/produto",
						method: "POST",
						result:"{\"data\":[{\"id\":\"1\",\"codigo\":\"PPRO0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"Home Advanced 1Mbps\"}",
						returns: "{\"data\":[{\"id\":\"1\",\"codigo\":\"PPRO0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"OLHA ISSO\"}",
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
						returns: "{\"data\":[{\"id\":\"1\",\"codigo\":\"PPRO0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"OLHA ISSO\"}",
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
