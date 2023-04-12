const updateList = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/yAtQ05PVzJj2vldtLJCO/scores');
  const data = await response.json();

  const board = document.querySelector('.scores');
  board.innerHTML = '';

  data.result.forEach((score) => {
    const description = document.createElement('div');
    description.classList.add('score-board');
    description.textContent = `${score.user}: ${score.score}`;
    board.appendChild(description);
  });
};

export default updateList;
