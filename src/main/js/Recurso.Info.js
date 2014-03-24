window.configGroups.push({
	name: "[INFO]",
	endpoints: [
		{
			label: "Tags",
			url: "Informa&#231&#245es gerais",
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
			]
		}
	]
});