window.configGroups.push({
	name: "[INFO]",
	endpoints: [
		{
			label: "Tags",
			url: "Informa��es gerais",
			method: "-",
			description: "Aqui est�o descritas as (TAGS) encontradas na documenta��o.",
			params: [
				{
					name: "(INSERT - REQUIRED)",
					description: "Marca os campos que s�o de envio obrigat�rio ao inserir (m�todo POST) um recurso",
				},
				{
					name: "(INSERT)",
					description: "Marca os campos que s�o de envio opcional ao inserir (m�todo POST) um recurso",
				},
				{
					name: "(MODIFIABLE)",
					description: "Marca os campos que s�o de envio obrigat�rio ao modificar (m�todo PUT) um recurso",
				},
			],
		},
		{
			label: "Status",
			url: "Informa��es gerais",
			method: "-",
			description: "Informa��es sobre o campo statusModel. Ao utilizar filtros pelo campo status model, os resultados ser�o cumulativos. Para listar os registros exclu�dos, por exemplo, � necess�rio utilizar o valor 3.",
			params: [
				{
					name: "0",
					description: "Indica que o objeto est� inativo",
				},
				{
					name: "1",
					description: "Indica que o objeto est� ativo",
				},
				{
					name: "2",
					description: "Indica que o objeto foi exclu�do",
				},
			]
		}
	]
});
