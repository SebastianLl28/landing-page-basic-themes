const messageError = document.querySelector('.form__error')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    const email = document.querySelector('.form__input').value
    if (!regex.test(email)) {
        messageError.classList.add('form__error--active')
        return;
    }
    messageError.classList.remove('form__error--active')
})