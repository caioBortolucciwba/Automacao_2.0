Feature: Criando uma operacao CTE bordero

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Criando uma operacao CTEOS bordero
    Given que o usuario precisa criar uma operacao importando CTEOS
    When importado o arquivo CTEOS preenchendo todos os campos obrigatorio de CTEOS na tela de digitacao de titulo
	And  avanco todos os steps obrigatorios da operacao com CTEOS
    Then tenho a operacao com CTEOS importado concluida