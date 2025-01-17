Feature: Criando uma operacao CTE bordero

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Criando uma operacao CTE bordero
    Given cria uma operacao de Conhecimento de Transporte preenchendo os campos obrigatorios
    When preencho todos os campos obrigatorios do portal
    Then tenho a operacao concluida para avancar de step