/* INNEHÅLLSFÖRTECKNING

1. Hamburger meny
2. Random quote generator
3. Quote awnser script
4. Quote counter
5. Score counter
*/

/* 1. Hamburger menu */
let burgerMenu = document.querySelector('.burger-meny');

let dropdownMenu = document.querySelector('.dropdown');

burgerMenu?.addEventListener('click', () => {
    burgerMenu.classList.toggle("active");
    dropdownMenu.classList.toggle("active");
});

/* 2. Random quote generator */

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

/* 3. Quote awnser script */

let btnKanye = document.querySelector('#kanye')
let btnNotKanye = document.querySelector('#not-kanye')

let sign = document.querySelector('#quoter-hidden')

btnKanye?.addEventListener('click', () => {

    awnser.style.display = 'block'
    sign.style.display = 'none'

    if(awnser.textContent !== 'Kanye West'){
        btnKanye.style.backgroundColor = 'red'
   } else {
        btnKanye.style.backgroundColor = 'green'
   }

/* Reset function "Kanye" */

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

  }, 1000)
})

btnNotKanye?.addEventListener('click', () => {

    awnser.style.display = 'block'
    sign.style.display = 'none'

    if(awnser.textContent === 'Kanye West'){
        btnNotKanye.style.backgroundColor = 'red'
   } else {
        btnNotKanye.style.backgroundColor = 'green'
   }

/* Reset function "Not Kanye" */

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

    }, 1000)
})

/* 4. Quote counter */

let countDown = document.querySelector('#quizNumber')
let btnContainer = document.querySelector('.btn-container')

countDown.value = 1
countDown.textContent = countDown.value


btnContainer?.addEventListener('click', () =>{
    setTimeout(function () {
            countDown.value ++
            countDown.textContent = countDown.value
            if(countDown.value === 10){
                window.location.href = "result.html";
            }
    }, 1000)
})

/* 5. Score counter */

sessionStorage.setItem('result', 0)
let p = 0

btnKanye?.addEventListener('click', () => {

    if(awnser.textContent === 'Kanye West'){
        p ++
        sessionStorage.setItem('result', p)
   }
})

btnNotKanye?.addEventListener('click', () => {

    if(awnser.textContent !== 'Kanye West'){
        p ++
        sessionStorage.setItem('result', p)
   }
});
