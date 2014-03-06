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
						url: "/cliente",
						method: "POST, GET, PUT, DELETE",
						description: "Os campos que podem ser acessados na URL /cliente são os seguintes:",
						params: [
							{
								name: "id",
								description: "Identificador do cliente.",
								type: "long",
							},
							{
								name: "codigo",
								description: "Código do cliente.",
								type: "string [255]",
								modifiable: true,
								insert: true,
							},
							{
								name: "dataCriacao",
								description: "Data em que o cliente foi cadastrado.",
								type: "long [UNIX timestamp]"
								
							},
							{
								name: "dataAlteracao",
								description: "Data da última alteração do cliente.",
								type: "long [UNIX timestamp]"
							},
							{
								name: "statusModel",
								description: "Status do cliente (0 = inativo, 1 = ativo, 2 = removido).",
								type: "int",
								insert: true,
								modifiable: true,
							},
							{
								name: "permitidoExcluir",
								description: "Flag que determina se o cliente pode ser excluído.",
								type: "boolean",
								insert: true,
							},
							{
								name: "permitidoAlterar",
								description: "Flag que determina se o cliente pode ser alterado.",
								type: "boolean",
								insert: true,
								
							},
							{
								name: "nomeUsuario",
								description: "Nome de usuário do cliente.",
								type: "string [100]",
								insert: true,
								required: true,
								modifiable: true,
							},
							{
								name: "razaoNome",
								description: "Nome ou Razão Social do cliente.",
								type: "string [20]",
								insert: true,
								modifiable: true,
							},
							{
								name: "fantasiaSobrenome",
								description: "Sobrenome ou Nome Fantasia do cliente.",
								type: "string [1000]",
								insert: true,
								required: true,
								modifiable: true,
							},
							{
								name: "cnpjCpf",
								description: "CNPJ ou CPF do cliente.",
								type: "string [1000]",
								insert: true,
								required: true,
								modifiable: true,
							},
							{
								name: "ieRg",
								description: "Inscrição estadual ou RG do cliente.",
								type: "string [1000]",
								insert: true,
								required: true,
								modifiable: true,
							},
							{
								name: "emailPrincipal",
								description: "E-mail do cliente.",
								type: "string [1000]",
								insert: true,
								required: true,
								modifiable: true,
							},
							{
								name: "nota",
								description: "Anotação sobre o cliente.",
								type: "string [1000]",
								insert: true,
								required: true,
								modifiable: true,
							},
							{
								name: "dashboardNome",
								description: "Nome do cliente no Dashboard.",
								type: "string [1000]",
								insert: true,
								required: true,
								modifiable: true,
							},
							{
								name: "timezone",
								description: "Fuso Horário do cliente.",
								type: "string [1000]",
								insert: true,
								required: true,
								modifiable: true,
							},
							{
								name: "locale",
								description: "Localização do cliente.",
								type: "string [1000]",
								insert: true,
								required: true,
								modifiable: true,
							},
							{
								name: "contato",
								description: "Informações de contato do cliente.",
								type: "string [1000]",
								insert: true,
								required: true,
								modifiable: true,
							},
							{
								name: "situacao",
								description: "Situação do cliente.",
								type: "string [1000]",
								insert: true,
								required: true,
								modifiable: true,
							},
							{
								name: "tipoCliente",
								description: "Tipo de cliente.",
								type: "string [1000]",
								insert: true,
								required: true,
								modifiable: true,
							},
							{
								name: "site",
								description: "Site do cliente.",
								type: "string [1000]",
								insert: true,
								required: true,
								modifiable: true,
							},
							{
								name: "imagem",
								description: "Imagem do cliente.",
								type: "string [1000]",
								insert: true,
								required: true,
								modifiable: true,
							}
						]
					},
					{
						label: "Incluir",
						url: "/cliente",
						method: "POST",
						result:"{\"titulo\": \"TITULO DA BASE DE CONHECIMENTO\",\"tipo\": \"Interno\",\"mensagem\": \"DESCRICAO DA BASE DE CONHECIMENTO\"}",
						returns:"{\"id\":\"21\",\"codigo\":\"PBSC20\",\"dataCriacao\":\"1393596044194\",\"dataAlteracao\":\"1393596044194\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"TITULO DA BASE DE CONHECIMENTO\",\"tipo\":\"Interno\",\"mensagem\":\"BASE DE CONHECIMENTO NOVA\"}",
						description: "Ao utilizar o método POST na URL acima, é possível criar um cliente novo.",
						params: [

						]
					},
					{
						label: "Listar",
						url: "/cliente",
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
								description: "Status: 0 Inativo, 1 Ativo, 2 Removido.",
								type: "int",
							}
						]
					},
					{
						label: "Pesquisar por ID",
						url: /cliente/{id}",
						method: "GET",
						description: "Pesquisar uma base de conhecimento a partir do seu ID.",
						returns: "{\"id\":\"1\",\"codigo\":\"PBSC0\",\"dataCriacao\":\"1391457415467\",\"dataAlteracao\":\"1391605534367\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"Cabo de Rede Externa Rompido Externo\",\"tipo\":\"Interno\",\"mensagem\":\"Cabo de rede ou �ptico rompido do Poste de entrada, para fora.\n\"}",
						description: "Pesquisar uma base de conhecimento a partir do seu ID",
						params: [

						]
					},
					{
						label: "Alterar por ID",
						url: "/cliente/{id}",
						method: "PUT",
						description: "Alterar uma base de conhecimento a partir do seu ID.",
						result: "{\"titulo\": \"TITULO DA BASE DE CONHECIMENTO MODIFICADO\",\"tipo\": \"Interno\",\"mensagem\": \"BASE DE CONHECIMENTO MODIFICADA\"}",
						returns: "{\"id\":\"19\",\"codigo\":\"\",\"dataCriacao\":\"1393422672704\",\"dataAlteracao\":\"1393597662334\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"TITULO DA BASE DE CONHECIMENTO MODIFICADO\",\"tipo\":\"Interno\",\"mensagem\":\"BASE DE CONHECIMENTO MODIFICADA\"}",
						params: [

						]
					},
					{
						label: "Remover por ID",
						url: "/cliente/{id}",
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