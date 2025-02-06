Feature: Operacional - Borderô - Exclusão de Arquivos anexados

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Exclusão de Arquivos anexados
    Given que usuario acessa a empresa carteira que fez upload
    When  precisa excluir os anexos do portal
    Then  deve finalizar todo o processo de exclusao com sucesso