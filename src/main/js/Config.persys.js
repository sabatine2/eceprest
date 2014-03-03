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
						url: "/ordem/baseconhecimento",
						method: "POST",
<<<<<<< Upstream, based on origin/modificacoes_interface
						result:"{\"data\":[{\"id\":\"1\",\"codigo\":\"PPRO0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"Home Advanced 1Mbps\"}",
						returns: "{\"data\":[{\"id\":\"1\",\"codigo\":\"PPRO0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"OLHA ISSO\"}",
						description: "Criação de uma base de conhecimento",
=======
						
						result:"{\"statusModel\": \"1\",\"permitidoExcluir\": \"true\",\"permitidoAlterar\": \"true\",\"titulo\": \"TITULO DA BASE DE CONHECIMENTO\",\"tipo\": \"Interno\",\"mensagem\": \"DESCRICAO DA BASE DE CONHECIMENTO\"}",
						description: "Ao utilizar o metodo POST na URL acima, em conjunto com os campos abaixo, uma nova base de conhecimento e criada.",
						params: [
									{
										name: "statusModel",
										description: "Status da Base de Conhecimento.",
										type: "int",
										required: "true",
									},
									{
										name: "permitidoExcluir",
										description: "Flag que determina se a Base de Conhecimento pode ser excluida.",
										type: "boolean",
										required: "true",
									},
									{
										name: "permitidoAlterar",
										description: "Flag que determina se a Base de Conhecimento pode ser alterada.",
										type: "boolean",
										required: "true",
									},
									{
										name: "titulo",
										description: "Titulo da base de conhecimento.",
										type: "char",
										required: "true",
									},
									{
										name: "tipo",
										description: "Tipo da base de conhecimento.",
										type: "char",
										required: "true",
									},
									{
										name: "mensagem",
										description: "Mensagem contida na base de conhecimento.",
										type: "char",
										required: "true",
									}
								]
>>>>>>> e34be5f Rebased
					},
					{
						label: "Listar",
						url: "/ordem/baseconhecimento",
						method: "GET",
						result: "{\"data\":[{\"id\":\"1\",\"codigo\":\"PBSC0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"Cabo de Rede Externa Rompido Externo\",\"tipo\":\"Interno\"},{\"id\":\"2\",\"codigo\":\"PBSC1\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"Cabo de Rede Interna Rompido \",\"tipo\":\"Externo\"}],\"paging\":{\"@numberPages\":\"1\",\"@number\":\"15\",\"@page\":\"1\",\"@type\":\"application/json\"}}",
						description: "Listar todas as bases de conhecimento cadastradas. Podem ser utilizados os seguintes filtros:",
						params: [
							{
								
								name: "since",
								description: "Filtrar pela data da ultima alteracao da Base de Conhecimento. Formato dd/mm/yyy.",
								type: "timestamp",
							},
							{
								name: "offset",
								description: "Filtrar a partir do numero de um resultado especifico.",
								type: "int",
							},
							{
								name: "limit",
								description: "Limitar o numero de resultados buscados.",
								type: "int",
							},
							{
								name: "status",
								description: "Filtrar pelo status da Base de Conhecimento.",
								type: "int",
							}
						]
					},
					{
						label: "Pesquisa por ID",
						url: "/produto/{id}",
						method: "GET",
<<<<<<< Upstream, based on origin/modificacoes_interface
						description: "List",
						returns: "{\"data\":[{\"id\":\"1\",\"codigo\":\"PPRO0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"OLHA ISSO\"}",
=======
						description: "Pesquisar uma base de conhecimento a partir do seu ID",
						returns: "{\"data\":[{\"id\":\"1\",\"codigo\":\"PPRO0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"OLHA ESSA PORRA CARA\"}",
>>>>>>> e34be5f Rebased
						params: [
							{
								name: "id",
								description: "Identificador da base de conhecimento",
								type: "long"
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
