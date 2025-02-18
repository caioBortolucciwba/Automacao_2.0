Feature: Painel do cliente Cedente

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Painel do cliente Cedente
    Given que o usuário está na página inicial
    When o usuário clica em configurações
    And preenche todos os campos do cadastramento de cliente cedente karina
    And acessa Painel do Cliente com od dados karina cedente
    Then tenho cadastramento cedente concluido
