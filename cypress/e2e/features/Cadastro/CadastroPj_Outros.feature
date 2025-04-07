Feature: Teste: Fazer cadastro operação PJ OUTROS

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Fazer cadastro operação PJ OUTROS
    Given que o usuário está na página inicial
    When o usuário clica no menu cadastro outros pj
    And preencho todos os campos do cadastramento outros pj
    Then tenho cadastramento concluido
