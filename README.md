# API com TypeScript e MongoDB

Este é um projeto de estudos que consiste em uma API desenvolvida em TypeScript com conexão a um banco de dados MongoDB. As principais funcionalidades da API incluem rotas para criar um cliente, deletar um cliente através de um ID e retornar um JSON com uma lista de todos os clientes cadastrados.

## Tecnologias Utilizadas

### Backend

- **Node.js**
- **TypeScript**
- **Prisma**
- **Fastify**
- **MongoDB**

### Frontend

- **Vite**
- **TypeScript**
- **TailWind CSS**

## Funcionalidades da API

1. **Criar Cliente**: Rota para criar um novo cliente.
2. **Deletar Cliente**: Rota para deletar um cliente específico através de um ID.
3. **Listar Clientes**: Rota para retornar um JSON com a lista de todos os clientes cadastrados.

#

![iamgem](./images/Captura%20de%20tela%202024-06-09%20121904.png)

## Imagens do Projeto

#### Adicionar cliente:
![Rota POST](./images/Captura%20de%20tela%202024-06-09%20115434.png)
#### Listar todos os clientes:
![Rota GET](./images/Captura%20de%20tela%202024-06-09%20115505.png)
#### Deletar cliente
![Rota DELETE](./images/Captura%20de%20tela%202024-06-09%20115532.png)

### Passos para Executar

1. **Clone o repositório**
    ```bash
    git clone https://github.com/Juliowk/API-TS.git
    ```

2. **Instale as dependências do backend**
    ```bash
    npm install
    ```

3. **Configure o banco de dados MongoDB**
    - Crie um arquivo `.env` com as seguintes variáveis:
      ```
      DATABASE_URL="sua-string-de-conexao-mongodb"
      ```

4. **Execute o backend**
    ```bash
    npm run dev
    ```

5. **Instale as dependências do frontend**
    ```bash
    cd FrontEnd
    npm install
    ```

6. **Execute o frontend**
    ```bash
    npm run dev
    ```

7. **Acesse a rota**
    ```bash
    http://localhost:5173/
    ```

## Este projeto foi desenvolvido por [Júlio Elias de Sousa Rocha](https://github.com/Juliowk).
