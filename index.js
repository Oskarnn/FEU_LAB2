
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
