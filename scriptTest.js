const div = document.createElement('div');
div.id = 'color-palette';
document.body.appendChild(div);

for (let divs = 0; divs < 4; divs += 1) {
  const cores = document.createElement('span');
  const colorss = [('yellow'), ('blue'), ('red'), ('green'), ('pink'), ('purple')];
  const randomColors = Math.floor(Math.random() * colorss.length);
  div.appendChild(cores);
  cores.className = 'color';
  cores.innerHTML = colorss[randomColors];
  cores.style.backgroundColor = cores.innerHTML;
}

const mudaNomeSpan = document.getElementsByClassName('color');
mudaNomeSpan[0].innerHTML = 'black';
mudaNomeSpan[0].setAttribute('id', 'preto');
mudaNomeSpan[0].style.backgroundColor = mudaNomeSpan[0].innerHTML;

const cor1 = mudaNomeSpan[1];

const cor2 = mudaNomeSpan[2];

const cor3 = mudaNomeSpan[3];

const guardaCor = (corUm, corDois, corTres) => {
  const statusCor = {
    corUm: corUm.innerText,
    corDois: corDois.innerText,
    corTres: corTres.innerText,
  };
  localStorage.setItem('colorPalette', JSON.stringify(statusCor));
};

const trocaCor = () => {
  const btnTroca = document.querySelector('#button-random-color');
  btnTroca.addEventListener('click', () => {
    const colors = [('yellow'), ('blue'), ('red'), ('green'), ('pink'), ('purple')];
    const randomColor = Math.floor(Math.random() * colors.length);
    const randomColor2 = Math.floor(Math.random() * colors.length);
    const randomColor3 = Math.floor(Math.random() * colors.length);
    cor1.innerText = colors[randomColor];
    cor1.style.backgroundColor = cor1.innerText;
    cor2.innerText = colors[randomColor2];
    cor2.style.backgroundColor = cor2.innerText;
    cor3.innerText = colors[randomColor3];
    cor3.style.backgroundColor = cor3.innerText;

    guardaCor(cor1, cor2, cor3);
  });
};
trocaCor();
