**Users API**

- API dedicada a gerenciamento de cadastros de usuários, com autenticação e tratativa de erros

*Dependencias*
- Typescript

        ```
        npm i -D typescript
        ```

- Express

        ```
        npm i express
        ```

- Tipagem para express

        ```
        npm i -D @types/express
        ```
- Ts-node-dev

        ```
        npm i -D ts-node-dev
        ```

- UUID

  - Biblioteca para gerar uuid

  - Necessário informar a versão do uuid que será utilizado

  - A V4 é a mais utilizada e gera uma string com caracteres aleatórios

        ```
        npm i uuid
        ```

- Tipagem para UUID

        ```
        npm i -D @types/uuid
        ```

- Swagger/Swagger UI Express

  - Swagger para documentação da API
  
  - Swagger UI Express para implementação do Swagger

        ```
        npm install swagger-ui-express
        ```

- Tpagem para Swagger UI Express

        ```
        npm i -D @types/swagger-ui-express
        ```

*Documentação completa da aplicação*

- /api-docs

*Rotas da aplicação*

- POST /users
    - Cria um novo usuário
        - O usuário é criado sem permissão de administrador
    - Caso o email passado já exista, retorna o erro `Email Already exists!`

- PATCH /users/:user_id/admin
    - Torna o usuário, passado na rota através do ID, um administrador
    - Caso o ID passado não exista, retorna o erro `User does not exists!`

- GET /users/:user_id
    - Retorna os dados do usuário passado na rota, através do ID
    - Caso o ID passado não exista, retorna o erro `User does not exists!`

- GET /users
    - Retorna todos os usuários
    - Para acessar os dados, é necesário que seja passado o ID do computador no Header da aplicação
    - Para acessar os dados, é necessário que o usuário informado seja admin
    - Caso o ID passado não exista, retorna o erro `User does not exists!`
    - Caso o usuário passado não seja admin, retorna o erro `User is not admin!`
