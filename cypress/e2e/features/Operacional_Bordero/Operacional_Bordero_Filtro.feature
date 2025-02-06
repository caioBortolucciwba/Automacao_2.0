Feature: Filtro do bordero

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Efetuar filtro do bordero
    Given que o usuario precisa fazer filtro no bordero
    When  faco filtro simples com algumas informacoes 
    And   faco filtro completo com todas informacoes
    Then  tem o resultado dos filtros