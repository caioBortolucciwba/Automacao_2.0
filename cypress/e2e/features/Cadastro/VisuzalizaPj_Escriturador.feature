Feature: Teste: Operação visualiza PJ ESCRITURADOR

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Operação visualiza PJ ESCRITURADOR
    Given que o usuário está na página inicial
    When o usuário clica no menu visualiza pj escriturador
    And preencho todos os campos do visualiza pj escriturador
    Then tenho cadastramento concluido
