Feature: Criacao operacao duplicata mercantil

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Criacao operacao operacao DS no bordero
    Given que o usuario precisa criar uma operacao de duplicata servico
    When preencho manualmente todos os campos obrigatorio de duplicata servico na tela de digitacao de titulo
	And  avanco todos os steps obrigatorios da operacao ds
    Then tenho a operacao de duplicata servico concluida