Feature: Operação pesquisa PF investidor

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Pesquisa PF Investidor campos obrigatórios
    Given que o usuário está na página inicial
    When o usuário clica no menu cadastro investidor
    And preencho todos os campos de cadastramento investidor
    Then tenho cadastramento concluido
