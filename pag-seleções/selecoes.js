

let btnNav = document.querySelector(".navbar-toggler");
let navItens = document.querySelector(".navbar-collapse");

btnNav.addEventListener("click", () => {
  navItens.classList.toggle("close");
});

const input = document.querySelector(".input");
const inputSearch = document.querySelector(".search");

let jogadoresDiv = document.querySelector('.nomeJogadores')

inputSearch.addEventListener("click", () => {
 
  fetch(
    `https://api.soccersapi.com/v2.2/teams/?user=rafaelbochibarros&token=a9c52a8c44d9af7bf92830657239bc64&t=squad&id=${input.value}`
  )
    .then((r) => {
      return r.json();
    })
    .then((c) => {
      console.log(c);

      

      for (let i = 0; i <= 25; i++) {

        

        let divJogador = document.createElement('div'); 
        divJogador.classList.add("jogador");

        let imgJogador = document.createElement('img');

        imgJogador.setAttribute('src', `https://cdn.soccersapi.com/images/soccer/players/100/${c?.data?.squad[i]?.player?.id}.png`)


          var tester= imgJogador;
          tester.onerror=imageNotFound;

    
      
      function imageNotFound() {
        imgJogador.setAttribute('src', `../imgs/user.png`)
      }

        



        let nomeJogador = document.createElement('p');
        nomeJogador.innerHTML = `${c?.data?.squad[i]?.player?.firstname} ${c?.data?.squad[i]?.player?.lastname}`

        let posicaoJogador = document.createElement('span');

        if (c?.data?.squad[i]?.position == "M") {
          posicaoJogador.innerHTML = "Posição: Meia"
        } else if (c?.data?.squad[i]?.position == "D") {
          posicaoJogador.innerHTML = "Posição: Defensor"
        } else if (c?.data?.squad[i]?.position == "F") {
          posicaoJogador.innerHTML = "Posição: Atacante"
        } else if (c?.data?.squad[i]?.position == "G") {
          posicaoJogador.innerHTML = "Posição: Goleiro"
        }

        divJogador.appendChild(imgJogador);
        divJogador.appendChild(nomeJogador);
        divJogador.appendChild(posicaoJogador);

        jogadoresDiv.appendChild(divJogador);

        if (jogadoresDiv.children.length >=26) jogadoresDiv.firstChild.remove()

      }

      jogadoresDiv.classList.remove('hide')
    });
});
