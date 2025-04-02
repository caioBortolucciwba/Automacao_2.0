Feature: Criando uma operacao CTE bordero

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Criando uma operacao CTE bordero
    Given que o usuario precisa criar uma operacao importando CTE
    When importado o arquivo CTE preenchendo todos os campos obrigatorio de CTE na tela de digitacao de titulo
	And  avanco todos os steps obrigatorios da operacao com CTE
    Then tenho a operacao com CTE importado concluida