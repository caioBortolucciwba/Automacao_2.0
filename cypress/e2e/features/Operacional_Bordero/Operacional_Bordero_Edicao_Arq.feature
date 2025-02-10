Feature: Operacional - Borderô - Edição de Arquivos anexados

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Edição de Arquivos anexados
    Given que usuario acessa a empresa carteira que fez upload
    When  precisa alterar o anexo na acao de edicao
    Then  deve finalizar todo o processo de edicao com sucesso