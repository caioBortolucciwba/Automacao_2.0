Feature: Criando uma operacao NC bordero

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Criando uma operacao NC bordero
    Given que o usuario precisa criar uma operacao NC no bordero
    When cria uma operacao de Nota Comercial preenchendo os campos obrigatorios
    Then tenho a operacao concluida para avancar de step