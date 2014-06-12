window.configGroups.push({
	name: "Cliente",
	endpoints: [
		{
			label: "Geral",
			url: "/cliente",
			method: "POST, GET, PUT, DELETE",
			description: "Os campos que podem ser acessados na URL /cliente s�o os seguintes:",
			params: [
				{
					name: "id",
					description: "Identificador do cliente.",
					type: "long",
				},
				{
					name: "COdigo",
					description: "C�digo do cliente.",
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
					description: "Data da �ltima altera��o do cliente.",
					type: "long [UNIX timestamp]"
				},
				{
					name: "statusModel",
					description: "Status do cliente.",
					type: "int",
					insert: true,
					modifiable: true,
				},
				{
					name: "permitidoExcluir",
					description: "Flag que determina se o cliente pode ser exclu�do.",
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
					description: "Nome de usu�rio do cliente.",
					type: "string",
					insert: true,
					required: true,
				},
				{
					name: "razaoNome",
					description: "Nome ou Raz�o Social do cliente.",
					type: "string",
					insert: true,
					required: true,
					modifiable: true,
				},
				{
					name: "fantasiaSobrenome",
					description: "Sobrenome ou Nome Fantasia do cliente.",
					type: "string",
					insert: true,
					required: true,
				},
				{
					name: "cnpjCpf",
					description: "CNPJ ou CPF do cliente.",
					type: "string",
					insert: true,
					modifiable: true,
				},
				{
					name: "ieRg",
					description: "Inscri��o estadual ou RG do cliente.",
					type: "string",
					insert: true,
					modifiable: true,
				},
				{
					name: "dataNascimento",
					description: "Data de Nascimento do cliente.",
					type: "timestamp",
					insert: true,
					modifiable: true,
				},
				{
					name: "emailPrincipal",
					description: "E-mail do cliente.",
					type: "string",
					insert: true,
					required: true,
					modifiable: true,
				},
				{
					name: "nota",
					description: "Anota��o sobre o cliente.",
					type: "string",
					insert: true,
					modifiable: true,
				},
				{
					name: "dashboardNome",
					description: "Nome do cliente no Dashboard.",
					type: "string",
					insert: true,
					required: true,
				},
				{
					name: "timezone",
					description: "Fuso Hor�rio do cliente.",
					type: "string",
					insert: true,
					required: true,
				},
				{
					name: "locale",
					description: "Localiza��o do cliente.",
					type: "string",
					insert: true,
					required: true,
				},
				{
					name: "contato",
					description: "Informa��es de contato do cliente.",
					type: "Lista de Contatos",
					insert: true,
					required: true,
				},
				{
					name: "situacao",
					description: "Situa��o do cliente.",
					type: "string",
					insert: true,
					required: true,
				},
				{
					name: "tipoCliente",
					description: "Tipo de cliente.",
					type: "string",
					insert: true,
					modifiable: true,
				},
				{
					name: "site",
					description: "Site do cliente.",
					type: "string",
					insert: true,
				},
				{
					name: "imagem",
					description: "Imagem do cliente.",
					type: "",
					insert: true,
				}
			]
		},
		{
			label: "Incluir",
			url: "/cliente",
			method: "POST",
			result:"{\"nomeUsuario\":\"user\",\"razaoNome\":\"Joao Silva\",\"fantasiaSobrenome\":\"Nunes\",\"cnpjCpf\":\"03854459790\",\"ieRg\":\"\",\"emailPrincipal\":\"email@provedor.com\",\"nota\":\"\",\"dashboardNome\":\"\",\"timezone\":\"\",\"locale\":\"\",\"contato\":{\"tipoContato\":\"Comercial\",\"nome\":\"Joao\",\"email\":\"work@provedor.com\",\"emailEnviar\":\"false\",\"telefoneFixo\":\"1433445566\",\"telefoneMovel\":\"\",\"endereco\":{\"tipo\":\"\",\"logradouro\":\"Rua Um\",\"numero\":\"20\",\"complemento\":\"\",\"bairro\":\"Centro\",\"cidade\":\"Mar�lia\",\"estado\":\"SP\",\"cep\":\"17500000\",\"obs\":\"\",\"altura\":\"\"}},\"situacao\":\"\",\"tipoCliente\":\"F�sico\",\"site\":\"\",\"imagem\":\"\"}",
			returns:"{\"id\":\"40\",\"codigo\":\"PCL17\",\"dataCriacao\":\"1394739531933\",\"dataAlteracao\":\"1394739531933\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeUsuario\":\"C03854459790\",\"razaoNome\":\"Joao Silva\",\"fantasiaSobrenome\":\"Nunes\",\"cnpjCpf\":\"03854459790\",\"ieRg\":\"\",\"emailPrincipal\":\"email@provedor.com\",\"nota\":\"\",\"dashboardNome\":\"\",\"timezone\":\"\",\"locale\":\"\",\"contato\":{\"id\":\"83\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"tipoContato\":\"Comercial\",\"nome\":\"Joao\",\"email\":\"work@provedor.com\",\"emailEnviar\":\"false\",\"telefoneFixo\":\"1433445566\",\"telefoneMovel\":\"\",\"endereco\":{\"id\":\"70\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"tipo\":\"\",\"logradouro\":\"Rua Um\",\"numero\":\"20\",\"complemento\":\"\",\"bairro\":\"Centro\",\"cidade\":\"Mar�lia\",\"estado\":\"SP\",\"cep\":\"17500000\",\"obs\":\"\",\"altura\":\"\"}},\"situacao\":\"\",\"tipoCliente\":\"F�sico\",\"site\":\"\",\"imagem\":\"\"}",
			description: "Ao utilizar o m�todo POST na URL acima, � poss�vel criar um cliente novo.",
			params: [

			]
		},
		{
			label: "Listar",
			url: "/cliente",
			method: "GET",
			returns: "{\"data\":[{\"id\":\"2\",\"codigo\":\"PCL0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeUsuario\":\"C32543206892\",\"razaoNome\":\"Ricardo Sabatine\",\"cnpjCpf\":\"32543206892\",\"emailPrincipal\":\"\"},{\"id\":\"7\",\"codigo\":\"PCL1\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeUsuario\":\"C39746354833\",\"razaoNome\":\"Jo�o Paulo dos Santos Morijo\",\"cnpjCpf\":\"39746354833\",\"emailPrincipal\":\"\"}],\"paging\":{\"@next\":\"http://localhost:8080/OsManagerWeb/api/cliente/?offset=10&limit=10&status=2\",\"@numberPages\":\"2\",\"@number\":\"18\",\"@page\":\"1\",\"@type\":\"application/json\"}}",
			description: "Listar todas clientes. Podem ser utilizados os seguintes filtros:",
			params: [
				{
					name: "since",
					description: "Filtrar pela data da �ltima alteracao do cliente. Formato mm/dd/yyy. Valor padr�o: \"01/01/1900\""
				},
				{
					name: "offset",
					description: "Filtrar a partir do n�mero de um resultado espec�fico. Valor padr�o: \"0\""
				},
				{
					name: "limit",
					description: "Limitar o n�mero de resultados buscados. Valor padr�o: \"10\""
				},
				{
					name: "status",
					description: "Filstrar pelo status do cliente. Valor padr�o: \"2\""
				}
			]
		},
		{
			label: "Listar por ID",
			url: "/cliente/{id}",
			method: "GET",
			description: "Pesquisar um clienteo a partir do seu ID.",
			returns: "{\"id\":\"23\",\"codigo\":\"2\",\"dataCriacao\":\"1394724450738\",\"dataAlteracao\":\"1394724450738\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeUsuario\":\"C10633053732\",\"razaoNome\":\"LUCIANO DUCA DE CASTRO\",\"fantasiaSobrenome\":\"DUCA\",\"cnpjCpf\":\"48283365401\",\"ieRg\":\"027446760\",\"emailPrincipal\":\"leoleoleo\",\"nota\":\"PAI- RUA PALMEIRAS, 235 - MARILIA  17502000\",\"dashboardNome\":\"\",\"timezone\":\"\",\"locale\":\"\",\"situacao\":\"\",\"tipoCliente\":\"\",\"site\":\"\",\"dataNascimento\":\"2172016800000\",\"imagem\":\"\"}",
			description: "Listar uma base de conhecimento a partir do seu ID",
			params: [

			]
		},
		{
			label: "Alterar por ID",
			url: "/cliente/{id}",
			method: "PUT",
			description: "Alterar um cliente a partir do seu ID.",
			result: "{\"codigo\":\"PCL17\",\"nomeUsuario\":\"C03854459790\",\"razaoNome\":\"Joao Silva Alterado\",\"fantasiaSobrenome\":\"Nunes Mod\",\"cnpjCpf\":\"03854459790\",\"ieRg\":\"\",\"emailPrincipal\":\"email@provedor.com\",\"nota\":\"\",\"dashboardNome\":\"\",\"timezone\":\"\",\"locale\":\"\",\"situacao\":\"\",\"tipoCliente\":\"F�sico\",\"site\":\"\",\"imagem\":\"\"}",
			returns: "{\"codigo\":\"PCL17\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeUsuario\":\"C03854459790\",\"razaoNome\":\"Joao Silva Alterado\",\"fantasiaSobrenome\":\"Nunes Mod\",\"cnpjCpf\":\"03854459790\",\"ieRg\":\"\",\"emailPrincipal\":\"email@provedor.com\",\"nota\":\"\",\"dashboardNome\":\"\",\"timezone\":\"\",\"locale\":\"\",\"situacao\":\"\",\"tipoCliente\":\"F�sico\",\"site\":\"\",\"imagem\":\"\"}",
			params: [

			]
		},
		{
			label: "Remover por ID",
			url: "/cliente/{id}",
			method: "DELETE",
			description: "Remover um cliente a partir do seu ID.",
			params: [

			]
		},
		{
			label: "Buscar",
			url: "/cliente/busca",
			method: "GET",
			description: "Busca uma Base de Conhecimento a partir dos par�metros listados a seguir. � necess�rio informar no m�nimo um par�metro para efetuar uma busca.",
			params: [
				{
					name: "razao",
					description: "Efetua uma busca pelo nome ou raz�o social do cliente. M�nimo de tr�s caracteres.",
					type: "string",
				},
				{
					name: "fantasia",
					description: "Efetua uma busca pelo sobrenome ou nome fantasia do cliente. M�nimo de tr�s caracteres.",
					type: "string",
				},
				{
					name: "cnpjcpf",
					description: "Efetua uma busca pelo cpf ou cnpj do cliente. M�nimo de tr�s caracteres.",
					type: "string",
				},
				{
					name: "codigo",
					description: "Efetua uma busca pelo c�digo do cliente. M�nimo de tr�s caracteres.",
					type: "string",
				},
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
					description: "Status da Base de Conhecimento. Valor padr�o: \"2\".",
					type: "int",
				}
			]
		}
	]
});