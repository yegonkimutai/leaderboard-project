const addScore = () => {
    const scoreList = document.querySelector('.form-entry');

    scoreList.addEventListener('submit', async(e) => {
        e.preventDefault();

        const userName = document.querySelector('.name').value;
        const userScore = document.querySelector('.score').value;
        try {
            await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/XnkekTLELw5pX9NuHdI1/scores',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user: userName,
                    score: userScore,
                })
            });
            const refresh = document.querySelector('.refresh');
            refresh.click();
        } catch (error) {
        console.error('Error adding new score:', error);
        }
    })
}

export default addScore;