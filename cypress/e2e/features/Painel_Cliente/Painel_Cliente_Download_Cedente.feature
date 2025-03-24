Feature: Painel do cliente download Cedente

  Background: Usuário realiza login no sistema do Painel do Cliente
    Given precisa fazer o login dentro do painel do cliente
    When insere as informacoes de login e senha
    And clica no botão para fazer login
    Then o usuário é redirecionado para a página inicial do painel do cliente

  Scenario: Painel do cliente Cedente

  Scenario: Painel do cliente download Cedente
    Given que o usuário está na página inicial do painel do cliente
    When o usuário Painel do Cliente com os dados cedente download
    And acessa a página de Lançamentos, seleciona o boleto para download
    Then tenho o boleto baixado concluido
