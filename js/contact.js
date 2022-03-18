let inputs = document.querySelectorAll('#contactUs > *:not(:last-child)')
let form = document.querySelector('#contactUs')

let inputData = {}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    for(input of inputs){
        inputData[input.name] = input.value
        input.value = ''
    }
    sessionStorage.setItem('formData',JSON.stringify(inputData))
    console.log(inputData)
})