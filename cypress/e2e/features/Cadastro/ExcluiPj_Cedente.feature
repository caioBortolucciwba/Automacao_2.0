Feature: Teste: Fazer operação exclui PJ CEDENTE

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Fazer operação exclui PJ CEDENTE
    Given que o usuário está na página inicial
    When o usuário clica no menu exclui pj cedente
    And exclui o pj cedente
    Then tenho exclui pj cedente concluido
