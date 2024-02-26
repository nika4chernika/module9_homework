
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const div = document.querySelector(".content-div");

function checkNumber() {
  const value = input.value;
  if(value > 10 || value < 1 || isNaN(value)) {
    const text = `<p>Число вне диапазона от 1 до 10</p>`;
    div.innerHTML = text;
  } else {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://jsonplaceholder.typicode.com/photos?_limit=${value}`);
    xhr.onload = function() {
      if (xhr.status != 200) { 
        console.log("Статус ответа: ", xhr.status);
      } else {
        let apiData = JSON.parse(xhr.response);
        displayResult(apiData);
      }  
    };
    xhr.onerror = function() {
      console.log("Ошибка! Статус ответа: ", xhr.status);
    };
    xhr.send();      
  }
}

button.addEventListener("click", function(event) {
  event.preventDefault();
  checkNumber();
});

function displayResult(apiData) {  
  div.innerHTML = ''; 
  apiData.forEach(item => {
    const cardImg = document.createElement('div');
    cardImg.innerHTML = `<img src="${item.url}" alt="Photo" style="width:100px; height:100px;">`;
    div.appendChild(cardImg);
  });
}
