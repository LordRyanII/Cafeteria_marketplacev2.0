


# Cafeteria_marketplacev2.0
 <h2>Sistema de cadastro de produtos, simulando uma cafeteria. Sistema FullStack com node.js</h2> <br>
 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) 
 <p> O sistema tem mecânica CRUD (create, read, update e delete), autenticação, login e futuramente chatbot integrado. Se chama v2, pois a primeira versão usava o padrão mvc com o uso do ejs, esse padrão era um pouco limitado. </p><br>
- Frameworks, bibliotecas usadas e banco de dados<br>
<ul>
      <li>  Node.js  </li>
      <li>  Bootstrap5  </li>
      <li>    React.js </li>
      <li>    Express </li>
      <li>    Axios   </li>
      <li>  Mongoose  </li>
      <li>  MongoDB  </li>
</ul>
<br>     
<h2>Principais mecânicas</h2>
- Sistema de Adm <br>
- Login <br>
- Sistema de compra <br>
- Sistema para cadastro, atualização e delete de produtos (apenas adm) <br>
- Futuramente sistema de chatbot integrado
<br>
<h2>Intalação Backend</h2>
<p>É possível usar apenas o backend, pode-se usar para testar as apis. Também pode ser usado para outros projetos, basta adicionar suas credenciais de banco de dados e adaptar.</p>
- Na pasta backend, no terminal, tanto do vscode ou poweShell. Digite: npm i (para instalar as bibliotecas)<br>
- Após é necessário criar um arquivo .env, nele crie uma variável chamada: URLCONNECTIONMONGO, e coloque o valor da uri do seu banco de dados mongoDb <br>
- No postman, copie as uri, o terminal do vscode ou powerShell se tudo ocorrer bem mostrará uma mensagem assim: <br>
https://github.com/LordRyanII/Cafeteria_marketplacev2.0/blob/main/frontend/src/Component/assets/img/image.png

- Após use as seguinte uri: 
	-  GET: http://localhost:3002/produtos/res/produtos/  => Lista produtos do banco de dados | 
	- POST: http://localhost:3002/produtos/create/produto/ => Cria os Produtos 
		- Body:

				{
					"produto":  "string", //Nome do produto ou tipo| obrigatório
					"descricao":  "string" //Descrição do produto | obrigatório
					"preco_compra":  Number, //Valor do produto | obrigatório
					"quantidade":  "string", //Tamanho do produto, peso... |obrigatório
					"image":  "string" //Url do produto
				}
				 

	- DELETE: http://localhost:3002/produtos/delete/produtos/{id do produto}  => Deleta algum produto 
		- body: Não é necessário, apenas mudar a query
	- PUT: http://localhost:3002/produtos/atualiza/produtos/{Id do produto}  => Atualiza no bd os produtos
		- Body: Campos do post que queira atualizar, mas o id do produto

<br>
<h2>Intalação Frontend</h2>
<p>Para usar o frontend é necessário que o backend esteja funcionando. Para isso siga os passos anterior.</p>
- Primeiro na pasta raiz do projeto, no terminal digite: cd frontend
	- Após digite: npm i (para instalar as dependências)
	- Seguido digite: npm start
	- Se tudo ocorrer bem o sistema irá abrir uma página web
- Rotas e suas funcionalidades:
	- O sistema por padrão irá abrir a página com essa url: /
	- Pode se interagir com a página de usuário
	- Para fazer login e entrar na página do adm, adicione na url: /Adm/login
	- Faça login
	- Após será possível criar, modificar e excluír produtos do backend de modo visual	
<br>
