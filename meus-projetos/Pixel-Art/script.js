const pixel = document.getElementsByClassName('color');
let sectionContainer = document.querySelector('#section-container');
let pixelBoard = document.createElement('div');
pixelBoard.id = 'pixel-board';
sectionContainer.appendChild(pixelBoard);
let boardSize = document.querySelector('#board-size');
let generateButton = document.querySelector('#generate-board');
let colorBtn = document.querySelector('.btn-color')

let size = 5;

// function randomColors() {
//   for (let index = 2; index < pixel.length; index += 1) {
//     let rgb1 = Math.floor(Math.random() * 256 + 1);
//     let rgb2 = Math.floor(Math.random() * 256 + 1);
//     let rgb3 = Math.floor(Math.random() * 256 + 1);

//     let rgbColors = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
//     pixel[index].style.backgroundColor = rgbColors;
//   }
// }
// window.onload = randomColors;

function generateGrid(a) {
  pixelBoard.style.setProperty('--size', size);

  pixelBoard.innerHTML = '';
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    pixelBoard.appendChild(div);
    // for (let index = 0; index < a; index += 1) {
    //   let pixelElement = document.createElement('div');
    //   pixelElement.classList.add('pixel');
    //   pixelBoard.appendChild(pixelElement);
    // }
  }
  generateButton.addEventListener('click', function () {
    if (boardSize.value === '') {
      window.alert('Board inválido!');
    } else if (boardSize.value > 50) {
      boardSize.value = 50;
      size = boardSize.value;
      generateGrid(size);
      paint();
      resetChanges();
    } else if (boardSize.value < 5) {
      boardSize.value = 5;
      size = boardSize.value;
      generateGrid(size);
      paint();
      resetChanges();
    } else {
      size = boardSize.value;
      generateGrid(size);
      paint();
      resetChanges();
    }
  });
}
generateGrid(5);

function paint() {
  let pixels = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function (event) {
      let selected = document.querySelector('.selected');
      if(selected){
        let getColor = getComputedStyle(selected).backgroundColor;
        event.target.style.backgroundColor = getColor;
      }
      else{
        event.target.style.backgroundColor = colorBtn.value;
      }
    });
  }
}
paint();

function paintSelected() {
  let colors = document.querySelectorAll('.color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('mousedown', function (event) {
      let selected = document.querySelector('.selected');
      if(selected){
        selected.classList.remove('selected');
      }
      event.target.classList.add('selected');
    });
  }
}
paintSelected();

function resetChanges() {
  let resetButton = document.querySelector('#clear-board');
  let pixels = document.querySelectorAll('.pixel');
  resetButton.addEventListener('click', (event) => {
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = '';
    }
  });
}
resetChanges();


function btnColor() {
  let pixels = document.querySelectorAll('.pixel');
  let colorBtn = document.querySelector('.btn-color');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', function (event) {
      let selected = document.querySelector('.selected');
      let getColor = getComputedStyle(selected).backgroundColor;
      event.target.style.backgroundColor = getColor;
      // event.target.style.backgroundColor = colorBtn.value
    });
  }
}
paint();
colorBtn.addEventListener('input',function(){
  let selected = document.querySelector('.selected');
  if(selected){
    selected.classList.remove('selected');
  }
})