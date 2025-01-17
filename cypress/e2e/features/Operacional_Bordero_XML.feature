Feature: Operacional - Borderô - Criar operação importando arquivos (XML)

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Criar operacao importando arquivos XML
    Given efetuada a criacao de um bordero importando xml
    When faz a importacao no mesmo cnpj e confere
    Then tenho a operacao concluida para avancar de step