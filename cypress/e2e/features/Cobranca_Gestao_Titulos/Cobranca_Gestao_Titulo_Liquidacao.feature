Feature: Validação do menu Cobrança

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

     Scenario: Liquidação total de títulos vencidos com prazo superior a 30 dias
    Given que o usuario crie um titulo no bordero com prazo superior a 30 dias
    And  filtre o título na aba Liquidacao
    When ser preenchido todos os campos obrigatorios e gerar os calculos da liquidacao
    Then o sistema deve gerar os calculos corretamente
    When o usuario finaliza a operacao
    Then o status do titulo deve ser alterado para liquidado
    And  o valor de pagamento na coluna valor pago deve ser preenchido com o valor atualizado





  
