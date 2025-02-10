Feature: Validação de liquidacao em lote 

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Validação de liquidacao em lote 
    Given que o usuário está na página inicial
    When o usuário clica no menu Cobrança
    And precisa calcular o juros e multa de uma liquidacao em lotes
    Then o sistema fazer o calculo sem erro