Feature: Teste: Fazer operação edita PJ CEDENTE

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Fazer operação edita PJ CEDENTE
    Given que o usuário está na página inicial
    When o usuário clica no menu edita pj cedente
    And edito um campo do pj cedente
    Then tenho edita pj cedente concluido
