Feature: Teste:Fazer cadastro operação PF assinante

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste:Fazer cadastro operação PF assinante
    Given que o usuário está na página inicial
    When o usuário clica no menu cadastro assinante
    And preencho todos os campos do cadastramento assinante
    Then tenho cadastramento concluido
