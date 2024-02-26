
const firstInput = document.querySelector(".first-input");
const secondInput = document.querySelector(".second-input");
const checkButton = document.querySelector(".check-button");
const contentDiv = document.querySelector(".content");

checkButton.addEventListener("click", function(event) {
  event.preventDefault();
  const firstValue = firstInput.value;
  const secondValue = secondInput.value;
  if(firstValue < 100 || firstValue > 300 || secondValue < 100 || secondValue > 300) {
    contentDiv.innerHTML = `<p>Число вне диапазона от 100 до 300</p>`;
  } else {
    fetch(`https://dummyimage.com/${firstValue}x${secondValue}/`)
      .then(
       (result) => {
         console.log('Результат', result);
         contentDiv.innerHTML = `<img src="${result.url}">`
        })
      .catch(() => {console.log('error')});
  }
})
