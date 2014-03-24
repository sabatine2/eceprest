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
				name: "Procedimento",
				endpoints: [
					{
						label: "Geral",
						url: "servico/{id}/procedimento",
						method: "POST, GET, PUT, DELETE",
						description: "Os campos que podem ser acessados na URL servico/{id}/procedimento são os seguintes:",
						params: [
							{
								name: "id",
								description: "Identificador do Procedimento.",
								type: "long",
							},
							{
								name: "codigo",
								description: "Código do Procedimento.",
								type: "string [255]",
							},
							{
								name: "dataCriacao",
								description: "Data em que o procedimento foi cadastrado.",
								type: "long [UNIX timestamp]"
								
							},
							{
								name: "dataAlteracao",
								description: "Data da última alteração do procedimento.",
								type: "long [UNIX timestamp]"
							},
							{
								name: "statusModel",
								description: "Status do procedimento (0 = inativo, 1 = ativo, 2 = removido).",
								type: "int",
							},
							{
								name: "permitidoExcluir",
								description: "Flag que determina se o procedimento pode ser excluído.",
								type: "boolean",
							},
							{
								name: "permitidoAlterar",
								description: "Flag que determina se o procedimento pode ser alterado.",
								type: "boolean",
								
							},
							{
								name: "titulo",
								description: "Título do procedimento.",
								type: "string [100]",
							},
							{
								name: "nota",
								description: "Nota do procedimento.",
								type: "string [1000]",
							}
						]
					}
				]
			}
	     ]

	};

	return Config;

});