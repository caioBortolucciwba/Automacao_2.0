Feature: Teste: Fazer operação exclui PF OUTROS

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Fazer operação exclui PF OUTROS
    Given que o usuário está na página inicial
    When o usuário clica no menu exclui pf outros
    And exclui o pf outros
    Then tenho exclui pf outros concluido
