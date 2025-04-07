Feature: Teste: Operação visualiza PF FUNCIONARIO

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Operação visualiza PF FUNCIONARIO
    Given que o usuário está na página inicial
    When o usuário clica no menu visualiza pf funcionario
    And preencho todos os campos do visualiza pf funcionario
    Then tenho cadastramento concluido
