window.configGroups.push({
	name: "Ordem de Serviço",
	endpoints: [
		{
			label: "Geral",
			url: "/ordem",
			method: "POST, GET, PUT, DELETE",
			description: "Importante: é necessário possuir o Token Key e o Secret Token do usuário.<br>Os campos que podem ser acessados na URL /ordem são os seguintes:",
			params: [
				{
					name: "id",
					description: "Identificador da Ordem de Serviço.",
					type: "long",
				},
				{
					name: "codigo",
					description: "Código da Ordem de Serviço.",
					type: "string [255]",
					modifiable: true,
					insert: true,
				},
				{
					name: "dataCriacao",
					description: "Data em que a ordem de serviço foi cadastrada.",
					type: "long [UNIX timestamp]",
					insert: true,
					modifiable: true,
				},
				{
					name: "dataAlteracao",
					description: "Data da última alteração da ordem de serviço.",
					type: "long [UNIX timestamp]",
					insert: true,
					modifiable: true,
				},
				{
					name: "dataConclusao",
					description: "Data da conclusão da ordem de serviço.",
					type: "long [UNIX timestamp]",
					insert: true,
					modifiable: true,
					
				},
				{
					name: "permitidoExcluir",
					description: "Flag que determina se a ordem de serviço pode ser excluída.",
					type: "boolean",
					insert: true,
				},
				{
					name: "permitidoAlterar",
					description: "Flag que determina se a ordem de serviço pode ser alterada.",
					type: "boolean",
					insert: true,
					
				},
				{
					name: "dataCriacao",
					description: "Data em que a ordem de serviço foi criada",
					type: "long [UNIX timestamp]",
					insert: true,
					modifiable: true,
				},
				{
					name: "dataAgendamento",
					description: "Data em que a ordem de serviço foi agendada.",
					type: "long [UNIX timestamp]",
					insert: true,
					modifiable: true,
				},
				{
					name: "dataAgendamentoFim",
					description: "Data em que a ordem de serviço foi finalizada.",
					type: "long [UNIX timestamp]",
					insert: true,
					modifiable: true,
				},
				{
					name: "assunto",
					description: "Assunto da ordem de serviço.",
					type: "string [2000]",
					insert: true,
					modifiable: true,
				},
				{
					name: "fonte",
					description: "Fonte que a ordem de serviço utiliza.",
					type: "string [50]",
					insert: true,
					modifiable: true,
				},
				{
					name: "situacaoOrdem",
					description: "Informação sobre a situação da ordem de serviço.",
					type: "Lista de Situação Ordem",
					insert: true,
					required: true,
					modifiable: true,
				},
				{
					name: "prioridade",
					description: "Informação sobre a prioridade da ordem de serviço.",
					type: "Lista de Prioridade",
					insert: true,
					required: true,
					modifiable: true,
				},
				{
					name: "contato",
					description: "Informação sobre o contato da ordem de serviço.",
					type: "Lista de Contato.",
					insert: true,
					required: true,
					modifiable: true,
				},
				{
					name: "informacaoAdicional",
					description: "Informações adicionais relacionadas a ordem de serviço.",
					type: "string [50]",
					insert: true,
					modifiable: true,
				},
				{
					name: "departamento",
					description: "Informação sobre o departamento da ordem de serviço.",
					type: "Lista de departamento",
					insert: true,
					required: true,
					modifiable: true,
				},
				{
					name: "clienteObjeto",
					description: "Informação sobre o cliente da ordem de serviço.",
					type: "Lista de Cliente",
					insert: true,
					required: true,
					modifiable: true,
				},
			],
			errors: [
				
			]
		},
		{
			label: "Incluir",
			url: "/ordem",
			method: "POST",
			result:"{\"assunto\":\" Nova Ordem\",\"fonte\":\"POSTMAN\",\"situacaoOrdem\":{\"id\":\"3\"},\"prioridade\":{\"id\":\"3\"},\"contato\":{\"nome\":\"Ricardo\",\"endereco\":{\"logradouro\":\"Rua America\",\"numero\":\"182\",\"bairro\":\"Vila Nova\",\"cidade\":\"Marília\",\"estado\":\"SP\",\"cep\":\"17510415\"}},\"informacaoAdicional\":\"A partir do POSTMAN\",\"departamento\":{\"id\":\"3\"},\"clienteObjeto\":{\"id\":\"3\"}}",
			returns:"{\"id\":\"59\",\"codigo\":\"POS03201455\",\"dataCriacao\":\"1396269694268\",\"dataAlteracao\":\"1396269694249\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"dataUltimaMensagem\":\"1396269693754\",\"assunto\":\" Nova Ordem\",\"informacaoAdicional\":\"A partir do POSTMAN\",\"fonte\":\"POSTMAN\",\"situacaoOrdem\":{\"id\":\"3\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\"},\"reagendamento\":\"false\",\"atribuida\":\"false\",\"agendada\":\"false\",\"departamento\":{\"id\":\"3\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\"},\"contato\":{\"id\":\"86\",\"codigo\":\"CONT139626969421382\",\"dataCriacao\":\"1396269694213\",\"dataAlteracao\":\"1396269694213\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"Ricardo\",\"emailEnviar\":\"false\",\"endereco\":{\"id\":\"74\",\"codigo\":\"END1396269694132\",\"dataCriacao\":\"1396269693754\",\"dataAlteracao\":\"1396269693754\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"logradouro\":\"Rua America\",\"numero\":\"182\",\"complemento\":\"\",\"bairro\":\"Vila Nova\",\"cidade\":\"Marília\",\"estado\":\"SP\",\"cep\":\"17510415\",\"obs\":\"\",\"latitude\":\"-22.196169\",\"longitude\":\"-49.9539419\",\"altura\":\"\"}},\"prioridade\":{\"id\":\"3\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\"},\"clienteObjeto\":{\"id\":\"3\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"valorTotal\":\"0.00\",\"valorMensal\":\"0.00\"}}",
			description: "Ao utilizar o método POST na URL acima, é possível criar uma ordem de serviço nova.",
			params: [
			      {
			        name: "contato",
			        description: "É necessário adicionar o Nome do contato.<br>Também é necessário adicionar os campos obrigatórios de endereço",
			      },
			]
		},
		{
			label: "Listar",
			url: "/ordem",
			method: "GET",
			returns: "{\"data\":[{\"id\":\"52\",\"codigo\":\"POS02201450\",\"dataCriacao\":\"1392385242749\",\"dataAgendamento\":\"1392573600000\",\"dataAgendamentoFim\":\"1392577200000\",\"assunto\":\" Cabo de rede ou óptico rompido do Poste de entrada, para fora.\",\"fonte\":\"Web\",\"situacaoOrdem\":{\"id\":\"3\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"Agendada\"},\"prioridade\":{\"id\":\"3\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"prioridade\":\"Alta\",\"cor\":\"-1900482\"},\"contato\":{\"id\":\"76\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"Elvis\",\"emailEnviar\":\"false\",\"endereco\":{\"id\":\"64\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"logradouro\":\"Rua Carlos Botelho\",\"numero\":\"869\",\"complemento\":\"\",\"bairro\":\"Jardim Maria Izabel \",\"cidade\":\"Marilia\",\"estado\":\"SP\",\"cep\":\"17516190\",\"obs\":\"\",\"latitude\":\"-22.2203566\",\"longitude\":\"-49.9367629\",\"altura\":\"\"}},\"informacaoAdicional\":\"Univem\",\"departamento\":{\"id\":\"1\",\"codigo\":\"PDEP0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeDepartamento\":\"Padrão\",\"unidade\":{\"id\":\"1\",\"codigo\":\"PUNI0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeUnidade\":\"Padrão\"}},\"clienteObjeto\":{\"id\":\"6\",\"codigo\":\"PCTR5\",\"unidade\":{\"id\":\"4\",\"codigo\":\"PUNI3\",\"nomeUnidade\":\"Univem\"},\"cliente\":{\"cnpjCpf\":\"78582332548\",\"codigo\":\"PCL5\",\"id\":\"11\",\"razaoNome\":\"Elvis Fusco\"}}},{\"id\":\"51\",\"codigo\":\"POS02201449\",\"dataCriacao\":\"1392381445960\",\"dataAgendamento\":\"1392463800000\",\"dataAgendamentoFim\":\"1392467400000\",\"assunto\":\" Cabo de rede ou óptico rompido do Poste de entrada, para fora.\",\"fonte\":\"Web\",\"situacaoOrdem\":{\"id\":\"6\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"Execução Concluída\"},\"prioridade\":{\"id\":\"1\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"prioridade\":\"Baixa\",\"cor\":\"-15009281\"},\"contato\":{\"id\":\"75\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"João Paulo morijo\",\"emailEnviar\":\"false\",\"endereco\":{\"id\":\"63\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"logradouro\":\"Rua Francisco Martinelli\",\"numero\":\"197\",\"complemento\":\"\",\"bairro\":\"Prolongamento Palmital\",\"cidade\":\"Marilia\",\"estado\":\"SP\",\"cep\":\"17511395\",\"obs\":\"\",\"latitude\":\"-22.1742537\",\"longitude\":\"-49.96054179999999\",\"altura\":\"\"}},\"informacaoAdicional\":\"Teste\",\"departamento\":{\"id\":\"1\",\"codigo\":\"PDEP0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeDepartamento\":\"Padrão\",\"unidade\":{\"id\":\"1\",\"codigo\":\"PUNI0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeUnidade\":\"Padrão\"}},\"clienteObjeto\":{\"id\":\"2\",\"codigo\":\"PCTR1\",\"dataAssinatura\":\"1391565600000\",\"unidade\":{\"id\":\"2\",\"codigo\":\"PUNI1\",\"nomeUnidade\":\"Persys\"},\"cliente\":{\"cnpjCpf\":\"39746354833\",\"codigo\":\"PCL1\",\"id\":\"7\",\"razaoNome\":\"João Paulo dos Santos Morijo\"}}}],\"paging\":{\"@numberPages\":\"1\",\"@number\":\"2\",\"@page\":\"1\",\"@type\":\"application/json\"}}",
			description: "Listar todas as ordens de serviços cadastradas. Podem ser utilizados os seguintes filtros:",
			params: [
				{
					
					name: "since",
					description: "Filtrar pela data da última alteracao da Ordem Serviço. Formato mm/dd/yyy. Valor padrão: \"01/01/1900\".",
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
					description: "Filtrar a partir do status da ordem de serviço. Valor padrão: \"2\".",
					type: "int",
				}
			]
		},
		{
			label: "Pesquisar ordem por ID",
			url: "/ordem/{id}",
			method: "GET",
			description: "Pesquisar uma ordem serviço a partir do seu ID.",
			returns: "{\"id\":\"1\",\"codigo\":\"POS0220140\",\"dataCriacao\":\"1391457420248\",\"dataAgendamento\":\"1391500800000\",\"dataAgendamentoFim\":\"1391504400000\",\"assunto\":\" Instalação da aplicação\",\"fonte\":\"Web\",\"situacaoOrdem\":{\"id\":\"6\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"Execução Concluída\"},\"prioridade\":{\"id\":\"1\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"prioridade\":\"Baixa\",\"cor\":\"-15009281\"},\"contato\":{\"id\":\"2\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"Ricardo\",\"emailEnviar\":\"false\",\"endereco\":{\"id\":\"3\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"logradouro\":\"Rua America\",\"numero\":\"182\",\"complemento\":\"\",\"bairro\":\"Vila Nova\",\"cidade\":\"Marília\",\"estado\":\"SP\",\"cep\":\"17510415\",\"obs\":\"\",\"latitude\":\"-22.196169\",\"longitude\":\"-49.9539419\",\"altura\":\"\"}},\"informacaoAdicional\":\"Teste\",\"departamento\":{\"id\":\"1\",\"codigo\":\"PDEP0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeDepartamento\":\"Padrão\",\"unidade\":{\"id\":\"1\",\"codigo\":\"PUNI0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nomeUnidade\":\"Padrão\"}},\"clienteObjeto\":{\"id\":\"1\",\"codigo\":\"PCTR0\",\"dataAssinatura\":\"1391479200000\",\"unidade\":{\"id\":\"1\",\"codigo\":\"PUNI0\",\"nomeUnidade\":\"Padrão\"},\"cliente\":{\"cnpjCpf\":\"32543206892\",\"codigo\":\"PCL0\",\"id\":\"2\",\"razaoNome\":\"Ricardo Sabatine\"}}}",
		},
		{
			label: "Pesquisar nota por ID",
			url: "/{id}/nota",
			method: "GET",
			description: "Pesquisar a nota da ordem serviço a partir do seu ID.",
			returns: "{\"data\":[{\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"Nota Criada: 2014/03/31 09:41 por: null\",\"nota\":\"Ordem criada pela POSTMAN com base no assunto  Nova Ordem\"},{\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"Nota Criada: 2014/03/31 11:03 por: admin\",\"nota\":\"Ordem de serviço alterada\"},{\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"Nota Criada: 2014/03/31 11:15 por: admin\",\"nota\":\"Ordem de serviço alterada\"},{\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"Nota Criada: 2014/03/31 11:29 por: admin\",\"nota\":\"Ordem de serviço alterada\"}],\"paging\":{\"@type\":\"application/json\"}}",
		},
		{
			label: "Alterar por ID",
			url: "/ordem/{id}",
			method: "PUT",
			description: "Alterar uma ordem serviço a partir do seu ID.",
			result: "{\"dataConclusao\":\"1389578400000\",\"assunto\":\" Alterando Ordem\",\"fonte\":\"POSTMAN\",\"situacaoOrdem\":{\"id\":\"3\"},\"prioridade\":{\"id\":\"3\"},\"contato\":{\"id\":\"3\",\"nome\":\"Ricardo\",\"endereco\":{\"logradouro\":\"Alterando Rua\",\"numero\":\"111\",\"bairro\":\"Alterando Bairro\",\"cidade\":\"Marília\",\"estado\":\"SP\",\"cep\":\"17510415\"}},\"informacaoAdicional\":\"A partir do POSTMAN\",\"departamento\":{\"id\":\"3\"},\"clienteObjeto\":{\"id\":\"3\"}}",
			returns: "{\"id\":\"59\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\"}",
			params: [
			       {  
			         name: "contato",
			         description: "É necessário adicionar o Nome do contato",
			       },
			       {
			    	 name: "dataConclusão",
			    	 description: "É necessario possuir a data de conclusão da ordem",
			       },
			]
		},
		{
			label: "Alterar situacao pelo ID da ordem",
			url: "/ordem/{id}/situacao",
			method: "PUT",
			description: "Alterar uma ordem serviço a partir do seu ID.",
			result: "",
			returns: "",
		},
		{
			label: "Remover por ID",
			url: "/ordem/{id}",
			method: "DELETE",
			description: "Remover uma ordem serviço a partir do seu ID.",
		}
	]
});