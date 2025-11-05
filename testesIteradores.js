const clientes = [
    "Ana Silva",
    "João Pereira",
    "Maria Souza",
    "Pedro Santos",
    "Mariana Costa"
];

console.log("--- Processo de Envio de Mensagens de Agradecimento ---");

for (const nome of clientes) {
    const mensagem = `Enviando e-mail de agradecimento para ${nome}.`;
    console.log(mensagem);
}

console.log("--- Processo Concluído ---");

const compras = [
    { cliente: "Ana", dataCompra: "2025-10-15", valor: 50.00 },
    { cliente: "João", dataCompra: "2025-10-25", valor: 120.50 },
    { cliente: "Maria", dataCompra: "2025-09-01", valor: 300.00 },
    { cliente: "Pedro", dataCompra: "2025-11-01", valor: 75.90 },
    { cliente: "Luiza", dataCompra: "2025-10-28", valor: 25.00 },
    { cliente: "Carlos", dataCompra: "2025-08-20", valor: 450.00 },
    { cliente: "Rafaela", dataCompra: "2025-11-03", valor: 15.00 },
    { cliente: "Gustavo", dataCompra: "2025-09-15", valor: 99.00 },
    { cliente: "Helena", dataCompra: "2025-10-20", valor: 210.00 },
    { cliente: "Daniel", dataCompra: "2025-11-02", valor: 88.00 },
    { cliente: "Bia", dataCompra: "2025-10-05", valor: 65.00 }
];

const hoje = new Date("2025-11-03");
const trintaDiasAtras = new Date(hoje);
trintaDiasAtras.setDate(hoje.getDate() - 30);

console.log("--- Clientes com compras nos últimos 30 dias (a partir de 03/11/2025) ---");

compras.forEach(compra => {
    const dataCompra = new Date(compra.dataCompra);

    if (dataCompra >= trintaDiasAtras && dataCompra <= hoje) {
        console.log(`Cliente: ${compra.cliente} - Data da Compra: ${compra.dataCompra} - Valor: R$ ${compra.valor.toFixed(2)}`);
    }
});

console.log("--- Fim da lista ---");

const nomesComDuplicados = [
    "Carlos",
    "Ana",
    "João",
    "Ana",
    "Pedro",
    "Carlos",
    "Maria",
    "João",
    "Luiza"
];

console.log("Lista Original com Duplicados:");
console.log(nomesComDuplicados);

const setDeNomesUnicos = new Set(nomesComDuplicados);

console.log("\nProcesso de Exibição de Nomes Únicos (usando iterador for...of no Set):");

for (const nomeUnico of setDeNomesUnicos) {
    console.log(`Nome Único Encontrado: ${nomeUnico}`);
}

console.log("--- Fim da Lista de Nomes Únicos ---");
