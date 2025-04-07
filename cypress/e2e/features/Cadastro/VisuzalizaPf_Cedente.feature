Feature: Teste: Operação visualiza PF SACADO

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Operação visualiza PF SACADO
    Given que o usuário está na página inicial
    When o usuário clica no menu visualiza pf cedente
    And preencho todos os campos do visualiza pf cedente
    Then tenho cadastramento concluido
