const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('.list')

button.addEventListener('click', appendItem)

function appendItem() {
    let newItem = document.createElement('li')
    newItem.textContent = input.value

    let exitButton = document.createElement('button')
    exitButton.innerHTML = 'X'
    exitButton.addEventListener('click', deleteListItem)

    newItem.appendChild(exitButton)

    list.appendChild(newItem)
    input.value = ""
    input.focus()
}

function deleteListItem() {
    this.parentNode.remove()
}