Feature: Teste: Fazer operação edita PJ SACADO

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Fazer operação edita PJ SACADO
    Given que o usuário está na página inicial
    When o usuário clica no menu edita pj sacado
    And edito um campo do pj sacado
    Then tenho edita pj sacado concluido
