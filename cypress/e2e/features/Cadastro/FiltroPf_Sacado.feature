Feature: Teste: Operação filtro PF SACADO

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Operação filtro PF SACADO
    Given que o usuário está na página inicial
    When o usuário clica no menu filtro pf sacado
    And preencho todos os campos do filtro pf sacado
    Then tenho o filtro concluido
