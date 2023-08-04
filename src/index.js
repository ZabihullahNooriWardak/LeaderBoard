import './style.css';
import { addData, displayAllScore } from './modules/Api.js';
// catchData();
const submitBtn = document.querySelector('#submit');
const nameTxtField = document.querySelector('#name');
const scoreTxtField = document.querySelector('#score');
window.onload = () => {
  displayAllScore();
};
document.getElementById('refresh').addEventListener('click', () => {
  displayAllScore();
});
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const scoreValue = scoreTxtField.value;
  const nameValue = nameTxtField.value;
  addData(nameValue, scoreValue);
  scoreTxtField.value = '';
  nameTxtField.value = '';
});
