function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
            elemento.play();
        }
    else {
        console.log('Elemento Não encontrado ou sletor inválido');
    }
}


//Referências
const listaDeTeclas = document.querySelectorAll('.tecla');

//equanto       //toda a lista de teclas até o maior no caso 9 teclas
for (let contador = 0; contador < listaDeTeclas.length; contador++) {  //com for o let pode ficar dentro ao inves do while

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;   //template string    ``CRASE

//console.log(idAudio);
    tecla.onclick = function () {
        tocaSom(idAudio);
    }
   
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

//contador = contador + 1;   virou contador++ linha 9

//console.log(listaDeTeclas);
}
