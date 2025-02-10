Feature: Operação filtro PJ Sacado

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Cadastrar PF campos obrigatórios
    Given que o usuário está na página inicial
    When o usuário clica no menu filtro pj sacado
    And preencho todos os campos do filtro pj sacado
    Then tenho cadastramento concluido
