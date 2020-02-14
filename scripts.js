const btn = document.createElement('button');
btn.innerHTML = 'Clear Grid';
document.body.appendChild(btn).className = 'clear-grid';

const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover', function (e) {
      e.target.style.background = 'black';
    })
  };
};

makeRows(16, 16);

document.body.insertBefore(btn, container);

function clearGrid() {};