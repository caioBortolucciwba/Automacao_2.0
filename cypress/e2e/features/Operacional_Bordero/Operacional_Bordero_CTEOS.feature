Feature: Criando uma operacao CTE bordero

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Criando uma operacao CTEOS bordero
    Given efetuada a criacao de um bordero 
    When importado um arquivo de Conhecimento de Transporte OS na tela de digitação de titulos
    Then tenho a operacao de CTEOS concluida para avancar de step