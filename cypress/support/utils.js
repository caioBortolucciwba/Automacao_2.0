// Função para gerar um número aleatório
export function gerarNumeroAleatorio(tamanho) {
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

// Função para calcular o dígito verificador do RG
function calcularDigitoRG(base) {
  const peso = [2, 3, 4, 5, 6, 7, 8, 9];
  let soma = 0;

  for (let i = 0; i < base.length; i++) {
    soma += parseInt(base[i], 10) * peso[i];
  }

  const resto = soma % 11;
  if (resto === 0) return '0';
  if (resto === 1) return 'X';
  return (11 - resto).toString();
}

// Função para gerar um RG válido
export function gerarRG() {
  const base = gerarNumeroAleatorio(8); // RG tem 8 dígitos base
  const digito = calcularDigitoRG(base);
  return base + digito;
}

export function geradorDeVencimentoValido() {
  const vencimento = new Date(); 

  vencimento.setDate(vencimento.getDate() + 30); 
  const dia = vencimento.getDate().toString(); 
  const mes = vencimento.toLocaleString('pt-BR', { month: 'long' });
  const ano = vencimento.getFullYear().toString(); 

  return `${dia} de ${mes} de ${ano}`; 
}
