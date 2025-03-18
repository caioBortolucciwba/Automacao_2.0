Feature: Painel do cliente exportar Karina Cedente

<<<<<<< Updated upstream
  Background: Usuário realiza login no sistema do Painel do Cliente
    Given precisa fazer o login dentro do painel do cliente
    When insere as informacoes de login e senha
    And clica no botão para fazer login
    Then o usuário é redirecionado para a página inicial do painel do cliente

  Scenario: Painel do cliente Cedente
=======
  Scenario: Painel do cliente exportar Karina Cedente
>>>>>>> Stashed changes
    Given que o usuário está na página inicial
    When o usuário Painel do Cliente com os dados karina cedente exportar
    And acessa a página de Lançamentos
    And seleciona o boleto que quer exportar
    Then tenho o boleto exportado concluido
