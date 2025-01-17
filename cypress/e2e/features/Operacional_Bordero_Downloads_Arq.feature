Feature: Operacional - Borderô - Downloads de Arquivos anexados

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Downloads de Arquivos anexados
    Given que usuario acessa a empresa carteira que fez upload
    When  precisa fazer downloads dos anexos do portal
    Then  deve finalizar todo o processo de downloads com sucesso