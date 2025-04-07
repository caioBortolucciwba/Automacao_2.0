Feature: Teste: Fazer operação edita PJ PROSPECT

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Fazer operação edita PJ PROSPECT
    Given que o usuário está na página inicial
    When o usuário clica no menu edita pj prospect
    And edito um campo do pj prospect
    Then tenho edita pj prospect concluido
