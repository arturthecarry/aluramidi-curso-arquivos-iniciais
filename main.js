function tocaSom (seletorAudio) {
    const elemento =  document.querySelector(seletorAudio).play();

    if (elemento === null) {
     alert ('Elemento não encontrado')
    }

    if (elemento != null && elemento.localName === 'audio'){
          elemento.play();
     }

     else {
          console.log('Elemento n encontrado')
     }
    }
 

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador< listaDeTeclas.length; contador++) {

     const tecla = listaDeTeclas[contador];
     const instrumento = tecla.classList[1];
     const idAudio = `#som_${instrumento}`;     //template string;

     //console.log(idAudio)

     listaDeTeclas[contador].onclick = function () {
          tocaSom(idAudio);
     };

     console.log(contador);

     tecla.onkeydown = function(evento) {

          console.log(evento.code === 'space' || envento.code === 'Enter')

          if (evento.code === 'Space ')
          tecla.classList.add('ativa')

     }

     tecla.onkeyup = function() {
          tecla.classList.remove('ativa')
     }
}