const input = document.querySelector('#favchap')
const button = document.querySelector('button')
const list = document.querySelector('.list')

button.addEventListener('click', appendItem)

function appendItem() {
    if (input.value != "") {
    let newItem = document.createElement('li')
    newItem.textContent = input.value

    let exitButton = document.createElement('button')
    exitButton.innerHTML = 'X'
    exitButton.addEventListener('click', deleteListItem)

    newItem.appendChild(exitButton)

    list.appendChild(newItem)
    input.value = ""
    input.focus()
    } else {
        alert("You must enter a chapter.")
        return
    }
}

function deleteListItem() {
    this.parentNode.remove()
}