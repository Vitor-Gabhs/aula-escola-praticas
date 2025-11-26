public class Produto {
    String nome;
    double preco;
    double desconto;

    public Produto(String nome, double preco, double desconto) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }

    public double calcularPrecoFinal() {
        return preco - (preco * desconto / 100);
    }

    public static void main(String[] args) {
        // 1. Desconto alterado de 15 para 25
        Produto produto = new Produto("Fone de ouvido", 200, 25);
        
        // 2. Nova linha adicionada para imprimir o Preço inicial
        System.out.printf("Preço inicial de %s: R$ %.2f%n", produto.nome, produto.preco);
        
        // 3. Linha para imprimir o Preço final
        System.out.printf("Preço final de %s: R$ %.2f%n", produto.nome, produto.calcularPrecoFinal());
    }
}
