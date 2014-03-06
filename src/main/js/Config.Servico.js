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
				name: "Servico",
				endpoints: [
					{
						label: "Geral",
						url: "/servico",
						method: "POST, GET, PUT, DELETE",
						result:"",
						description: "Os campos que podem ser acessados na URL /servico são os seguintes:",
						params: [
							{
								name: "id",
								description: "Identifiador do serviço.",
								type: "long"
							},
							{
								name: "codigo",
								description: "Código do serviço.",
								type: "string[255]",
								insert: true
							},
							{
								name: "dataCriacao",
								description: "Data de cadastro do serviço.",
								type: "Unix timestamp"
							},
							{
								name: "dataAlteracao",
								description: "Data da última alteração do serviço.",
								type: "Unix timestamp"
							},
							{
								name: "statusModel",
								description: "Status do serviço (0 = inativo, 1 = ativo, 2 = removido).",
								type: "int",
								insert: true
							},
							{
								name: "permitidoExcluir",
								description: "Se o serviço pode ser exclúido.",
								type: "boolean",
								insert: true
							},
							{
								name: "permitidoAlterar",
								description: "Se o serviço pode ser alterado.",
								type: "boolean",
								insert: true
							},
							{
								
								name: "titulo",
								description: "Titulo do serviço.",
								type: "string[100]",
								required: true,
								insert: true
							},
							{
								name: "descricao",
								description: "Descrição do serviço.",
								type: "string[5000]",
								insert: true
							},
							{
								name: "servicoProcedimento",
								description: "Lista de procedimentos do serviço.",
								type: "array",
								insert: true
							}
						]
					},
					{
						label: "Incluir",
						url: "/servico",
						method: "POST",
						result: "{\"codigo\":\"747\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"Novo Servico\",\"descricao\":\"Criando Novo Servico\"}",
						returns: "{\"id\":\"2\",\"codigo\":\"747\",\"dataCriacao\":\"1394109166399\",\"dataAlteracao\":\"1394109166399\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"Novo Servico\",\"descricao\":\"Criando Novo Servico\"}",
						description: "Com o método POST, pode-se criar um novo serviço.",
					},
					{
						label: "Lista",
						url: "/servico",
						method: "GET",
						result:"{\"id\":\"1\",\"codigo\": \"PSER0\",\"dataCriacao\": \"1391482744594\",\"dataAlteracao\": \"1391523433108\",\"statusModel\": \"1\",\"permitidoExcluir\": \"true\",\"permitidoAlterar\": \"true\",\"titulo\": \"Migracao para Rede FTTH\",\"descricao\": \"\"}",
						description: "Listar todos serviços cadastrados. Podem ser utilizados os seguintes filtros:",
						params: [
							{
								name: "since",
								description: "Um timestamp (mm/dd/YYYY hh:mm) valor que aponta para o inicio do intervalo de dados baseados em tempo."
							},
							{
								name: "offset",
								description: "Valor inicial"
							},
							{
								name: "limit",
								description: "Este e o número de objetos individuais que são retornados em cada página"
							},
							{
								name: "status",
								description: "Status 0 Inativo, 1 Ativo, 2 Removido"
							}
							
						]
					},
					{
						label: "Pesquisa por ID",
						url: "/servico/{id}",
						method: "GET",
						result:"{\"id\": \"1\",\"codigo\": \"PSER0\",\"dataCriacao\": \"1391482744594\",\"dataAlteracao\": \"1391523433108\",\"statusModel\": \"1\",\"permitidoExcluir\": \"true\",\"permitidoAlterar\": \"true\",\"titulo\": \"Migracao para Rede FTTH\",\"descricao\": \"Migracao de Radio para FTTH ou GEPON, para Combinado ou somente Internet com Fidelidade.\",\"servicoProcedimento\": [{\"id\": \"4\",\"codigo\": \"1_2\",\"dataCriacao\": \"1391491984047\",\"dataAlteracao\": \"1391491984047\",\"statusModel\": \"1\",\"permitidoExcluir\": \"true\",\"permitidoAlterar\": \"true\",\"obrigatorio\": \"true\",\"anexo\": \"false\",\"servico\": null},{\"id\": \"3\",\"codigo\": \"POS13914918048212\",\"dataCriacao\": \"1391491804821\",\"dataAlteracao\": \"1391491804821\",\"statusModel\": \"1\",\"permitidoExcluir\": \"true\",\"permitidoAlterar\": \"true\",\"obrigatorio\": \"true\",\"anexo\": \"false\",\"servico\": null}]}",
						description: "Pesquisar um serviço a partir do seu ID.",
					},
					{
						label: "Alterar por ID",
						url: "/servico/{id}",
						method: "PUT",
						result: "{\"codigo\":\"848\",\"statusModel\":\"1\",\"titulo\":\"Alterando Novo Servico\",\"descricao\":\"Alterando Novo Servico\"}",
						returns: "{\"id\":\"13\",\"codigo\":\"848\",\"dataCriacao\":\"1394109166399\",\"dataAlteracao\":\"1394110311552\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"titulo\":\"Alterando Novo Servico\",\"descricao\":\"Alterando Novo Servico\"}",
						description: "Alterar um serviço a partir do seu ID.",
					},
					{
						label: "Remover por ID",
						url: "/servico/{id}",
						method: "DELETE",
						description: "Remover um serviço a partir do seu ID.",
					}
				]
			}
	     ]

	};

	return Config;

});
