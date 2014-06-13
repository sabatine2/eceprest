window.configGroups.push({
				name: "CEP",
				endpoints: [
					{
						label: "Geral",
						url: "servico/{id}/procedimento",
						method: "POST, GET, PUT, DELETE",
						description: "Os campos que podem ser acessados na URL servico/{id}/procedimento s�o os seguintes:",
						params: [
							{
								name: "id",
								description: "Identificador do Procedimento.",
								type: "long",
							},
							{
								name: "codigo",
								description: "C�digo do Procedimento.",
								type: "string [255]",
							},
							{
								name: "dataCriacao",
								description: "Data em que o procedimento foi cadastrado.",
								type: "long [UNIX timestamp]"
								
							},
							{
								name: "dataAlteracao",
								description: "Data da �ltima altera��o do procedimento.",
								type: "long [UNIX timestamp]"
							},
							{
								name: "statusModel",
								description: "Status do procedimento.",
								type: "int",
								insert: true,
								modifiable: true
							},
							{
								name: "permitidoExcluir",
								description: "Flag que determina se o procedimento pode ser exclu�do.",
								type: "boolean",
							},
							{
								name: "permitidoAlterar",
								description: "Flag que determina se o procedimento pode ser alterado.",
								type: "boolean",
								
							},
							{
								name: "obrigatorio",
								description: "Se o procedimento � ou n�o obrigat�rio.",
								type: "boolean",
							},
							{
								name: "anexo",
								description: "Se o procedimento possui ou n�o anexo.",
								type: "boolean",
							}
						]
					}
				]

});