Feature: Operação visualiza PF assinante

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Visualiza PF campos obrigatórios
    Given que o usuário está na página inicial
    When o usuário clica no menu visualiza pf assinante
    And preencho todos os campos do visualiza pf assinante
    Then tenho cadastramento concluido
