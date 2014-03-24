window.configGroups.push({
	name: "Base de Conhecimento",
	endpoints: [
		{
			label: "Geral",
			url: "/ordem/baseconhecimento",
			method: "POST, GET, PUT, DELETE",
			description: "Os campos que podem ser acessados na URL /ordem/baseconhecimento s�o os seguintes:",
			params: [
				{
					name: "id",
					description: "Identificador da Base de conhecimento.",
					type: "long",
				},
				{
					name: "codigo",
					description: "C�digo da Base de Conhecimento.",
					type: "string [255]",
					modifiable: true,
					insert: true,
				},
				{
					name: "dataCriacao",
					description: "Data em que a base de conhecimento foi cadastrada.",
					type: "long [UNIX timestamp]"
					
				},
				{
					name: "dataAlteracao",
					description: "Data da �ltima altera��o da base de conhecimento.",
					type: "long [UNIX timestamp]"
				},
				{
					name: "statusModel",
					description: "Status da Base de Conhecimento (0 = inativo, 1 = ativo, 2 = removido).",
					type: "int",
					insert: true,
					modifiable: true,
				},
				{
					name: "permitidoExcluir",
					description: "Flag que determina se a Base de Conhecimento pode ser exclu�da.",
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
					description: "T�tulo da base de conhecimento.",
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
			],
			errors: [
				
			]
		},
		{
			label: "Incluir",
			url: "/ordem/baseconhecimento",
			method: "POST",
			result:"{\"titulo\": \"TITULO DA BASE DE CONHECIMENTO\",\"tipo\": \"Interno\",\"mensagem\": \"DESCRICAO DA BASE DE CONHECIMENTO\"}",
			returns:"{\"id\":\"21\",\"codigo\":\"PBSC20\",\"dataCriacao\":\"1393596044194\",\"dataAlteracao\":\"1393596044194\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"TITULO DA BASE DE CONHECIMENTO\",\"tipo\":\"Interno\",\"mensagem\":\"BASE DE CONHECIMENTO NOVA\"}",
			description: "Ao utilizar o m�todo POST na URL acima, � poss�vel criar uma Base de Conhecimento nova.",
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
					description: "Filtrar pela data da �ltima alteracao da Base de Conhecimento. Formato mm/dd/yyy. Valor padr�o: \"01/01/1900\".",
					type: "timestamp",
				},
				{
					name: "offset",
					description: "Filtrar a partir do n�mero de um resultado espec�fico. Valor padr�o: \"0\".",
					type: "int",
				},
				{
					name: "limit",
					description: "Limitar o n�mero de resultados buscados. Valor padr�o: \"100\".",
					type: "int",
				},
				{
					name: "status",
					description: "Status: 0 Inativo, 1 Ativo, 2 Removido. Valor padr�o: \"2\".",
					type: "int",
				}
			]
		},
		{
			label: "Pesquisar por ID",
			url: "/ordem/baseconhecimento/{id}",
			method: "GET",
			description: "Pesquisar uma base de conhecimento a partir do seu ID.",
			returns: "{\"id\":\"1\",\"codigo\":\"PBSC0\",\"dataCriacao\":\"1391457415467\",\"dataAlteracao\":\"1391605534367\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"Cabo de Rede Externa Rompido Externo\",\"tipo\":\"Interno\",\"mensagem\":\"Cabo de rede ou �ptico rompido do Poste de entrada, para fora.\n\"}",
			description: "Pesquisar uma base de conhecimento a partir do seu ID",
			params: [

			]
		},
		{
			label: "Alterar por ID",
			url: "/ordem/baseconhecimento/{id}",
			method: "PUT",
			description: "Alterar uma base de conhecimento a partir do seu ID.",
			result: "{\"titulo\": \"TITULO DA BASE DE CONHECIMENTO MODIFICADO\",\"tipo\": \"Interno\",\"mensagem\": \"BASE DE CONHECIMENTO MODIFICADA\"}",
			returns: "{\"id\":\"19\",\"codigo\":\"\",\"dataCriacao\":\"1393422672704\",\"dataAlteracao\":\"1393597662334\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"TITULO DA BASE DE CONHECIMENTO MODIFICADO\",\"tipo\":\"Interno\",\"mensagem\":\"BASE DE CONHECIMENTO MODIFICADA\"}",
			params: [

			]
		},
		{
			label: "Remover por ID",
			url: "/ordem/baseconhecimento/{id}",
			method: "DELETE",
			description: "Remover uma Base de Conhecimento a partir do seu ID.",
			params: [

			]
		}
	]
});