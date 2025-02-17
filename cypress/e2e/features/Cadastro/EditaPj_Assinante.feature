Feature: Operação edita PJ assinante

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Edita PJ campos obrigatórios
    Given que o usuário está na página inicial
    When o usuário clica no menu edita pj assinante
    And edito um campo do pj assinante
    Then tenho edita pj assinante concluido
