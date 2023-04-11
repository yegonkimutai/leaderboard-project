// const tallys = [
//   { name: 'Brian', score: 100 },
//   { name: 'Ted', score: 20 },
//   { name: 'Bob', score: 50 },
//   { name: 'Jane', score: 78 },
//   { name: 'Mary', score: 125 },
//   { name: 'John', score: 77 },
//   { name: 'Alice', score: 42 },
// ];


// const box = document.createElement('div');
// 

const updateList = async () => {
  try{
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XnkekTLELw5pX9NuHdI1/scores')
    const data = await response.json();

    const board = document.querySelector('.scores');
    board.innerHTML = '';

    data.result.forEach((score) => {
      const description = document.createElement('div');
      description.classList.add('score-board');
      description.textContent = `${score.user}: ${score.score}`;
      board.appendChild(description)
    })
  } catch (error) {
    console.error(error);
  }
  };

  // list.forEach((item) => {
  //   board.appendChild(item);
  // });

  //const list = tallys.map((tally) => {
    //   
    //   description.innerHTML = `
    //       <p> ${tally.name}: ${tally.score} </p>
    //       `;
  
    //   box.appendChild(description);
    //   return box;

export default updateList;
