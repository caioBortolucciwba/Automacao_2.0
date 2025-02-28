Feature: Painel do cliente Renan Fidic Cedente

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Painel do cliente Renan Fidic Cedente
    Given que o usuário está na página inicial
    When o usuário clica em configurações e preenche todos os campos do cadastramento de cliente cedente renan fidic
    And acessa Painel do Cliente com os dados renan fidic cedente
    Then tenho cadastramento renan fidic cedente concluido
