Feature: Gestão de titulo - Edição

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Fazer edicao de titulo em gestao de cobranca
    Given que o usuário está na página inicial
    When o usuário clica no menu Cobrança
    And  precisa fazer algumas alteracao no titulo
    And  precisa fazer algumas alteracao em lotes de titulo
    Then a edicao deve ser concluida com sucesso