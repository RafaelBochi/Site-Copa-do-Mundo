let btnNav = document.querySelector('.navbar-toggler');
let navItens = document.querySelector(".navbar-collapse");

btnNav.addEventListener("click" , () => {

    navItens.classList.toggle('close')

});
