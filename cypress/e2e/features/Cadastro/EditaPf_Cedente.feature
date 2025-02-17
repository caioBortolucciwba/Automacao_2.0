Feature: Operação edita PF cedente

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Edita PJ campos obrigatórios
    Given que o usuário está na página inicial
    When o usuário clica no menu edita pf cedente
    And edito um campo do pf cedente
    Then tenho edita pf cedente concluido
