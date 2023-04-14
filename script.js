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

const cor1 = mudaNomeSpan[1];
cor1.innerHTML = 'red';
cor1.style.backgroundColor = cor1.innerHTML;

const cor2 = mudaNomeSpan[2];
cor2.innerHTML = 'yellow';
cor2.style.backgroundColor = cor2.innerHTML;

const cor3 = mudaNomeSpan[3];
cor3.innerHTML = 'blue';
cor3.style.backgroundColor = cor3.innerHTML;

const trocaCor = () => {
  const btnTroca = document.querySelector('#button-random-color');
  btnTroca.addEventListener('click', () => {
    const colors = [('yellow'), ('blue'), ('red'), ('green'), ('pink'), ('purple')];
    const randomColor = Math.floor(Math.random() * colors.length);
    const randomColor2 = Math.floor(Math.random() * colors.length);
    const randomColor3 = Math.floor(Math.random() * colors.length);
    cor1.innerHTML = colors[randomColor];
    cor1.style.backgroundColor = cor1.innerHTML;
    cor2.innerHTML = colors[randomColor2];
    cor2.style.backgroundColor = cor2.innerHTML;
    cor3.innerHTML = colors[randomColor3];
    cor3.style.backgroundColor = cor3.innerHTML;
  });
};
trocaCor();

localStorage.setItem('colorPalette', );
