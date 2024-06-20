# Projeto de Formulário Angular com Busca de CEP

 formulário em Angular que coleta informações pessoais e de endereço de um usuário.

**Descrição do Projeto:**

O formulario contem os seguintes campos:

1. Nome completo
2. Data de nascimento
3. CPF
4. E-mail
5. Telefone
6. CEP
7. Endereço completo (rua, número, complemento, bairro, cidade, estado)

O projeto possui um serviço que busca informações de endereço a partir do CEP utilizando o serviço ViaCEP.
Ao digitar o CEP, o formulário busca automaticamente as informações de endereço e  as preenchem  nos campos correspondentes.

**Guia para configurar e rodar o projeto Angular a partir do GitHub.**

Pré-requisitos:

1. Node.js: Versão LTS recomendada. Você pode baixar e instalar a partir do site oficial: https://nodejs.org/
2. Angular CLI: Para instalar o Angular CLI, execute o seguinte comando após instalar o Node.js:
   npm install -g @angular/cli
3. Git: Para clonar o repositório. Você pode baixar e instalar a partir do site oficial: https://git-scm.com/

Passo a Passo:

1. Clonar o Repositório:

   Primeiro, você deve clonar o repositório GitHub do projeto. Abra seu terminal e execute o seguinte comando:
   
   git clone https://github.com/FelipeJorgeRS/FormularioCepAngular

2. Navegar para o Diretório do Projeto:

   Após clonar o repositório, navegue até o diretório do projeto:

   cd FormularioCepAngular

3. Instalar Dependências:

   No diretório do projeto, instale as dependências necessárias executando o comando:

   npm install

4. Rodar o Projeto:

   Com as dependências instaladas, você pode rodar o projeto utilizando o Angular CLI:

   ng serve

   O comando acima irá iniciar o servidor de desenvolvimento. Você deverá ver uma saída similar a esta:

   ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

5. Abrir no Navegador:

   Abra o seu navegador preferido e navegue até http://localhost:4200. O aplicativo Angular deverá estar rodando e você poderá interagir com o formulário.

Problemas Comuns:

- Erro de Permissões: Se você encontrar erros relacionados a permissões durante a instalação do Angular CLI ou das dependências, tente executar os comandos com sudo (em sistemas Unix) ou como administrador (em Windows).
  
  sudo npm install -g @angular/cli
  sudo npm install

- Erro de Dependências: Certifique-se de que todas as dependências estão corretamente instaladas. Se houver problemas, tente deletar a pasta node_modules e o arquivo package-lock.json e rodar npm install novamente.

- Porta em Uso: Se a porta 4200 já estiver em uso, você pode especificar uma porta diferente ao rodar o projeto:
  
  ng serve --port 4300

Conclusão:

Seguindo esses passos, você deverá ser capaz de rodar o projeto Angular com sucesso. Se você encontrar algum problema que não esteja coberto aqui, por favor, verifique a documentação oficial do Angular ou entre em contato comigo para assistência adicional.
