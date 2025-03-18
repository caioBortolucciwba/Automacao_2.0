Feature: Painel do cliente exportar Karina Cedente

  Background: Usuário realiza login no sistema do Painel do Cliente
    Given que o usuário acessa a página de login do Painel do Cliente
    When o usuário insere o "usuário1" e a "senha1"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial do painel do cliente

  Scenario: Painel do cliente Cedente
    Given que o usuário está na página inicial
    When o usuário Painel do Cliente com os dados karina cedente exportar
    And acessa a página de Lançamentos
    And seleciona o boleto que quer exportar
    Then tenho o boleto exportado concluido
