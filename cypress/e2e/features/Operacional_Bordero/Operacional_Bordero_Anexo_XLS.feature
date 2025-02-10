Feature: Operacional - Borderô - Upload de Arquivo XLS por empresa de 10 mb

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Anexar documentos do tipo XLS
    Given que o usuario precisa fazer anexo de documentos do tipo XLS
    When  seleciona a empresa carteira que precisa e faz os anexos XLS
    Then  Anexos deve ser registrado sem erro
