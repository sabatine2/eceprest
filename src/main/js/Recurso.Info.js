window.configGroups.push({
	name: "[INFO]",
	endpoints: [
		{
			label: "Tags",
			url: "Informações gerais",
			method: "-",
			description: "Aqui estão descritas as (TAGS) encontradas na documentação.",
			params: [
				{
					name: "(INSERT - REQUIRED)",
					description: "Marca os campos que são de envio obrigatório ao inserir (método POST) um recurso",
				},
				{
					name: "(INSERT)",
					description: "Marca os campos que são de envio opcional ao inserir (método POST) um recurso",
				},
				{
					name: "(MODIFIABLE)",
					description: "Marca os campos que são de envio obrigatório ao modificar (método PUT) um recurso",
				},
			],
		},
		{
			label: "Status",
			url: "Informações gerais",
			method: "-",
			description: "Informações sobre o campo statusModel. Ao utilizar filtros pelo campo status model, os resultados serão cumulativos. Para listar os registros excluídos, por exemplo, é necessário utilizar o valor 3.",
			params: [
				{
					name: "0",
					description: "Indica que o objeto está inativo",
				},
				{
					name: "1",
					description: "Indica que o objeto está ativo",
				},
				{
					name: "2",
					description: "Indica que o objeto foi excluído",
				},
			]
		}
	]
});
