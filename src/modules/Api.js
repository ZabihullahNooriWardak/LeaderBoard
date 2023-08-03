const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0pNrfjBwCKXqbjF87mV/scores/';
console.log(fetch(url));
const addData = function (name, score) {
    console.log('adding data hahahaahahhahahh');
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
    .then((data) => console.log(data));
};

const catchData = async function () {
  const data = await fetch(url);
  console.log(data);
  const parsedData = await data.json();
  console.log(parsedData);
  return parsedData;
};

async function displayAllScore() {
  try {
    const allDataObject = await catchData();
    const arrayOfAllData = allDataObject.result;
    const divAllScore = document.querySelector('.allScores');

    for (let i = 0; i < arrayOfAllData.length; i += 1) {
      const div = `<div><p>${arrayOfAllData[i].user}</p><p>${arrayOfAllData[i].score}</p></div>`;
      divAllScore.insertAdjacentHTML('beforeend', div);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

export { addData, catchData, displayAllScore };
