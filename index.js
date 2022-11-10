/* INNEHÅLLSFÖRTECKNING

1. Random quote generator
2. Quote awnser script
*/

/* 1. Random quote generator */

let randomQuote = document.querySelector('#quote')
let awnser = document.querySelector('#awnser')

/* Random number */
document.addEventListener('DOMContentLoaded', () => {

    let getRandom = Math.floor(Math.random() * 9)

/* Random quote */

    if(getRandom < 5) {

        fetch('https://api.quotable.io/random')

        .then((response) => response.json())

        .then((result) => {
            awnser.textContent = result.author
            randomQuote.textContent = result.content
            console.log(result);

        })

/* Kanye quote */
    } else {

        fetch('https://api.kanye.rest')

        .then((response) => response.json())

        .then((result) => {

            awnser.textContent = 'Kanye West'
            randomQuote.textContent = result.quote
            console.log(result);

        })
    }
})

/* 2. Quote awnser script */

let btnKanye = document.querySelector('#kanye')
let btnNotKanye = document.querySelector('#not-kanye')

let sign = document.querySelector('#quoter-hidden')

btnKanye.addEventListener('click', () => {

    awnser.style.display = 'block'
    sign.style.display = 'none'

    if(awnser.textContent !== 'Kanye West'){
        btnKanye.style.backgroundColor = 'red'
   } else {
        btnKanye.style.backgroundColor = 'green'
   }

/* Reset function */

   setTimeout(function () {

        btnKanye.style.backgroundColor = '#C28323'

        awnser.style.display = 'none'
        sign.style.display = 'block'

        let getRandom = Math.floor(Math.random() * 9)

        if(getRandom < 5) {
            fetch('https://api.quotable.io/random')

            .then((response) => response.json())

            .then((result) => {
                awnser.textContent = result.author
                randomQuote.textContent = result.content
                console.log(result);
            })

        } else {

            fetch('https://api.kanye.rest')

            .then((response) => response.json())

            .then((result) => {

                awnser.textContent = 'Kanye West'
                randomQuote.textContent = result.quote
                console.log(result);

            })
        }

        console.log(awnser.textContent)

    }, 4000)
})

btnNotKanye.addEventListener('click', () => {

    awnser.style.display = 'block'
    sign.style.display = 'none'

    if(awnser.textContent === 'Kanye West'){
        btnNotKanye.style.backgroundColor = 'red'
   } else {
        btnNotKanye.style.backgroundColor = 'green'
   }

/* Reset function */

    setTimeout(function () {

        btnNotKanye.style.backgroundColor = '#C28323'

        awnser.style.display = 'none'
        sign.style.display = 'block'

        let getRandom = Math.floor(Math.random() * 9)

        if(getRandom < 5) {
            fetch('https://api.quotable.io/random')

            .then((response) => response.json())

            .then((result) => {
                awnser.textContent = result.author
                randomQuote.textContent = result.content
                console.log(result);
            })

        } else {

            fetch('https://api.kanye.rest')

            .then((response) => response.json())

            .then((result) => {

                awnser.textContent = 'Kanye West'
                randomQuote.textContent = result.quote
                console.log(result);

            })
        }

        console.log(awnser.textContent)

    }, 4000)
})

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
