# Cafeteria_marketplacev2.0
 <h2>Sistema de cadastro de produtos, simulando uma cafeteria. Sistema FullStack com node.js</h2> <br>
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
![image](https://github.com/LordRyanII/Cafeteria_marketplacev2.0/assets/102631987/b5aeb10a-6ae6-4d27-bdae-0dd11370b587)

- Após use as seguinter uri: GET: http://localhost:3002/produtos/res/produtos/  => Lista produtos do banco de dados | POST: http://localhost:3002/produtos/create/produto/ => Cria os Produtos  | DELETE: http://localhost:3002/produtos/delete/produtos/<Id do produto>  => Deleta algum produto  | PUT: http://localhost:3002/produtos/atualiza/produtos/<Id do produto>  => Atualiza no bd os produtos<br>

<br>

