class ContaBancaria {
  constructor(saldo = 0) {
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      console.log('o saque foi um sucesso! o saldo é:' + this.saldo);
    } else {
      console.log("Saldo insuficiente");
    }
  }
}

const minhaConta = new ContaBancaria(80);
minhaConta.sacar(55);
