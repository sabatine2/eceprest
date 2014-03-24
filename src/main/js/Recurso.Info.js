window.configGroups.push({
	name: "[INFO]",
	endpoints: [
		{
			label: "Tags",
			url: "Informa&#231&#245es gerais",
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
			]
		}
	]
});