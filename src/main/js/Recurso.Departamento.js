window.configGroups.push({
	name: "Departamento",
	endpoints: [
		{
			label: "Geral",
			url: "/ordem/departamento",
			method: "POST, GET, PUT, DELETE",
			description: "Os campos que podem ser acessados na URL /ordem/departamento são os seguintes:",
			params: [
				{
					name: "id",
					description: "Identificador do Departamento.",
					type: "long",
				},
				{
					name: "codigo",
					description: "Código do Departamento.",
					type: "string [255]",
					modifiable: true,
					insert: true,
				},
				{
					name: "dataCriacao",
					description: "Data em que o departamento foi cadastrada.",
					type: "long [UNIX timestamp]"
					
				},
				{
					name: "dataAlteracao",
					description: "Data da última alteração do departamento.",
					type: "long [UNIX timestamp]"
				},
				{
					name: "statusModel",
					description: "Status do departamento.",
					type: "int",
					insert: true,
					modifiable: true
				},
				{
					name: "permitidoExcluir",
					description: "Flag que determina se a Departamento pode ser excluído.",
					type: "boolean",
					insert: true,
				},
				{
					name: "permitidoAlterar",
					description: "Flag que determina se a Departamento pode ser alterado.",
					type: "boolean",
					insert: true,
					
				},
				{
					name: "descricao",
					description: "Descrição do departamento.",
					type: "string [255]",
					insert: true,
					modifiable: true,
				},
				{
					name: "email",
					description: "Email do departamento.",
					type: "string [100]",
					insert: true,
					modifiable: true,
				},
				{
					name: "emailTemplate",
					description: "Email para template de resposta",
					type: "string [100]",
					insert: true,
					modifiable: true,
				},
				{
					name: "nomeDepartamento",
					description: "Nome do departamento.",
					type: "string [100]",
					insert: true,
					required: true,
					modifiable: true,
				},
				{
					name: "ramal",
					description: "Ramal do departamento.",
					type: "string [10]",
					insert: true,
					modifiable: true,
				},
				{
					name: "responsavel",
					description: "Responsavel pelo departamento.",
					type: "string [100]",
					insert: true,
					modifiable: true,
				},
				{
					name: "telefone",
					description: "Telefone do departamento.",
					type: "string [12]",
					insert: true,
					required: true,
					modifiable: true,
				},
				{
					name: "tipo",
					description: "Tipo do departamento.",
					type: "string [100]",
					insert: true,
					modifiable: true,
				},
				{
					name: "unidade",
					description: "Unidade referente ao departamento.",
					type: "Lista de Unidades",
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
			url: "/ordem/departamento",
			method: "POST",
			result:"{\"codigo\":\"000111\",\"statusModel\":\"1\",\"descricao\":\"Criando novo Departamento\",\"email\":\"novo@departamento.com\",\"emailTemplate\":\"departamento@novo.com\",\"nomeDepartamento\":\"Novo\",\"ramal\":\"08\",\"responsavel\":\"Alguem\",\"telefone\":\"34131516\",\"tipo\":\"Interno\",\"unidade\":{\"id\":\"2\"}}",
			returns:"{\"id\":\"5\",\"codigo\":\"000111\",\"dataCriacao\":\"1395752190252\",\"dataAlteracao\":\"1395752190252\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"descricao\":\"Criando novo Departamento\",\"email\":\"novo@departamento.com\",\"emailTemplate\":\"departamento@novo.com\",\"nomeDepartamento\":\"Novo\",\"ramal\":\"08\",\"responsavel\":\"Alguem\",\"telefone\":\"34131516\",\"tipo\":\"Interno\",\"unidade\":{\"id\":\"2\",\"codigo\":\"PUNI1\",\"dataCriacao\":\"1391520567136\",\"dataAlteracao\":\"1391520567136\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeUnidade\":\"Persys\",\"email\":\"rsabatine@persystems.com.br\",\"telefone\":\"1434340744\",\"ramal\":\"\"}}",
			description: "Ao utilizar o método POST na URL acima, é possível criar um Departamento novo.",
			params: [

			]
		},
		{
			label: "Listar",
			url: "/ordem/departamento",
			method: "GET",
			returns: "{\"data\":[{\"id\":\"1\",\"codigo\":\"PDEP0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeDepartamento\":\"Padrão\",\"telefone\":\"1434133387\",\"tipo\":\"Interno\",\"unidade\":{\"id\":\"1\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeUnidade\":\"Padrão\"}},{\"id\":\"2\",\"codigo\":\"PDEP1\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeDepartamento\":\"Desenvolvimento\",\"telefone\":\"1434340744\",\"tipo\":\"Interno\",\"unidade\":{\"id\":\"2\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeUnidade\":\"Persys\"}}],\"paging\":{\"@numberPages\":\"1\",\"@number\":\"4\",\"@page\":\"1\",\"@type\":\"application/json\"}}",
			description: "Listar todos os departamento cadastrados. Podem ser utilizados os seguintes filtros:",
			params: [
				{
					
					name: "since",
					description: "Filtrar pela data da última alteracao do Departamento. Formato mm/dd/yyy. Valor padrão: \"01/01/1900\".",
					type: "timestamp",
				},
				{
					name: "offset",
					description: "Filtrar a partir do número de um resultado específico. Valor padrão: \"0\".",
					type: "int",
				},
				{
					name: "limit",
					description: "Limitar o número de resultados buscados. Valor padrão: \"100\".",
					type: "int",
				},
				{
					name: "status",
					description: "Filtrar a partir do status do departamento. Valor padrão: \"2\".",
					type: "int",
				}
			]
		},
		{
			label: "Pesquisar por ID",
			url: "/ordem/departamento/{id}",
			method: "GET",
			description: "Pesquisar um departamento a partir do seu ID.",
			returns: "{\"id\":\"2\",\"codigo\":\"PDEP1\",\"dataCriacao\":\"1391524294599\",\"dataAlteracao\":\"1391524294599\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"descricao\":\"\",\"email\":\"sabatine2@gmail.com\",\"emailTemplate\":\"\",\"nomeDepartamento\":\"Desenvolvimento\",\"ramal\":\"\",\"responsavel\":\"Ricardo\",\"telefone\":\"1434340744\",\"tipo\":\"Interno\",\"unidade\":{\"id\":\"2\",\"codigo\":\"PUNI1\",\"dataCriacao\":\"1391520567136\",\"dataAlteracao\":\"1391520567136\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeUnidade\":\"Persys\",\"email\":\"rsabatine@persystems.com.br\",\"telefone\":\"1434340744\",\"ramal\":\"\"}}",
			description: "Pesquisar um departamento a partir do seu ID",
			params: [

			]
		},
		{
			label: "Alterar por ID",
			url: "/ordem/departamento/{id}",
			method: "PUT",
			description: "Alterar um departamento a partir do seu ID.",
			result: "{\"codigo\":\"000555\",\"statusModel\":\"1\",\"descricao\":\"Alterando novo Departamento\",\"email\":\"alterando@departamento.com\",\"emailTemplate\":\"departamento@alterando.com\",\"nomeDepartamento\":\"Alterando\",\"ramal\":\"09\",\"responsavel\":\"Outro\",\"telefone\":\"34331718\",\"tipo\":\"Interno\",\"unidade\":{\"id\":\"2\"}}",
			returns: "{\"codigo\":\"000555\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"descricao\":\"Alterando novo Departamento\",\"email\":\"alterando@departamento.com\",\"emailTemplate\":\"departamento@alterando.com\",\"nomeDepartamento\":\"Alterando\",\"ramal\":\"09\",\"responsavel\":\"Outro\",\"telefone\":\"34331718\",\"tipo\":\"Interno\",\"unidade\":{\"id\":\"2\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\"}}",
			params: [

			]
		},
		{
			label: "Remover por ID",
			url: "/ordem/departamento/{id}",
			method: "DELETE",
			description: "Remover um Departamento a partir do seu ID.",
			params: [

			]
		}
	]
});