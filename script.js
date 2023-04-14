const div = document.createElement('div');
div.id = 'color-palette';
document.body.appendChild(div);

for (let divs = 0; divs < 4; divs += 1) {
  const cores = document.createElement('span');
  div.appendChild(cores);
  cores.className = 'color';
}

const mudaNomeSpan = document.getElementsByClassName('color');
mudaNomeSpan[0].innerHTML = 'black';
mudaNomeSpan[0].setAttribute('id', 'preto');
mudaNomeSpan[0].style.backgroundColor = mudaNomeSpan[0].innerHTML;

const cor1 = mudaNomeSpan[1];
cor1.innerHTML = 'red';
cor1.style.backgroundColor = cor1.innerHTML;

const cor2 = mudaNomeSpan[2];
cor2.innerHTML = 'yellow';
cor2.style.backgroundColor = cor2.innerHTML;

const cor3 = mudaNomeSpan[3];
cor3.innerHTML = 'blue';
cor3.style.backgroundColor = cor3.innerHTML;

const guardaCor = (corUm, corDois, corTres) => {
  const statusCor = {
    corUm: corUm.innerText,
    corDois: corDois.innerText,
    corTres: corTres.innerText,
  };
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
localStorage.setItem('colorPalette', guardaCor);
