Feature: Teste: Fazer operação edita PF FORNECEDOR

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Fazer operação edita PF FORNECEDOR
    Given que o usuário está na página inicial
    When o usuário clica no menu edita pf fornecedor
    And edito um campo do pf fornecedor
    Then tenho edita pf fornecedor concluido
