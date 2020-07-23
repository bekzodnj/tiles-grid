let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
//1536x722

console.log(windowHeight, windowWidth);

let tileWidth = windowWidth / 5;
let tileHeight = windowHeight / 5;

console.log(tileWidth, tileHeight);
window.onresize = function () {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;

  tileWidth = windowWidth / 5;
  tileHeight = windowHeight / 5;
};

const tile_container = document.getElementsByClassName('tile-container')[0];

const tilesArr = [];
for (let i = 0; i < 5; i++) {
  tilesArr.push(new Array(5));
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    tilesArr[i][j] = document.createElement('div');
    tilesArr[i][j].classList.add('tile');
    tile_container.appendChild(tilesArr[i][j]);
  }
}

let row = 0;
let col = 0;
let myTimer = setInterval(paintTile, 200);

function paintTile() {
  if (row > 4) {
    clearInterval(myTimer);
  } else {
    if (col > 4) {
      row++;
      col = 0;
      console.log('Timer', myTimer);
    } else {
      tilesArr[row][col].style.backgroundColor = 'slateblue';
      col++;
      console.log('Timer', myTimer);
    }
  }
}
