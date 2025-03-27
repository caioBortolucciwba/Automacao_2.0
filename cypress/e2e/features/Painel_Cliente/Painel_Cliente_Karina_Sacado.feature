Feature: Painel do cliente Karina Sacado

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Painel do cliente Karina Sacado
    Given que o usuário está na página inicial
    When o usuário clica em configurações e preenche todos os campos do cadastramento de cliente sacado karina
    And acessa Painel do Cliente com os dados karina sacado
    Then tenho cadastramento sacado concluido
