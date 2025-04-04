Feature: Teste: Fazer cadastro operação PJ ASSINANTE

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Fazer cadastro operação PJ ASSINANTE
    Given que o usuário está na página inicial
    When o usuário clica no menu cadastro assinante pj
    And preencho todos os campos do cadastramento assinante pj
    Then tenho cadastramento concluido
