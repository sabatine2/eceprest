window.configGroups.push({
	name: "Cliente",
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
					type: "string",
					insert: true,
					required: true,
				},
				{
					name: "razaoNome",
					description: "Nome ou Razão Social do cliente.",
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
					description: "Inscrição estadual ou RG do cliente.",
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
					description: "Anotação sobre o cliente.",
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
					description: "Fuso Horário do cliente.",
					type: "string",
					insert: true,
					required: true,
				},
				{
					name: "locale",
					description: "Localização do cliente.",
					type: "string",
					insert: true,
					required: true,
				},
				{
					name: "contato",
					description: "Informações de contato do cliente.",
					type: "Lista de Contatos",
					insert: true,
					required: true,
				},
				{
					name: "situacao",
					description: "Situação do cliente.",
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
			result:"{\"nomeUsuario\":\"user\",\"razaoNome\":\"Joao Silva\",\"fantasiaSobrenome\":\"Nunes\",\"cnpjCpf\":\"03854459790\",\"ieRg\":\"\",\"emailPrincipal\":\"email@provedor.com\",\"nota\":\"\",\"dashboardNome\":\"\",\"timezone\":\"\",\"locale\":\"\",\"contato\":{\"tipoContato\":\"Comercial\",\"nome\":\"Joao\",\"email\":\"work@provedor.com\",\"emailEnviar\":\"false\",\"telefoneFixo\":\"1433445566\",\"telefoneMovel\":\"\",\"endereco\":{\"tipo\":\"\",\"logradouro\":\"Rua Um\",\"numero\":\"20\",\"complemento\":\"\",\"bairro\":\"Centro\",\"cidade\":\"Marília\",\"estado\":\"SP\",\"cep\":\"17500000\",\"obs\":\"\",\"altura\":\"\"}},\"situacao\":\"\",\"tipoCliente\":\"Físico\",\"site\":\"\",\"imagem\":\"\"}",
			returns:"{\"id\":\"40\",\"codigo\":\"PCL17\",\"dataCriacao\":\"1394739531933\",\"dataAlteracao\":\"1394739531933\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeUsuario\":\"C03854459790\",\"razaoNome\":\"Joao Silva\",\"fantasiaSobrenome\":\"Nunes\",\"cnpjCpf\":\"03854459790\",\"ieRg\":\"\",\"emailPrincipal\":\"email@provedor.com\",\"nota\":\"\",\"dashboardNome\":\"\",\"timezone\":\"\",\"locale\":\"\",\"contato\":{\"id\":\"83\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"tipoContato\":\"Comercial\",\"nome\":\"Joao\",\"email\":\"work@provedor.com\",\"emailEnviar\":\"false\",\"telefoneFixo\":\"1433445566\",\"telefoneMovel\":\"\",\"endereco\":{\"id\":\"70\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"tipo\":\"\",\"logradouro\":\"Rua Um\",\"numero\":\"20\",\"complemento\":\"\",\"bairro\":\"Centro\",\"cidade\":\"Marília\",\"estado\":\"SP\",\"cep\":\"17500000\",\"obs\":\"\",\"altura\":\"\"}},\"situacao\":\"\",\"tipoCliente\":\"Físico\",\"site\":\"\",\"imagem\":\"\"}",
			description: "Ao utilizar o método POST na URL acima, é possível criar um cliente novo.",
			params: [

			]
		},
		{
			label: "Listar",
			url: "/cliente",
			method: "GET",
			returns: "{\"data\":[{\"id\":\"2\",\"codigo\":\"PCL0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeUsuario\":\"C32543206892\",\"razaoNome\":\"Ricardo Sabatine\",\"cnpjCpf\":\"32543206892\",\"emailPrincipal\":\"\"},{\"id\":\"7\",\"codigo\":\"PCL1\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeUsuario\":\"C39746354833\",\"razaoNome\":\"João Paulo dos Santos Morijo\",\"cnpjCpf\":\"39746354833\",\"emailPrincipal\":\"\"}],\"paging\":{\"@next\":\"http://localhost:8080/OsManagerWeb/api/cliente/?offset=10&limit=10&status=2\",\"@numberPages\":\"2\",\"@number\":\"18\",\"@page\":\"1\",\"@type\":\"application/json\"}}",
			description: "Listar todas clientes. Podem ser utilizados os seguintes filtros:",
			params: [
				{
					name: "since",
					description: "Filtrar pela data da última alteracao do cliente. Formato mm/dd/yyy. Valor padrão: \"01/01/1900\"."
				},
				{
					name: "offset",
					description: "Filtrar a partir do número de um resultado específico. Valor padrão: \"0\"."
				},
				{
					name: "limit",
					description: "Limitar o número de resultados buscados. Valor padrão: \"10\"."
				},
				{
					name: "status",
					description: "Status 0 Inativo, 1 Ativo, 2 Removido. Valor padrão: \"2\"."
				}
			]
		},
		{
			label: "Pesquisar por ID",
			url: "/cliente/{id}",
			method: "GET",
			description: "Pesquisar um clienteo a partir do seu ID.",
			returns: "{\"id\":\"23\",\"codigo\":\"2\",\"dataCriacao\":\"1394724450738\",\"dataAlteracao\":\"1394724450738\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeUsuario\":\"C10633053732\",\"razaoNome\":\"LUCIANO DUCA DE CASTRO\",\"fantasiaSobrenome\":\"DUCA\",\"cnpjCpf\":\"48283365401\",\"ieRg\":\"027446760\",\"emailPrincipal\":\"leoleoleo\",\"nota\":\"PAI- RUA PALMEIRAS, 235 - MARILIA  17502000\",\"dashboardNome\":\"\",\"timezone\":\"\",\"locale\":\"\",\"situacao\":\"\",\"tipoCliente\":\"\",\"site\":\"\",\"dataNascimento\":\"2172016800000\",\"imagem\":\"\"}",
			description: "Pesquisar uma base de conhecimento a partir do seu ID",
			params: [

			]
		},
		{
			label: "Alterar por ID",
			url: "/cliente/{id}",
			method: "PUT",
			description: "Alterar um cliente a partir do seu ID.",
			result: "{\"codigo\":\"PCL17\",\"nomeUsuario\":\"C03854459790\",\"razaoNome\":\"Joao Silva Alterado\",\"fantasiaSobrenome\":\"Nunes Mod\",\"cnpjCpf\":\"03854459790\",\"ieRg\":\"\",\"emailPrincipal\":\"email@provedor.com\",\"nota\":\"\",\"dashboardNome\":\"\",\"timezone\":\"\",\"locale\":\"\",\"situacao\":\"\",\"tipoCliente\":\"Físico\",\"site\":\"\",\"imagem\":\"\"}",
			returns: "{\"codigo\":\"PCL17\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeUsuario\":\"C03854459790\",\"razaoNome\":\"Joao Silva Alterado\",\"fantasiaSobrenome\":\"Nunes Mod\",\"cnpjCpf\":\"03854459790\",\"ieRg\":\"\",\"emailPrincipal\":\"email@provedor.com\",\"nota\":\"\",\"dashboardNome\":\"\",\"timezone\":\"\",\"locale\":\"\",\"situacao\":\"\",\"tipoCliente\":\"Físico\",\"site\":\"\",\"imagem\":\"\"}",
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
		}
	]
});