Feature: Operacional - Borderô - Criar operação importando arquivos (XML)

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Criar operacao importando arquivos XML
    Given que o usuario precisa criar uma operacao importando XML
    When importado o arquivo XML preenchendo todos os campos obrigatorio de duplicata mercantil na tela de digitacao de titulo
	And  avanco todos os steps obrigatorios da operacao com XML
    Then tenho a operacao com XML importado concluida