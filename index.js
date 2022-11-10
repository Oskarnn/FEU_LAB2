let para = document.querySelector('#para');
let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    fetch('https://api.quotable.io/random')

.then((response) => response.json())

.then((result) => {

    para.textContent = result.content
  console.log(result);

})

});
