const divCor = document.querySelectorAll('.color');
const cor1 = divCor[1];
const cor2 = divCor[2];
const cor3 = divCor[3];

const btnCor = document.querySelector('#button-random-color');

const geraCor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

btnCor.addEventListener('click', () => {
  cor1.style.backgroundColor = geraCor();
  cor2.style.backgroundColor = geraCor();
  cor3.style.backgroundColor = geraCor();
});

const armazenaCor = localStorage.setItem('colorPalette', JSON.stringify(divCor));

const quadro = document.createElement('section');
quadro.setAttribute('id', 'pixel-board');
document.body.appendChild(quadro);

for (let pixels = 0; pixels < 25; pixels += 1) {
  const quadros = document.createElement('div');
  quadro.appendChild(quadros);
  quadros.className = 'pixel';
  quadros.style.backgroundColor = 'white';
}

window.addEventListener('load', () => {
  const selecionaCor = (event) => {
    const selecionado = document.querySelectorAll('.selected');
    for (let cor of selecionado) {
      cor.classList.remove('selected');
    }
    event.target.classList.add('selected');
  };
  for (let c = 0; c < divCor.length; c += 1) {
    divCor[c].addEventListener('click', selecionaCor);
  }
});
