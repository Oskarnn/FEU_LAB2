


































































































































































// FORM SCRIPT

//  POST-funktion för quoter och quote


let submitbtn = document.querySelector('#submit');

let quoteError = document.querySelector('#quoteError');

let quoterError = document.querySelector('#quoterError');

let checkbox = document.querySelector('#checkbox');


let yourName = document.querySelector('#your-name');




function post() {

  let name = yourName.value;

  let quoter = document.querySelector('#quoter').value;

  let quote = document.querySelector('#quote').value;

if (quote !== "" && quoter !== "") {
  quoterError.style.display = 'none';
  quoteError.style.display = 'none';
// fetch('https://avancera.app/cities/', {
//    body: JSON.stringify({ name: quote, population: parseInt(quoter) }),
//   headers: {'Content-Type': 'application/json'},
//    method: 'POST'
//   })


// .then(response => response.json())

//   .then(result => {
//   console.log(result)
//   });


}
else if (quote !== "" && quoter === "") {
 quoterError.style.display = 'block';
 quoteError.style.display = 'none';
}

else if (quote === "" && quoter !== "") {
  quoteError.style.display = 'block';
  quoterError.style.display = 'none';

 }
 else {

  quoteError.style.display = 'block';
  quoterError.style.display = 'block';
 }
  if (checkbox.checked == true) {
    localStorage.setItem('savedName', name)
    console.log(localStorage.getItem('savedName'));
  }
}

submitbtn.addEventListener('click', post);

// fixa checkbox localStorage mot "your name"
