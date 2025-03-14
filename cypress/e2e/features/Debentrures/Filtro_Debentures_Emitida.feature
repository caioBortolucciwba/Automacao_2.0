Feature: Filtro de debentures emitida 

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

 Scenario: Filtro de debentures emitida 
  Given que o usuário precisa filtrar uma debentures emitida 
  When dentro do filtro coloca as informacoes para o sistema buscar
  Then o sistema deve exibir as informacoes conforme a busca  