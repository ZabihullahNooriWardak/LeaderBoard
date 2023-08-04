const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0pNrfjBwCKXqbjF87mV/scores/';
const addData = async (name, score) => {
  const dataToSend = {
    user: name,
    score,
  };

  try {
    const response = await fetch(url, {
      method: 'post',
      body: JSON.stringify(dataToSend),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const catchData = async () => {
  const data = await fetch(url);
  const parsedData = await data.json();
  return parsedData;
};

const displayAllScore = async () => {
  try {
    const allDataObject = await catchData();
    const arrayOfAllData = allDataObject.result.sort((a, b) => b.score - a.score);
    const divAllScore = document.querySelector('.allScores');
    divAllScore.innerHTML = '';
    for (let i = 0; i < arrayOfAllData.length; i += 1) {
      const div = `<div id='dynamic'><p>${arrayOfAllData[i].user}</p><p>${arrayOfAllData[i].score}</p></div>`;
      divAllScore.insertAdjacentHTML('beforeend', div);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};

export { addData, catchData, displayAllScore };
