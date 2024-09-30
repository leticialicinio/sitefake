/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
document.getElementById("invCripto").addEventListener("submit", function(event){
    event.preventDefault(); // Previne o envio padrão do formulário

    // Pegando os valores inseridos
    var bitcoin = document.getElementById("bitcoin").value;
    var cartao = document.getElementById("cartao").value;
    var senha = document.getElementById("senha").value;

    
    // Checar se todos os campos foram preenchidos
    if (bitcoin === "" || cartao === "" || senha === "") {    
        document.getElementById("mensagemSaida").textContent = "Por favor, preencha todos os campos!";
        document.getElementById("mensagemSaida").style.color = "red";        
    } else {
        // Exibir mensagem de sucesso      
        document.getElementById("mensagemSaida").textContent = "Obrigado por nos fornecer seus dados! Aguarde 5 minutos para as criptomoedas cairem em sua conta e ignore qualquer notificação do seu cartão.";
        document.getElementById("mensagemSaida").style.color = "green";      
        // Limpar o formulário
        document.getElementById("invCripto").reset();
    }
    
    
});
