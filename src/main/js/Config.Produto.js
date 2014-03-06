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
				name: "Produto",
				endpoints: [
					{
						label: "Geral",
						url: "/produto",
						method: "POST, GET, PUT, DELETE",
						description: "Os campos que podem ser acessados na URL /ordem/produto são os seguintes:",
						params: [
							{
								name: "id",
								description: "Identificador do produto.",
								type: "long",
							},
							{
								name: "codigo",
								description: "Código do produto.",
								type: "string[255]",
								insert: true,
								modifiable: true
							},
							{
								name: "dataCriacao",
								description: "Data de cadastro do produto.",
								type: "long [UNIX timestamp]",
							},
							{
								name: "dataAlteracao",
								description: "Data da última alteração do produto.",
								type: "long [UNIX timestamp]",
							},
							{
								name: "statusModel",
								description: "Status do produto (0 = inativo, 1 = ativo, 2 = removido).",
								type: "int",
								insert: true,
								modifiable: true
							},
							{
								name: "permitidoExcluir",
								description: "Flag que determina se o produto pode ser excluído.",
								type: "boolean",
								insert: true
							},
							{
								name: "permitidoAlterar",
								description: "Flag que determina se o produto pode ser excluído.",
								type: "boolean",
								insert: true
							},
							{
								
								name: "nome",
								description: "Nome do produto.",
								type: "string[100]",
								required: true,
								insert: true,
								modifiable: true
							},
							{
								name: "descricao",
								description: "Descrição do produto.",
								type: "string[250]",
								insert: true,
								modifiable: true
							},
							{
								name: "marca",
								description: "Marca do produto.",
								type: "string[100]",
								insert: true,
								modifiable: true
							},
							{
								name: "codigoBarra",
								description: "Código de barras do produto.",
								type: "string[30]",
								insert: true,
								modifiable: true
							}
						]
					},
					{
						label: "Incluir",
						url: "/produto",
						method: "POST",
						result: "{\"nome\":\"Novo produto\",\"descricao\":\"Criando novo produto.\",\"marca\":\"Novo\",\"codigoBarra\":\"000111\"}",
						returns: "{\"id\":\"15\",\"codigo\":\"PPRO17\",\"dataCriacao\":\"1394021653153\",\"dataAlteracao\":\"1394021653153\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"Novo produto\",\"descricao\":\"Criando novo produto.\",\"marca\":\"Novo\",\"codigoBarra\":\"000111\"}",
						description: "Ao utilizar o método POST na URL acima, em conjunto com os campos abaixo, um novo produto é criado.",
					},
					{
						label: "Lista",
						url: "/produto",
						method: "GET",
						returns:"{\"data\":[{\"id\":\"1\",\"codigo\":\"PPRO0\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"Home Advanced 1Mbps\"}",
						description: "Esse método lista todos os produtos.",
						params: [
							{
								name: "since",
								description: "Um timestamp (mm/dd/YYYY hh:mm) valor que aponta para o inicio do intervalo de dados baseados em tempo.",
								type: "timestamp"
							},
							{
								name: "offset",
								description: "Valor inicial.",
								type: "int"
							},
							{
								name: "limit",
								description: "Este é o número de objetos individuais que são retornados em cada página.",
								type: "int"
							},
							{
								name: "status",
								description: "Status: 0 Inativo, 1 Ativo, 2 Removido.",
								type: "int"
							}
							
						]
					},
					{
						label: "Pesquisa por ID",
						url: "/produto/{id}",
						method: "GET ",
						returns:"{\"id\": \"1\",\"codigo\": \"PPRO0\",\"dataCriacao\": \"1391523583788\",\"dataAlteracao\": \"1391523583788\",\"statusModel\": \"1\",\"permitidoExcluir\": \"true\",\"permitidoAlterar\": \"true\",\"nome\": \"Home Advanced 1Mbps\",\"descricao\": \"1Mbps Download 1Mbps Upload IP Dinamico\",\"marca\": \"\",\"codigoBarra\": \"\"}",
						description: "Pesquisar um produto a partir do seu ID."
					},
					{
						label: "Alterar por ID",
						url: "/produto/{id}",
						method: "PUT",
						result:"{\"codigo\":\"78\",\"statusModel\":\"1\",\"nome\":\"Mudar produto\",\"descricao\":\"Produto Mudado.\",\"marca\":\"Mudando Produto\",\"codigoBarra\":\"000111\"}",
						returns: "{\"id\":\"15\",\"codigo\":\"78\",\"dataCriacao\":\"1394021490685\",\"dataAlteracao\":\"1394027608535\",\"statusModel\":\"1\",\"permitidoExcluir\":\"true\",\"permitidoAlterar\":\"true\",\"nome\":\"Mudar produto\",\"descricao\":\"Produto Mudado.\",\"marca\":\"Mudando Produto\",\"codigoBarra\":\"000111\"}", 
						description: "Alterar um produto a partir do seu ID."
					},
					{
						label: "Remover por ID",
						url: "/produto/{id}",
						method: "DELETE",
						description: "Remover um produto a partir do seu ID.",
						result:""
					}
				]
			}
	     ]

	};

	return Config;

});
