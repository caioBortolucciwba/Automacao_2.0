Feature: Painel do cliente Renan Fidic Sacado

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Painel do cliente Renan Fidic Sacado
    Given que o usuário está na página inicial
    When o usuário clica em configurações e preenche todos os campos do cadastramento de cliente sacado renan fidic
    And acessa Painel do Cliente com os dados renan fidic sacado
    Then tenho cadastramento renan fidic sacado concluido
