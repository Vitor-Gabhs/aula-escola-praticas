using System;

class Produto
{
    public string Nome { get; set; }
    public double Preco { get; set; }
    public double Desconto { get; set; }

    public double CalcularPrecoFinal()
    {
        return Preco - (Preco * Desconto / 100);
    }
}

class Program
{
    static void Main()
    {
        Produto produto = new Produto
        {
            Nome = "Fone de ouvido",
            Preco = 200,
            Desconto = 25 // 1. Desconto alterado de 15 para 25
        };
        
        // 2. Nova linha adicionada para imprimir o Preço inicial
        Console.WriteLine($"Preço inicial de {produto.Nome}: R$ {produto.Preco:F2}");
        
        // 3. Linha original do Preço final
        Console.WriteLine($"Preço final de {produto.Nome}: R$ {produto.CalcularPrecoFinal():F2}");
    }
}
