Feature: Teste: Fazer operação exclui PJ EMPRESA

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Fazer operação exclui PJ CEDENTE
    Given que o usuário está na página inicial
    When o usuário clica no menu exclui pj empresa
    And exclui o pj empresa
    Then tenho exclui pj empresa concluido
