Feature: Criacao de recompra 

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Criacao de recompra 
    Given que o usuario precisa fazer uma recompra
    When acesso a tela do operacao e filtro a operacao
    Then a recompra e finalizada e calculada 