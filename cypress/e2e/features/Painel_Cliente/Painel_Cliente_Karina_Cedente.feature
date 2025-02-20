Feature: Painel do cliente Karina Cedente

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Painel do cliente Cedente
    Given que o usuário está na página inicial
    When o usuário clica em configurações e preenche todos os campos do cadastramento de cliente cedente karina
    And acessa Painel do Cliente com os dados karina cedente
    Then tenho cadastramento cedente concluido
