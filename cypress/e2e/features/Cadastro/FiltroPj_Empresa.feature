Feature: Teste: Operação filtro PJ EMPRESA

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Operação filtro PJ EMPRESA
    Given que o usuário está na página inicial
    When o usuário clica no menu filtro pj empresa
    And preencho todos os campos do filtro pj empresa
    Then tenho o filtro concluido
