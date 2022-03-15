let navShowButton = document.getElementById('show-button')
let navHideButton = document.getElementById('hide-button')
let navUl = document.querySelector('nav ul')

navShowButton.addEventListener('click', () => {
    navUl.style.transform = 'translateX(0)'
})

navHideButton.addEventListener('click', () => {
    navUl.style.transform = 'translateX(100%)'
})