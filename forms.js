const nomesClientes = [];
const emailsUnicos = new Set();
const telefonesPorId = new Map();

const NUM_ELEMENTOS = 10;

// Coleta de Dados - Nomes (Array)
for (let i = 0; i < NUM_ELEMENTOS; i++) {
    let nome = prompt(`[Nome ${i + 1}/${NUM_ELEMENTOS}] Digite o nome do cliente:`);
    if (nome) {
        nomesClientes.push(nome.trim());
    } else {
        i--;
    }
}

// Coleta de Dados - E-mails (Set)
let countEmails = 0;
while (countEmails < NUM_ELEMENTOS) {
    let email = prompt(`[E-mail ${countEmails + 1}/${NUM_ELEMENTOS}] Digite um e-mail único do cliente:`);
    if (email) {
        const tamanhoInicial = emailsUnicos.size;
        emailsUnicos.add(email.trim().toLowerCase());

        if (emailsUnicos.size > tamanhoInicial) {
            countEmails++;
        } else {
            console.log(`E-mail: "${email.trim()}" já existe. Insira um e-mail diferente.`);
        }
    }
}

// Coleta de Dados - IDs e Telefones (Map)
for (let i = 0; i < NUM_ELEMENTOS; i++) {
    let id;
    let telefone;
    let idValido = false;

    while (!idValido) {
        let idInput = prompt(`[ID ${i + 1}/${NUM_ELEMENTOS}] Digite o ID único do cliente:`);
        if (idInput && !telefonesPorId.has(idInput.trim())) {
            id = idInput.trim();
            idValido = true;
        } else if (telefonesPorId.has(idInput.trim())) {
            console.log(`ID: "${idInput.trim()}" já está cadastrado. Insira um ID diferente.`);
        }
    }

    do {
        telefone = prompt(`[Telefone ${i + 1}/${NUM_ELEMENTOS}] Digite o telefone para o ID ${id}:`);
    } while (!telefone);

    telefonesPorId.set(id, telefone.trim());
}

// Exibição dos Dados

console.log("\n\nLista de Nomes Cadastrados:");
if (nomesClientes.length > 0) {
    nomesClientes.forEach((nome, index) => {
        console.log(`[${index + 1}] Nome: ${nome}`);
    });
} else {
    console.log("Nenhum nome cadastrado.");
}
console.log(`Total: ${nomesClientes.length}`);


console.log("\nConjunto de E-mails Únicos:");
if (emailsUnicos.size > 0) {
    let emailIndex = 1;
    emailsUnicos.forEach(email => {
        console.log(`[${emailIndex++}] E-mail: ${email}`);
    });
} else {
    console.log("Nenhum e-mail único cadastrado.");
}
console.log(`Total: ${emailsUnicos.size}`);


console.log("\nMapa de Telefones por ID:");
if (telefonesPorId.size > 0) {
    let mapIndex = 1;
    telefonesPorId.forEach((telefone, id) => {
        console.log(`[${mapIndex++}] ID: ${id} -> Telefone: ${telefone}`);
    });
} else {
    console.log("Nenhum par ID-Telefone cadastrado.");
}
console.log(`Total: ${telefonesPorId.size}`);

console.log("\nGerenciador de Dados Concluído!");
