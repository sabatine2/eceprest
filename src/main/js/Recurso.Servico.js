window.configGroups.push({
	name: "Servico",
	endpoints: [
		{
			label: "Geral",
			url: "/servico",
			method: "POST, GET, PUT, DELETE",
			result:"",
			description: "Os campos que podem ser acessados na URL /servico s�o os seguintes:",
			params: [
				{
					name: "id",
					description: "Identificador do servi�o.",
					type: "long"
				},
				{
					name: "codigo",
					description: "C�digo do servi�o.",
					type: "string[255]",
					insert: true,
					modifiable: true
				},
				{
					name: "dataCriacao",
					description: "Data em que o servi�o foi cadastrado",
					type: "long [UNIX timestamp]"
				},
				{
					name: "dataAlteracao",
					description: "Data da ultima altera��o do servi�o.",
					type: "long [UNIX timestamp]"
				},
				{
					name: "statusModel",
					description: "Status do servi�o (0 = inativo, 1 = ativo, 2 = removido).",
					type: "int",
					insert: true,
					modifiable: true
				},
				{
					name: "permitidoExcluir",
					description: "Flag que determina se o servi�o pode ser excluido.",
					type: "boolean",
					insert: true
				},
				{
					name: "permitidoAlterar",
					description: "Flag que determina se o servi�o pode ser alterado.",
					type: "boolean",
					insert: true
				},
				{
					
					name: "titulo",
					description: "Titulo do servi�o.",
					type: "string[100]",
					required: true,
					insert: true,
					modifiable: true
				},
				{
					name: "descricao",
					description: "Descri��o do servi�o.",
					type: "string[5000]",
					insert: true,
					modifiable: true
				},
				{
					name: "servicoProcedimento",
					description: "Procedimentos referentes ao servi�o.",
					type: "Lista de Procedimentos"
				}
			]
		},
		{
			label: "Incluir",
			url: "/servico",
			method: "POST",
			result: "{\"codigo\":\"747\",\"statusModel\":\"1\",\"titulo\":\"Novo Servico\",\"descricao\":\"Criando Novo Servico\"}",
			returns: "{\"id\":\"2\",\"codigo\":\"747\",\"dataCriacao\":\"1394109166399\",\"dataAlteracao\":\"1394109166399\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"Novo Servico\",\"descricao\":\"Criando Novo Servico\"}",
			description: "Ao utilizar o m�todo POST na URL acima, � possivel criar um servi�o novo.",
		},
		{
			label: "Lista",
			url: "/servico",
			method: "GET",
			result:"{\"id\":\"1\",\"codigo\": \"PSER0\",\"dataCriacao\": \"1391482744594\",\"dataAlteracao\": \"1391523433108\",\"statusModel\": \"1\",\"permitidoExcluir\": \"true\",\"permitidoAlterar\": \"true\",\"titulo\": \"Migracao para Rede FTTH\",\"descricao\": \"\"}",
			description: "Listar todos servi�os cadastrados. Podem ser utilizados os seguintes filtros:",
			params: [
				{
					name: "since",
					description: "Filtrar pela data da ultima alteracao da Base de Conhecimento. Formato mm/dd/yyy. Valor padr�o: \"01/01/1900\"."
				},
				{
					name: "offset",
					description: "Filtrar a partir do numero de um resultado especifico. Valor padr�o: \"0\"."
				},
				{
					name: "limit",
					description: "Limitar o numero de resultados buscados. Valor padr�o: \"100\"."
				},
				{
					name: "status",
					description: "Status 0 Inativo, 1 Ativo, 2 Removido. Valor padr�o: \"2\"."
				}
				
			]
		},
		{
			label: "Pesquisa por ID",
			url: "/servico/{id}",
			method: "GET",
			returns:"{\"id\": \"1\",\"codigo\": \"PSER0\",\"dataCriacao\": \"1391482744594\",\"dataAlteracao\": \"1391523433108\",\"statusModel\": \"1\",\"permitidoExcluir\": \"true\",\"permitidoAlterar\": \"true\",\"titulo\": \"Migracao para Rede FTTH\",\"descricao\": \"Migracao de Radio para FTTH ou GEPON, para Combinado ou somente Internet com Fidelidade.\",\"servicoProcedimento\": [{\"id\": \"4\",\"codigo\": \"1_2\",\"dataCriacao\": \"1391491984047\",\"dataAlteracao\": \"1391491984047\",\"statusModel\": \"1\",\"permitidoExcluir\": \"true\",\"permitidoAlterar\": \"true\",\"obrigatorio\": \"true\",\"anexo\": \"false\",\"servico\": null},{\"id\": \"3\",\"codigo\": \"POS13914918048212\",\"dataCriacao\": \"1391491804821\",\"dataAlteracao\": \"1391491804821\",\"statusModel\": \"1\",\"permitidoExcluir\": \"true\",\"permitidoAlterar\": \"true\",\"obrigatorio\": \"true\",\"anexo\": \"false\",\"servico\": null}]}",
			description: "Pesquisar um servi�o a partir do seu ID.",
		},
		{
			label: "Alterar por ID",
			url: "/servico/{id}",
			method: "PUT",
			result: "{\"codigo\":\"848\",\"statusModel\":\"1\",\"titulo\":\"Alterando Novo Servico\",\"descricao\":\"Alterando Novo Servico\"}",
			returns: "{\"id\":\"13\",\"codigo\":\"848\",\"dataCriacao\":\"1394109166399\",\"dataAlteracao\":\"1394110311552\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"Alterando Novo Servico\",\"descricao\":\"Alterando Novo Servico\"}",
			description: "Alterar um servi�o a partir do seu ID.",
		},
		{
			label: "Remover por ID",
			url: "/servico/{id}",
			method: "DELETE",
			description: "Remover um servi�o a partir do seu ID.",
		}
	]
});
