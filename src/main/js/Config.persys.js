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
						description: "Os campos que podem ser acessados na URL /ordem/baseconhecimento são os seguintes:",
						params: [
							{
								name: "id",
								description: "Identificador da Base de conhecimento.",
								type: "long",
							},
							{
								name: "codigo",
								description: "Código da Base de Conhecimento.",
								type: "string [255]",
							},
							{
								name: "dataCriacao",
								description: "Data em que a base de conhecimento foi criada.",
								type: "long [UNIX timestamp]"
								
							},
							{
								name: "dataAlteracao",
								description: "Data da última alteração da base de conhecimento.",
								type: "long [UNIX timestamp]"
							},
							{
								name: "statusModel",
								description: "Status da Base de Conhecimento.",
								type: "int",
								insert: true,
							},
							{
								name: "permitidoExcluir",
								description: "Flag que determina se a Base de Conhecimento pode ser excluída.",
								type: "boolean",
								insert: true,
							},
							{
								name: "permitidoAlterar",
								description: "Flag que determina se a Base de Conhecimento pode ser alterada.",
								type: "boolean",
								insert: true,
								
							},
							{
								name: "titulo",
								description: "Título da base de conhecimento.",
								type: "string [100]",
								insert: true,
								required: true,
								modifiable: true,
							},
							{
								name: "tipo",
								description: "Tipo da base de conhecimento.",
								type: "string [20]",
								insert: true,
								modifiable: true,
							},
							{
								name: "mensagem",
								description: "Mensagem contida na base de conhecimento.",
								type: "string [1000]",
								insert: true,
								required: true,
								modifiable: true,
							}
						]
					},
					{
						label: "Incluir",
						url: "/ordem/baseconhecimento",
						method: "POST",
						result:"{\"titulo\": \"TITULO DA BASE DE CONHECIMENTO\",\"tipo\": \"Interno\",\"mensagem\": \"DESCRICAO DA BASE DE CONHECIMENTO\"}",
						returns:"{\"id\":\"21\",\"codigo\":\"PBSC20\",\"dataCriacao\":\"1393596044194\",\"dataAlteracao\":\"1393596044194\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"TITULO DA BASE DE CONHECIMENTO\",\"tipo\":\"Interno\",\"mensagem\":\"BASE DE CONHECIMENTO NOVA\"}",
						description: "Ao utilizar o método POST na URL acima, em conjunto com os campos abaixo, uma nova base de conhecimento é criada.",
						params: [

						]
					},
					{
						label: "Listar",
						url: "/ordem/baseconhecimento",
						method: "GET",
						returns: "{\"data\":[{\"id\":\"1\",\"codigo\":\"PBSC0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"Cabo de Rede Externa Rompido Externo\",\"tipo\":\"Interno\"},{\"id\":\"2\",\"codigo\":\"PBSC1\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"Cabo de Rede Interna Rompido \",\"tipo\":\"Externo\"}],\"paging\":{\"@numberPages\":\"1\",\"@number\":\"15\",\"@page\":\"1\",\"@type\":\"application/json\"}}",
						description: "Listar todas as bases de conhecimento cadastradas. Podem ser utilizados os seguintes filtros:",
						params: [
							{
								
								name: "since",
								description: "Filtrar pela data da última alteracao da Base de Conhecimento. Formato dd/mm/yyy.",
								type: "timestamp",
							},
							{
								name: "offset",
								description: "Filtrar a partir do número de um resultado específico.",
								type: "int",
							},
							{
								name: "limit",
								description: "Limitar o número de resultados buscados.",
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
						label: "Pesquisar por ID",
						url: "/produto/{id}",
						method: "GET",
						description: "Pesquisar uma base de conhecimento a partir do seu ID.",
						returns: "{\"id\":\"1\",\"codigo\":\"PBSC0\",\"dataCriacao\":\"1391457415467\",\"dataAlteracao\":\"1391605534367\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"Cabo de Rede Externa Rompido Externo\",\"tipo\":\"Interno\",\"mensagem\":\"Cabo de rede ou �ptico rompido do Poste de entrada, para fora.\n\"}",
						description: "Pesquisar uma base de conhecimento a partir do seu ID",
						params: [

						]
					},
					{
						label: "Alterar por ID",
						url: "/produto/{id}",
						method: "PUT",
						description: "Alterar uma base de conhecimento a partir do seu ID.",
						result: "{\"statusModel\": \"1\",\"permitidoExcluir\": \"true\",\"permitidoAlterar\": \"true\",\"titulo\": \"TITULO DA BASE DE CONHECIMENTO MODIFICADO\",\"tipo\": \"Interno\",\"mensagem\": \"BASE DE CONHECIMENTO MODIFICADA\"}",
						returns: "{\"id\":\"19\",\"codigo\":\"\",\"dataCriacao\":\"1393422672704\",\"dataAlteracao\":\"1393597662334\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"TITULO DA BASE DE CONHECIMENTO MODIFICADO\",\"tipo\":\"Interno\",\"mensagem\":\"BASE DE CONHECIMENTO MODIFICADA\"}",
						params: [

						]
					},
					{
						label: "Remover por ID",
						url: "/produto/{id}",
						method: "DELETE",
						description: "Remover uma Base de Conhecimento a partir do seu ID.",
						params: [

						]
					}
				]
			}
	     ]

	};

	return Config;

});