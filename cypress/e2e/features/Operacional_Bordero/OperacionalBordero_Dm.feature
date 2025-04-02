Feature: Criacao operacao duplicata mercantil

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

    Scenario: Criacao operacao duplicata mercantil
    Given que o usuario precisa criar uma operacao de duplicata mercantil
    When preencho manualmente todos os campos obrigatorio de duplicata mercantil na tela de digitacao de titulo
	And  avanco todos os steps obrigatorios da operacao dm
    Then tenho a operacao de duplicata mercantil concluida

