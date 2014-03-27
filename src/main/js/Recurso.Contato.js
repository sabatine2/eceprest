window.configGroups.push({
	name: "Contato",
	endpoints: [
		{
			label: "Geral",
			url: "/ordem/baseconhecimento",
			method: "POST, GET, PUT, DELETE",
			description: "Os campos que podem ser acessados na URL /ordem/baseconhecimento são os seguintes:",
			params: [
				{
					name: "id",
					description: "Identificador do contato.",
					type: "long",
				},
				{
					name: "codigo",
					description: "Código do contato.",
					type: "string [255]",
					modifiable: true,
					insert: true,
				},
				{
					name: "dataCriacao",
					description: "Data em que o contato foi cadastrado.",
					type: "long [UNIX timestamp]"
					
				},
				{
					name: "dataAlteracao",
					description: "Data da última alteração do contato.",
					type: "long [UNIX timestamp]"
				},
				{
					name: "statusModel",
					description: "Status do contato.",
					type: "int",
					insert: true,
					modifiable: true,
				},
				{
					name: "permitidoExcluir",
					description: "Flag que determina se o contato pode ser excluído.",
					type: "boolean",
					insert: true,
				},
				{
					name: "permitidoAlterar",
					description: "Flag que determina se o contato pode ser alterado.",
					type: "boolean",
					insert: true,
					
				},
				{
					name: "tipoContato",
					description: "Tipo do contato.",
					type: "string [100]",
				},
				{
					name: "nome",
					description: "Nome do contato.",
					type: "string [20]",
				},
				{
					name: "email",
					description: "Email do contato",
					type: "string [1000]",
				},
				{
					name: "emailEnviar",
					description: "Flag que determina se podem ser enviados emails para este contato.",
					type: "string [1000]",
				},
				{
					name: "telefoneFixo",
					description: "Telefone fixo do contato.",
					type: "string [1000]",
				},
				{
					name: "telefoneMovel",
					description: "Telefone móvel do contato",
					type: "string [1000]",
				},
				{
					name: "endereco",
					description: "Informações sobre o endereço deste contato",
					type: "Objeto Endereco",
				}
			],
			errors: [
				
			]
		},
	]
});