Feature: Gestão de titulo - abatimento

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Validar o acesso ao menu Cobrança
    Given que o usuário está na página inicial
    When o usuário clica no menu Cobrança
    And precisa efetuar um abatimento de titulo
    Then o sistema deve fazer o abatimento do titulo com sucesso
