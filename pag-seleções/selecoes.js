let btnNav = document.querySelector(".navbar-toggler");
let navItens = document.querySelector(".navbar-collapse");

btnNav.addEventListener("click", () => {
  navItens.classList.toggle("close");
});

const input = document.querySelector(".input");
const inputSearch = document.querySelector(".search");

let jogadoresDiv = document.querySelector('.nomeJogadores')
let jogadores = document.querySelectorAll(".nomeJogadores p");

inputSearch.addEventListener("click", () => {
  fetch(
    `https://api.soccersapi.com/v2.2/teams/?user=rafaelbochibarros&token=a9c52a8c44d9af7bf92830657239bc64&t=squad&id=${input.value}`
  )
    .then((r) => {
      return r.json();
    })
    .then((c) => {
      console.log(c);
      for (let i = 0; i <= jogadores.length; i++) {
        if (c?.data?.squad[i]?.position == "M") {
          jogadores[
            i
          ].innerHTML = `${c.data.squad[i].player.firstname} ${c.data.squad[i].player.lastname} <span>Posição: Meia</span>`;
        } else if (c?.data?.squad[i]?.position == "D") {
          jogadores[
            i
          ].innerHTML = `${c.data.squad[i].player.firstname} ${c.data.squad[i].player.lastname} <span>Posição: Defensor</span>`;
        } else if (c?.data?.squad[i]?.position == "F") {
          jogadores[
            i
          ].innerHTML = `${c.data.squad[i].player.firstname} ${c.data.squad[i].player.lastname} <span>Posição: Atacante</span>`;
        } else if (c?.data?.squad[i]?.position == "G") {
          jogadores[
            i
          ].innerHTML = `${c.data.squad[i].player.firstname} ${c.data.squad[i].player.lastname} <span>Posição: Goleiro</span>`;
        }
      }

      jogadoresDiv.classList.remove('hide')
    });
});
