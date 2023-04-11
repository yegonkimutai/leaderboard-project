const tallys = [
  { name: 'Brian', score: 100 },
  { name: 'Ted', score: 20 },
  { name: 'Bob', score: 50 },
  { name: 'Jane', score: 78 },
  { name: 'Mary', score: 125 },
  { name: 'John', score: 77 },
  { name: 'Alice', score: 42 },
];

const board = document.querySelector('.scores');
const box = document.createElement('div');
box.classList.add('score-board');

const updateList = () => {
  const list = tallys.map((tally) => {
    const description = document.createElement('div');
    description.innerHTML = `
        <p> ${tally.name}: ${tally.score} </p>
        `;

    box.appendChild(description);
    return box;
  });

  list.forEach((item) => {
    board.appendChild(item);
  });
};

export default updateList;
