/* Hamburger menu*/

let burgerMenu = document.querySelector('.burger-meny');

let dropdownMenu = document.querySelector('.dropdown');

burgerMenu?.addEventListener('click', () => {
    burgerMenu.classList.toggle("active");
    dropdownMenu.classList.toggle("active");
});

/* Score presentation */

let result = sessionStorage.getItem('result')

let points = document.querySelector('#points')

points.textContent = result

/* Play again */

let playButton = document.querySelector('.play')

playButton.addEventListener('mouseenter', () => {

        let playAgain = document.querySelector('#play-again')
        let scorePres = document.querySelector('#result-container > h2')
        let questionmark = document.querySelector('#questionmark')
        let oldPoints = document.querySelector('#result-container > p')

        playAgain.style.display = 'block'
        scorePres.style.display = 'none'

        questionmark.style.display = 'block'
        oldPoints.style.display = 'none'

})

playButton.addEventListener('mouseleave', () => {

        let playAgain = document.querySelector('#play-again')
        let scorePres = document.querySelector('#result-container > h2')
        let questionmark = document.querySelector('#questionmark')
        let oldPoints = document.querySelector('#result-container > p')

        playAgain.style.display = 'none'
        scorePres.style.display = 'block'

        questionmark.style.display = 'none'
        oldPoints.style.display = 'block'

});
