let senha = parseInt(prompt("crie sua senha:" ));
for (let i = 3; i >= 0; i--){
    let passagem = parseInt(prompt("digite a senha:"));
    
    if (passagem === senha){
        console.log("ok!");
        break
    } else {
        console.log("mais",i,"tentativas!");
    }
    if (i === 0){ 
    break
    }
}
