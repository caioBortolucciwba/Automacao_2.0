Feature: Operacional - Borderô - Criar operação mista

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Borderô - Criar operação mista
    Given que o usuario precisa criar uma operacao de Mista
    When digito manualmente titulos de carteiras distintas
	And  avanco todos os steps obrigatorios da operacao mista
    Then tenho a operacao de mista concluida

    