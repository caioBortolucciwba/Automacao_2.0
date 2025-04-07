Feature: Teste: Fazer operação edita PJ FORNECEDOR

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Fazer operação edita PJ FORNECEDOR
    Given que o usuário está na página inicial
    When o usuário clica no menu edita pj fornecedor
    And edito um campo do pj fornecedor
    Then tenho edita pj fornecedor concluido
