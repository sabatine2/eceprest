window.configGroups.push({
	name: "Produto",
	endpoints: [
		{
			label: "Geral",
			url: "/produto",
			method: "POST, GET, PUT, DELETE",
			description: "Os campos que podem ser acessados na URL /ordem/produto s�o os seguintes:",
			params: [
				{
					name: "id",
					description: "Identificador do produto.",
					type: "long",
				},
				{
					name: "codigo",
					description: "C�digo do produto.",
					type: "string[255]",
					insert: true,
					modifiable: true
				},
				{
					name: "dataCriacao",
					description: "Data em que o produto foi cadastrado.",
					type: "long [UNIX timestamp]",
				},
				{
					name: "dataAlteracao",
					description: "Data da �ltima altera��o do produto.",
					type: "long [UNIX timestamp]",
				},
				{
					name: "statusModel",
					description: "Status do produto.",
					type: "int",
					insert: true,
					modifiable: true
				},
				{
					name: "permitidoExcluir",
					description: "Flag que determina se o produto pode ser exclu�do.",
					type: "boolean",
					insert: true
				},
				{
					name: "permitidoAlterar",
					description: "Flag que determina se o produto pode ser exclu�do.",
					type: "boolean",
					insert: true
				},
				{
					
					name: "nome",
					description: "Nome do produto.",
					type: "string[100]",
					required: true,
					insert: true,
					modifiable: true
				},
				{
					name: "descricao",
					description: "Descri��o do produto.",
					type: "string[250]",
					insert: true,
					modifiable: true
				},
				{
					name: "marca",
					description: "Marca do produto.",
					type: "string[100]",
					insert: true,
					modifiable: true
				},
				{
					name: "codigoBarra",
					description: "C�digo de barras do produto.",
					type: "string[30]",
					insert: true,
					modifiable: true
				}
			]
		},
		{
			label: "Incluir",
			url: "/produto",
			method: "POST",
			result: "{\"nome\":\"Novo produto\",\"descricao\":\"Criando novo produto.\",\"marca\":\"Novo\",\"codigoBarra\":\"000111\"}",
			returns: "{\"id\":\"15\",\"codigo\":\"PPRO17\",\"dataCriacao\":\"1394021653153\",\"dataAlteracao\":\"1394021653153\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"Novo produto\",\"descricao\":\"Criando novo produto.\",\"marca\":\"Novo\",\"codigoBarra\":\"000111\"}",
			description: "Ao utilizar o m�todo POST na URL acima, � poss�vel criar um produto novo.",
		},
		{
			label: "Lista",
			url: "/produto",
			method: "GET",
			returns:"{\"data\":[{\"id\":\"1\",\"codigo\":\"PPRO0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"Home Advanced 1Mbps\"}]}",
			description: "Listar todas os produtos cadastrados. Podem ser utilizados os seguintes filtros:",
			params: [
				{
					name: "since",
					description: "Filtrar pela data da �ltima alteracao da Base de Conhecimento. Formato mm/dd/yyy. Valor padr�o: \"01/01/1900\".",
					type: "timestamp"
				},
				{
					name: "offset",
					description: "Filtrar a partir do n�mero de um resultado espec�fico. Valor padr�o: \"0\".",
					type: "int"
				},
				{
					name: "limit",
					description: "Limitar o n�mero de resultados buscados. Valor padr�o: \"10\".",
					type: "int"
				},
				{
					name: "status",
					description: "Filtrar a partir do status de produto. Valor padr�o: \"2\".",
					type: "int"
				}
				
			]
		},
		{
			label: "Pesquisa por ID",
			url: "/produto/{id}",
			method: "GET ",
			returns:"{\"id\": \"1\",\"codigo\": \"PPRO0\",\"dataCriacao\": \"1391523583788\",\"dataAlteracao\": \"1391523583788\",\"statusModel\": \"1\",\"permitidoExcluir\": \"true\",\"permitidoAlterar\": \"true\",\"nome\": \"Home Advanced 1Mbps\",\"descricao\": \"1Mbps Download 1Mbps Upload IP Dinamico\",\"marca\": \"\",\"codigoBarra\": \"\"}",
			description: "Pesquisar um produto a partir do seu ID."
		},
		{
			label: "Alterar por ID",
			url: "/produto/{id}",
			method: "PUT",
			result:"{\"codigo\":\"78\",\"statusModel\":\"1\",\"nome\":\"Mudar produto\",\"descricao\":\"Produto Mudado.\",\"marca\":\"Mudando Produto\",\"codigoBarra\":\"000111\"}",
			returns: "{\"id\":\"15\",\"codigo\":\"78\",\"dataCriacao\":\"1394021490685\",\"dataAlteracao\":\"1394027608535\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"Mudar produto\",\"descricao\":\"Produto Mudado.\",\"marca\":\"Mudando Produto\",\"codigoBarra\":\"000111\"}", 
			description: "Alterar um produto a partir do seu ID."
		},
		{
			label: "Remover por ID",
			url: "/produto/{id}",
			method: "DELETE",
			description: "Remover um produto a partir do seu ID.",
			result:""
		}
	]
});
