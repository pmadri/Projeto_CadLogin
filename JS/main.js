//Validação de preenchimento de login
function acessar(){
    let loginEmail = document.getElementById('loginEmail').value;
    let senhaEmail = document.getElementById('senhaEmail').value;

    //Verifica se os campos foram preenchidos
    if(!loginEmail || !senhaEmail){
        alert("Favor, preencher todos os campos de acesso");
    }else{
        window.location.href = 'cadastro.html';
    }
}

//Declara array para o projeto
var dadosLista =[];

//Função de armazenamento de nomes em Array
function salvarUser(){
    let nomeUser = document.getElementById('nomeUser').value;
    
    if(nomeUser){
        dadosLista.push(nomeUser);
        //console.log(dadosLista);
        document.getElementById('nomeUser').value = "";
    } else{
        alert("Usuário não preenchido");
    }
}

//Função para criar lista de nomes
function criaLista(){
    let tabela =  "<tr><th>Nome</th><th>Ações</th></tr>";
    for(let i = 0; i <=(dadosLista.length - 1); i++){
        tabela += "<tr><td>" +dadosLista[i] + "</td><td> </td></tr>"
        document.getElementById('tabela').innerHTML = tabela;
    }
}