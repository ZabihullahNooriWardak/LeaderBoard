import './style.css';
import { addData,catchData,displayAllScore } from './modules/Api.js';
// API endpoint URL

// addData('Ansar',38);
// catchData();
// displayAllScore();
let submitBtn=document.querySelector('#submit');
let nameTxtField = document.querySelector('#name');
let scoreTxtField = document.querySelector('#score');
let scoreValue = scoreTxtField.value;
let nameValue = nameTxtField.value;
displayAllScore();
submitBtn.addEventListener('click',function(e){
    e.preventDefault();
    console.log(nameValue + scoreValue);
   
        // console.log('data is addign kfdjkjfsfdkfjsdkfljfksdlajfalkfjadklj');
        addData(nameValue,scoreValue);
        displayAllScore();

})