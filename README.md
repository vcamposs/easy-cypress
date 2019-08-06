# Easy Cypress :
O intuito do "easy-cypress" é simplificar as configurações iniciais do projeto E2E. O projeto possui :

- **/app :** 
  - Aplicação simples “my-todo-list” em React, para exemplificar o uso da estrutura criada.
- **/cypress :**
  - Cypress;
  - Cucumber;
  - Page objects;
  - Testes de layout;
  - Relatório de execução;
  
## Como utilizar ?

1. Baixar o projeto :
```
$ https://github.com/vcamposs/easy-cypress.git
```
2. Instalar as dependências, e executaro o app "my-todo-list" :
```
cd /my-todo-list/
$ npm install
$ npm run start 
```
3. Instalar as dependências do Cypress e executar os testes :
```
$ cd /cypress/
$ npm install
$ npm run e2e-test:failOnSnapshotDiff
```
4. Gerar o relatório :
```
$ cd /cypress/
$ node report/index.js
```
** Relatório gerado em : ~/easy-cypress/cypress/report/generated/*.html

## Como executar os testes de layout ?
Com dependência "cypress-image-snapshot" (já configurada no projeto), qualquer alteração de layout será apontada como erro, durante a execução dos testes. Para isso teremos que :

1. Capturar uma imagem base, para futuras comparações usando “cy.matchImageSnapshot('home')” onde passamos como parâmetro “home”, que será o nome da imagem padrão. Em “easy-cypress/cypress/step_definitions/base.step.js” temos um exemplo de utilização :
```
Then('Open {string}', page => {
	basePage.openUrl(page);
	cy.matchImageSnapshot('home');
});
```
2. Executar o comando abaixo pela primeira vez, com ele vamos indicar que a imagem capturada durante a execução, será usada como base para a comparação com os outros testes executados. Se caso houver uma alteração no layout da tela, usar esse mesmo comando para atualizar a imagem base : 
```
$ npm run e2e-test:headless:updateSnapshots
```
3. Executar os testes somente via headless para termos uma padrão em relação às imagens. Qualquer diferença no layout será considerada como um erro durante a execução :
```
$ npm run e2e-test:headless
```
4. Para desconsiderar a comparação de imagens :
```
$ npm run e2e-test:headless:failOnSnapshotDiff
```
