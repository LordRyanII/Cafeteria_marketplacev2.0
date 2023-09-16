

# Cafeteria_marketplacev2.0
 <h2>Sistema de cadastro de produtos, simulando uma cafeteria. Sistema FullStack com node.js</h2> <br>
 
 ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
 ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) 
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
<p>Por enquanto o backend não está ligado ao frontend, porém no backend é possível criar os produtos, porém é necessário usar o postman</p>
- Na pasta backend, no terminal, tanto do vscode ou poweShell. Digite: npm i (para instalar as bibliotecas)<br>
- Após é necessário criar um arquivo .env, nele crie uma variável chamada: URLCONNECTIONMONGO, e coloque o valor da uri do seu banco de dados mongoDb <br>
- No postman, copie as uri, o terminal do vscode ou powerShell se tudo ocorrer bem mostrará uma mensagem assim: <br>
https://github.com/LordRyanII/Cafeteria_marketplacev2.0/blob/main/frontend/src/Component/assets/img/image.png

- Após use as seguinter uri: 
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

<br>
