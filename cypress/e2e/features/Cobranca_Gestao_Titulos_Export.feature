Feature: Gestão de Títulos - Validação de a Exportação CSV de todas colunas/Colunas selecionadas.

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Exportacao CSV de todas colunas/Colunas selecionadas
    Given que o usuário está na página inicial
    When o usuário clica no menu Cobrança
    And  precisa fazer a Exportacao de CSV de todas colunas 
    Then a Exportacao deve ser concluida com sucesso