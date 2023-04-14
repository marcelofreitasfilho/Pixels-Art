
const div = document.createElement('div');
div.id = 'color-palette';
document.body.appendChild(div);

for (let divs = 0; divs < 4; divs += 1) {
  const cores = document.createElement('span');
  div.appendChild(cores);
  cores.className = 'color';
}

const todasC = document.getElementsByClassName('color');
todasC.style.backgroundColor = todasC.innerHTML;
todasC[0].innerHTML = 'black';
