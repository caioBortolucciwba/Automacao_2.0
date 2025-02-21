Feature: Gestão de Título - Liquidação em Lotes

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Liquidar títulos em lotes com sucesso
    Given que o usuário está na página inicial
    When o usuário clica no menu Cobrança e gestao de titulo
    And seleciona vários títulos para liquidação em lote
    Then o sistema deve exibir uma mensagem de confirmação