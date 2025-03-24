Feature: Criacao operacao duplicata mercantil

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Criacao operacao operacao DS no bordero
    Given que o usuario precisa criar uma operacao DS no bordero
    When cria uma operacao de duplicata de servico preenchendo os campos obrigatorios
    Then tenho a operacao ds concluida para avancar de step