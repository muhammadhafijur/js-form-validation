// const name = document.getElementById('name');
// const password = document.getElementById('password');
// const form = document.getElementById('form');
// const errorElement = document.getElementById('error')

// form.addEventListener('submit', (e) => {
//     let messages = []
//     if (name.value === '' || name.value == null){
//         messages.push("name is required")
//     }
//     if (password.value.length <= 6) {
//         messages.push('Password must be longer then 6 characters')
//     }
//     if (password.value.length >= 20) {
//         messages.push('Password must be less then 20 characters')
//     }
//     if (password.value === 'password') {
//         messages.push('Password can not be password')
//     }
//     if (messages.length > 0) {
//         e.preventDefault();
//         errorElement.innerText = messages.join(', ')
//     }
// })










const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('name required');
    }
    if (password.value.length <= 6) {
        messages.push('Password must be 6 characters long');
    }
    if (password.value.length >= 20) {
        messages.push('Password must be less then 20 characters');
    }
    if (password.value === 'password') {
        messages.push('Password can not be password');
    }
    e.preventDefault();
    errorElement.innerText = messages.join(', ')
})