Feature: Emissão retroativa Simples de Juros

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

 Scenario: Emissão retroativa Simples de Juros Investimentos
  Given que o usuário acessa modulo de investimentos
  When emitir uma debentures retroativa simples de Juros 
  And seleciona a escrituracao de juros criada em configuracoes
  Then deve ter a emissao de juros criada e liberada 