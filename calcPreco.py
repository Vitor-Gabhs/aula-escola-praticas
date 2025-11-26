# Define função para calcular preço final
def calcular_preco_final(nome, preco, desconto=0):
    preco_final = preco - (preco * desconto / 100)
    
    # 1. Nova linha adicionada para imprimir o Preço inicial
    # Usando o f-string e o formatador :.2f para 2 casas decimais
    print(f"Preço inicial de {nome}: R$ {preco:.2f}") 
    
    # 2. Linha original do Preço final
    print(f"Preço final de {nome}: R$ {preco_final:.2f}")

# Exemplo de uso
# 3. Valor do desconto alterado de 15 para 25
calcular_preco_final("Fone de ouvido", 200, 25)
