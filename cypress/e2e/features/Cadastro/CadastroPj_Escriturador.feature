Feature: Cadastro operação PJ EMPRESA

  Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

  Scenario: Cadastrar PJ EMPRESA campos obrigatórios
    Given que o usuário está na página inicial
    When o usuário clica no menu cadastro escriturador pj
    And preencho todos os campos do cadastramento escriturador pj
    Then tenho cadastramento concluido
