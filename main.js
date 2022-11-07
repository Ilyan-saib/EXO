let bttn = document.getElementById('bttn')
let ul = document.getElementById('ul')
let btn = document.getElementById('btn')
let container = document.getElementById('ul')
let form = document.getElementById('form')
let jaj = document.getElementsByName('li')
bttn.addEventListener('click', () => {
    ul.insertBefore(ul.lastElementChild, ul.firstElementChild)
})

btn.addEventListener('click', () => {
    ul.insertAdjacentElement('beforeend' , ul.firstElementChild)
})

let todo = document.getElementById('todo')



form.addEventListener('submit' , (event) => {
    event.preventDefault();
    let p = document.createElement('li')
    if (input.value.length > 0) {
        p.innerText = input.value;
    container.appendChild(p)
    input.value = "" 
    }
   
})

