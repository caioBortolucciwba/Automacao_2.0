Feature: Configuração de Escritura Simples  

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

 Scenario: Criar fórmulas remuneradas e escritura simples para debentures
  Given que o usuário acessa as configurações do sistema  
  When seleciona a empresa do tipo Securitizadora  
  And cria fórmulas remuneradas do tipo CDI
  And inicia a criacao da escritura simples de CDI
  Then a escritura simples deve ser configurada com sucesso  