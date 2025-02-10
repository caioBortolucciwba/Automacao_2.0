Feature: Criacao operacao duplicata mercantil

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Criacao operacao duplicata mercantil
    Given que o usuario precisa criar uma operacao duplicata mercantil
    When preencho todos os campos obrigatorios do portal
    Then tenho a operacao concluida para avancar de step