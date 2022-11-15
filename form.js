/* Hamburger menu */

let burgerMenu = document.querySelector('.burger-meny');

let dropdownMenu = document.querySelector('.dropdown');

burgerMenu?.addEventListener('click', () => {
    burgerMenu.classList.toggle("active");
    dropdownMenu.classList.toggle("active");
});

/*  Form script */


let  = document.querySelector('.suggest-text > h3')

let submitbtn = document.querySelector('#submit');

let quoteError = document.querySelector('#quoteError');

let quoterError = document.querySelector('#quoterError');

let checkbox = document.querySelector('#checkbox');

let yourName = document.querySelector('#your-name');

yourName.value = localStorage.getItem('savedName');




submitbtn?.addEventListener ('click', () => {
  let name = yourName.value;

  let quoter = document.querySelector('#quoter').value;

  let suggestQuote = document.querySelector('#suggest-quote').value;
  submitbtn.classList.remove('onclick');
  submitbtn.classList.remove('errorClick');

if (suggestQuote !== "" && quoter !== "") {
  quoterError.style.display = 'none';
  quoteError.style.display = 'none';
  document.querySelector('.suggest-text > h3').innerHTML = "THANKS!";
  document.querySelector('.suggest-text > p').innerHTML = "Thank you for helping us get better!";
  submitbtn.classList.add('onclick');


fetch('https://avancera.app/cities/', {
   body: JSON.stringify({ name: suggestQuote, population: parseInt(quoter) }),
  headers: {'Content-Type': 'application/json'},
   method: 'POST'
  })


.then(response => response.json())

  .then(result => {
  console.log(result)
  });


}
else if (suggestQuote !== "" && quoter === "") {
 quoterError.style.display = 'block';
 quoteError.style.display = 'none';
 submitbtn.classList.add('errorClick');
}

else if (suggestQuote === "" && quoter !== "") {
  quoteError.style.display = 'block';
  quoterError.style.display = 'none';
  submitbtn.classList.add('errorClick');

 }
 else {
  quoteError.style.display = 'block';
  quoterError.style.display = 'block';
  submitbtn.classList.add('errorClick');
 }
  if (checkbox.checked == true) {
    localStorage.setItem('savedName', name)
    console.log(localStorage.getItem('savedName'));
  }
})
