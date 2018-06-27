//fadeIn Passos
var displayPassos = document.getElementById('passos-aling');
var passos = document.getElementById('passos');

//fade in Vantagens
var displayVantagens = document.getElementById("vantagens-itens");
var vantagens = document.getElementById("vantagens");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        displayPassos.id = 'block';
        displayPassos.classList.remove("none");
        displayPassos.classList.add("fadeIn");
    }
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        displayVantagens.id = 'block';
        displayVantagens.classList.remove("none");
        displayVantagens.classList.add("fadeIn");
    }
}

// Mapa
var btn = document.getElementById("btn");
var map = document.getElementById("map");

console.log(btn);

btn.addEventListener('click', function(e){
    map.classList.toggle('map-none');
})