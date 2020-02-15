// Set up the fixed canvas
const container = document.createElement('div');
container.setAttribute('id', 'container');
container.style.display = 'grid';
container.style.margin = 'auto';
container.style.height = '920px';
container.style.width = '920px';
container.style.backgroundColor = 'black';
document.body.appendChild(container);

// Button setup & functionality
const button = document.createElement('button');
button.setAttribute('id', 'new-grid');
button.innerHTML = 'Create new grid';
button.style.margin = '25px auto';
button.style.display = 'block';
document.body.appendChild(button);
document.body.insertBefore(button, container)

button.addEventListener('click', () => {
  const removeElements = (elms) => elms.forEach(el => el.remove());
  removeElements( document.querySelectorAll(".cell") );
  let colRow = window.prompt('Enter a number for the amount of columns/rows of the new grid: ', 16);
  createGrid(colRow, colRow);
});

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Color changer
container.addEventListener('mouseover', (e) => {
  currentColor = e.target.style.backgroundColor;
  currentOpacity = e.target.style.opacity;
  if (currentColor == 'white') {
    e.target.style.backgroundColor = `hsl(${getRandomIntInclusive(0, 360)}, 100%, 50%)`;
  } else if (currentOpacity > 0) {
    e.target.style.opacity = currentOpacity - 0.1;
  }
});

// The main function
function createGrid(cols, rows) {
  const dim = (cols * rows);
  container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

  for (let i =0; i < dim; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('id', (i+1));
    cell.setAttribute('class', 'cell');
    cell.style.height = '100%';
    cell.style.width = '100%';
    cell.style.padding = 'auto';
    cell.style.border = '0.5px solid black';
    cell.style.backgroundColor = 'white';
    cell.style.opacity = '1';
    container.appendChild(cell);
  }
}

createGrid(16, 16);