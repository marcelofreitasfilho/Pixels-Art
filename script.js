const divCor = document.querySelectorAll('.color');
const corPreta = divCor[0];
corPreta.style.backgroundColor = 'rgb(0, 0, 0)';
const cor1 = divCor[1];
const cor2 = divCor[2];
const cor3 = divCor[3];
const coresGeradas = document.querySelectorAll('.color:not(#preto)');
const btnCor = document.querySelector('#button-random-color');
const pBoard = document.getElementsByClassName('pixel');
const btnPixel = document.querySelector('#clear-board');

const geraCor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
cor1.style.backgroundColor = geraCor();
cor2.style.backgroundColor = geraCor();
cor3.style.backgroundColor = geraCor();

btnCor.addEventListener('click', () => {
  cor1.style.backgroundColor = geraCor();
  cor2.style.backgroundColor = geraCor();
  cor3.style.backgroundColor = geraCor();
  const coresP = [cor1.style.backgroundColor, cor2.style.backgroundColor,
    cor3.style.backgroundColor];
  localStorage.setItem('colorPalette', JSON.stringify(coresP));
});

const devolveCor = () => {
  const coresGuardadas = JSON.parse(localStorage.getItem('colorPalette'));
  for (let c = 0; c < coresGeradas.length; c += 1) {
    if (coresGuardadas) {
      coresGeradas[c].style.backgroundColor = coresGuardadas[c];
    } else {
      cor1.style.backgroundColor = geraCor();
      cor2.style.backgroundColor = geraCor();
      cor3.style.backgroundColor = geraCor();
    }
  }
};

if (localStorage.getItem('colorPalette')) {
  devolveCor();
}

const quadro = document.createElement('section');
quadro.setAttribute('id', 'pixel-board');
document.body.appendChild(quadro);

for (let pixels = 0; pixels < 25; pixels += 1) {
  const quadros = document.createElement('div');
  quadro.appendChild(quadros);
  quadros.className = 'pixel';
  quadros.style.backgroundColor = 'rgb(255, 255, 255)';
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

const pintaP = (event) => {
  const selected = document.querySelector('.color.selected');
  if (selected) {
    event.target.style.backgroundColor = selected.style.backgroundColor;
  }
};
for (let p = 0; p < pBoard.length; p += 1) {
  pBoard[p].addEventListener('click', pintaP);
}

btnPixel.addEventListener('click', () => {
  for (let p = 0; p < pBoard.length; p += 1) {
    pBoard[p].style.backgroundColor = 'white';
  }
});
