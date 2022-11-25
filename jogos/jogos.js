let btnNav = document.querySelector('.navbar-toggler');
let navItens = document.querySelector(".navbar-collapse");

btnNav.addEventListener("click" , () => {

    navItens.classList.toggle('close')

});

let grupoA = document.querySelector(".jogosGpA");
let grupoB = document.querySelector(".jogosGpB");
let grupoC = document.querySelector(".jogosGpC");
let grupoD = document.querySelector(".jogosGpD");
let grupoE = document.querySelector(".jogosGpE");
let grupoF = document.querySelector(".jogosGpF");
let grupoG = document.querySelector(".jogosGpG");
let grupoH = document.querySelector(".jogosGpH");
let elimin = document.querySelector(".elimin");

let grupos = document.querySelectorAll('.jogos')

let navLinks = document.querySelectorAll(".jgs");

function removerActive() {
    for (let links of navLinks) {
        if (links.classList.contains("active")) links.classList.remove('active');
    }
}

for(let links of navLinks) {
    links.addEventListener('click' , () => {
        removerActive();
        links.classList.add('active')

        for(let grupo of grupos) {
            grupo.style.display = "none"
        }

        if(event.target.classList.contains('gpA')) grupoA.style.display = "flex";
        else if(event.target.classList.contains('gpB')) grupoB.style.display = "flex";
        else if(event.target.classList.contains('gpC')) grupoC.style.display = "flex";
        else if(event.target.classList.contains('gpD')) grupoD.style.display = "flex";
        else if(event.target.classList.contains('gpE')) grupoE.style.display = "flex";
        else if(event.target.classList.contains('gpF')) grupoF.style.display = "flex";
        else if(event.target.classList.contains('gpG')) grupoG.style.display = "flex";
        else if(event.target.classList.contains('gpH')) grupoH.style.display = "flex";
        else if(event.target.classList.contains('eliminatorias')) elimin.style.display = "flex";
        
    })
}








