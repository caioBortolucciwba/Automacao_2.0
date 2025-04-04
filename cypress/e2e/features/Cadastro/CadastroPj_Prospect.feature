Feature: Cadastro operação PJ PROSPECT

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Cadastrar PJ PROSPECT campos obrigatórios
    Given que o usuário está na página inicial
    When o usuário clica no menu cadastro prospect pj
    And preencho todos os campos do cadastramento prospect pj
    Then tenho cadastramento concluido
