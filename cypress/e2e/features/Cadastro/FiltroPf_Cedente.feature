Feature: Teste: Operação filtro PF CEDENTE

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Operação filtro PF CEDENTE
    Given que o usuário está na página inicial
    When o usuário clica no menu filtro pf cedente
    And preencho todos os campos do filtro pf cedente
    Then tenho o filtro concluido
