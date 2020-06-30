var ArrayPessoa = []
function Adicionar (){
    var Pessoa = {
        Nome: document.getElementById("nome").value,
        Idade: document.getElementById ("idade").value,
        Endereço: document.getElementById("endereco").value,
        Login: document.getElementById("login").value,
        Senha: document.getElementById("senha").value    
    }
    ArrayPessoa.push(Pessoa)
    document.getElementById("nome").value = "";
    document.getElementById("idade").value = "";
    document.getElementById("endereco").value = "";
    document.getElementById("login").value = "";
    document.getElementById("senha").value = "";
}


function Finalizar (){
        var resultado = document.getElementById("fim")
        for( let index in ArrayPessoa){            
            resultado.innerHTML += `Nome: ${ArrayPessoa[index].Nome} <br>
            Idade: ${ArrayPessoa[index].Idade} <br>
            Endereço: ${ArrayPessoa[index].Endereço}<br>
            Login: ${ArrayPessoa[index].Login} <br> 
            Senha: ${ArrayPessoa[index].Senha} <br>`          

        }
        ArrayPessoa.sort(function(a,b){
            a.Idade - b.Idade        
        })
        resultado.innerHTML += `A pessoa: <strong>${ArrayPessoa[0].Nome}</strong> possui maior idade: ${ArrayPessoa[0].Idade}. <br>`
        resultado.innerHTML += `A pessoa: <strong>${ArrayPessoa[ArrayPessoa.length-1].Nome}</strong> possui menor idade: ${ArrayPessoa[ArrayPessoa.length-1].Idade}. <br>`

    
}
    
