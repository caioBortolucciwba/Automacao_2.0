// Função para gerar um número aleatório
function gerarNumeroAleatorio(tamanho) {
    let num = '';
    for (let i = 0; i < tamanho; i++) {
      num += Math.floor(Math.random() * 10).toString();
    }
    return num;
  }
  
  // Função para calcular o dígito verificador (CPF ou CNPJ)
  function calcularDigito(base, peso) {
    let soma = 0;
    for (let i = 0; i < base.length; i++) {
      soma += parseInt(base[i], 10) * peso[i];
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  }
  
  // Função para gerar um CPF válido
  export function gerarCPF() {
    const base = gerarNumeroAleatorio(9);
    const peso1 = [10, 9, 8, 7, 6, 5, 4, 3, 2];
    const peso2 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  
    const digito1 = calcularDigito(base, peso1);
    const digito2 = calcularDigito(base + digito1, peso2);
  
    return base + digito1 + digito2;
  }
  
  // Função para gerar um CNPJ válido
  export function gerarCNPJ() {
    const base = gerarNumeroAleatorio(8) + '0001';
    const peso1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
    const peso2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  
    const digito1 = calcularDigito(base, peso1);
    const digito2 = calcularDigito(base + digito1, peso2);
  
    return base + digito1 + digito2;
  }
  