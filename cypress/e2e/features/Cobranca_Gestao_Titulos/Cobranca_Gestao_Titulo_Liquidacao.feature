Feature: Validação do menu Cobrança

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

    Scenario: Validar o acesso ao menu Cobrança
    Given que o usuário está na página inicial
    When o usuário clica no menu Cobrança
    And precisa calcular o juros de uma liquidacao
    Then o sistema deve esta com calculo funcionando

    Scenario: Liquidação total de títulos vencidos com prazo superior a 30 dias
    Given que o usuário cria um título com prazo superior a 30 dias
    And  filtra o lançamento na aba "Liquidação"
    When clica em "Alterar"
    Then o sistema deve validar os cálculos gerados corretamente
    When When o usuário finaliza a operação
    Then Lançar o título no gestão de cobrança na aba de "Liquidado".
    And  registrar a liquidação no módulo "Financeiro"
    And  registrar a liquidação no módulo "Contabilidade"
    And  acionar a instrução de liquidação na "Integração Bancária"
    And  acionar a instrução de liquidação no "Custodiante"





  
