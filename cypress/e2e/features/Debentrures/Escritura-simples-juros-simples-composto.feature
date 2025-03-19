Feature: Escritura Simples Juros Simples e Composto

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

 Scenario: Criar Escritura Simples Juros Simples e Composto
  Given que o usuário acessa as configurações do sistema  
  When seleciona a empresa do tipo Securitizadora  
  And cria fórmulas remuneradas do tipo Juros simles e composto
  And inicia a criacao da escritura simples de Juros simles e composto
  Then a escritura simples juros simples e composto deve ser configurada com sucesso  