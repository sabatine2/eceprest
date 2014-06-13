window.configGroups.push({
				name: "CEP",
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
								description: "Status do procedimento.",
								type: "int",
								insert: true,
								modifiable: true
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
								name: "obrigatorio",
								description: "Se o procedimento é ou não obrigatório.",
								type: "boolean",
							},
							{
								name: "anexo",
								description: "Se o procedimento possui ou não anexo.",
								type: "boolean",
							}
						]
					}
				]

});