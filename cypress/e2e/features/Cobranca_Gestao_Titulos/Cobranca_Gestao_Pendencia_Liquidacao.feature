Feature: Validação do menu Cobrança - Gestão de pendencias 

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Validação do menu Cobrança - Gestão de pendencias 
    Given que o usuário está na página inicial
    When o usuário clica no menu Cobrança
    And faco a liquidacao de um titulo no gestao de pendencias
    Then o sistema deve esta com fazer a liquidacao e calculo de juros com sucesso
  
