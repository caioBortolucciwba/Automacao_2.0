Feature: Operacional - Borderô - Envio de E-mail para cedente

Background: Usuário realiza login no sistema
    Given que o usuário acessa a página de login
    When o usuário insere o "usuário" e a "senha"
    And clica no botão de login
    Then o usuário é redirecionado para a página inicial

Scenario: Borderô - Envio de E-mail para cedente
    Given  que usuario precisa fazer envio de um email ao cedente
    When   entra no topico e inicia o preenchendo do email
    Then   os emails devem ser enviado com sucesso