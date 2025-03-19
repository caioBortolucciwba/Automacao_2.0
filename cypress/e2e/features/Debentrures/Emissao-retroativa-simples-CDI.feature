Feature: Emissão retroativa Simples de CDI  

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

 Scenario: Emissão retroativa Simples de CDI Investimentos
  Given que o usuário acessa modulo de investimento
  When emitir uma debentures retroativa simples de CDI 
  And seleciona a escrituracao criada em configuracao
  Then deve ter a emissao criada e liberada 