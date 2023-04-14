const div = document.createElement('div');
div.id = 'color-palette';
document.body.appendChild(div);

for (let divs = 0; divs < 4; divs += 1) {
  const cores = document.createElement('span');
  div.appendChild(cores);
  cores.className = 'color';
  cores.innerText = divs;
}

const mudaNomeSpan = document.getElementsByClassName('color');
mudaNomeSpan[0].innerHTML = 'vermelho';
mudaNomeSpan[0].setAttribute('id', 'vermelho');

mudaNomeSpan[1].innerHTML = 'amarelo';
mudaNomeSpan[1].setAttribute('id', 'amarelo');

mudaNomeSpan[2].innerHTML = 'azul';
mudaNomeSpan[2].setAttribute('id', 'azul');

mudaNomeSpan[3].innerHTML = 'preto';
mudaNomeSpan[3].setAttribute('id', 'preto');
