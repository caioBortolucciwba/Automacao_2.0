Feature: Criar Fórmulas de remuneração

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Criando formulas de remuneracao
    Given que o usuario precisa criar formulas de remuneracao de uma debentrures
    When acessa uma secutizadora propria e preenche as formulas
    Then formulas de remuneracao deve ser exibir como libera no painel