const refreshList = () => {
    const refresh = document.querySelector('.refresh');

  refresh.addEventListener('click', async () => {
    try {
      const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XnkekTLELw5pX9NuHdI1/scores`);
      const data = await response.json();

      const board = document.querySelector('.scores');
      board.innerHTML = '';

      data.result.forEach((score) => {
        const description = document.createElement('div');
        description.classList.add('score-board');
        description.textContent = `${score.user}: ${score.score}`;
        board.appendChild(description)
      });
    } catch (error) {
      console.error('Error fetching recent scores:', error);
    }
  });
}

export default refreshList;