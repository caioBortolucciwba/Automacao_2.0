Feature: Teste: Operação filtro PF FORNECEDOR

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Operação filtro PF FORNECEDOR
    Given que o usuário está na página inicial
    When o usuário clica no menu filtro pf fornecedor
    And preencho todos os campos do filtro pf fornecedor
    Then tenho o filtro concluido
