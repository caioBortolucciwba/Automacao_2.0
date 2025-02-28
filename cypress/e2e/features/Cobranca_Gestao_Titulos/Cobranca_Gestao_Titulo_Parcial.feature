Feature: Gestão de titulo - abatimento

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Liquidação parcial de um título
  Given que existe um título com um valor original
  When o usuário solicita a liquidação parcial do título por um valor menor que o original
  Then a liquidação parcial deve ser concluída com sucesso
  And o status do título deve ser atualizado para "Parcialmente Liquidado"