// Ativar fadeIn Passos
var displayPassos = document.getElementById('passos-aling');
var passos = document.getElementById('passos');

passos.addEventListener("mouseover", function(){
    displayPassos.id= 'block';
    displayPassos.classList.remove("none");
    displayPassos.className='fadeIn';
})

// Ativar fade in Vantagens
var displayVantagens = document.getElementById("vantagens-itens");
var vantagens = document.getElementById("vantagens");

vantagens.addEventListener("mouseover", function(){
    displayVantagens.id= 'block';
    displayVantagens.classList.add("fadeIn");
    displayVantagens.classList.remove("none");
    
})