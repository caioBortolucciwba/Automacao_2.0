Feature: Teste: Fazer cadastro operação PJ CEDENTE

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Teste: Fazer cadastro operação PJ CEDENTE
    Given que o usuário está na página inicial
    When o usuário clica no menu cadastro cedente pj
    And preencho todos os campos do cadastramento cedente pj
    Then tenho cadastramento concluido
