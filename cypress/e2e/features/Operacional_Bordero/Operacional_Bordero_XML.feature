Feature: Operacional - Borderô - Criar operação importando arquivos (XML)

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Criar operacao importando arquivos XML
    Given efetuada a criacao de um bordero 
    When importado um XML na tela de digitação de titulos
    Then tenho a operacao de XML concluida para avancar de step