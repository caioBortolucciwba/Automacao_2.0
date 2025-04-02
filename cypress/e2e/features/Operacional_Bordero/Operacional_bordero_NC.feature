Feature: Criando uma operacao NC bordero

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Criando uma operacao NC bordero
    Given que o usuario precisa criar uma operacao de nota comercial
    When preencho manualmente todos os campos obrigatorio de nota comercial na tela de digitacao de titulo
	And  avanco todos os steps obrigatorios da operacao nc
    Then tenho a operacao de nota comercial concluida