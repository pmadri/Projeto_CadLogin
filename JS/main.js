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