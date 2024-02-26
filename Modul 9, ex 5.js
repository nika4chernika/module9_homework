

const pageInput = document.querySelector(".page-input");
const limitInput = document.querySelector(".limit-input");
const requestButton = document.querySelector(".request-button");
const resultDiv = document.querySelector(".result-content");

function checkNumbers() {
  const pageValue = pageInput.value;
  const limitValue = limitInput.value;
  if(pageValue > 10 || pageValue < 1 && isNaN(pageValue) && limitValue > 10 || limitValue < 1 && isNaN(limitValue)) {
    resultDiv.innerHTML = ''
    resultDiv.innerHTML = `<p>Номер страницы и лимит вне диапазона от 1 до 10</p>`;
    console.log("error")
  } else if(pageValue > 10 || pageValue < 1 || isNaN(pageValue)) {
      resultDiv.innerHTML = ''
      resultDiv.innerHTML = `<p>Номер страницы вне диапазона от 1 до 10</p>`;
      console.log("error")
    } else if(limitValue > 10 || limitValue < 1 || isNaN(limitValue)) {
      resultDiv.innerHTML = ''
      resultDiv.innerHTML = `<p>Лимит вне диапазона от 1 до 10</p>`;
      console.log("error")
      } else {
         let xhr = new XMLHttpRequest();
         xhr.open('GET', ` https://jsonplaceholder.typicode.com/photos?_page=${pageValue}&_limit=${limitValue}`);
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

requestButton.addEventListener("click", function(event) {
  event.preventDefault();
  checkNumbers()
})

                              
function displayResult(apiData) {  
  resultDiv.innerHTML = ''; 
  apiData.forEach(item => {
    const cardImg = document.createElement('div');
    cardImg.innerHTML = `<img src="${item.url}" alt="Photo" style="width:100px; height:100px;">`;
    resultDiv.appendChild(cardImg);
  });
}

// вообще не уверена что написала что-то адекватное, я запуталась, help me pls
localStorage.setItem('img', JSON.stringify(apiData))
const getImg = JSON.parse(localStorage.getItem('img'))
resultDiv.appendChild(getImg.img)
