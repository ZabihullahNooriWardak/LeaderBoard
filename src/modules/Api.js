const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0pNrfjBwCKXqbjF87mV/scores/';
const addData = function (name, score) {
  const DataToSend = {
    user: name,
    score,
  };
  fetch(url, {
    method: 'post',
    body: JSON.stringify(DataToSend),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((res) => res.json())
    .then((data) => data);
};

const catchData = async function () {
  const data = await fetch(url);
  const parsedData = await data.json();
  return parsedData;
};

async function displayAllScore() {
  try {
    const allDataObject = await catchData();
    const arrayOfAllData = allDataObject.result.sort((a, b) => b.score - a.score);
    const divAllScore = document.querySelector('.allScores');

    for (let i = 0; i < arrayOfAllData.length; i += 1) {
      const div = `<div id='dynamic'><p>${arrayOfAllData[i].user}</p><p>${arrayOfAllData[i].score}</p></div>`;
      divAllScore.insertAdjacentHTML('beforeend', div);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

export { addData, catchData, displayAllScore };
