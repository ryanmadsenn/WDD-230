fetchJSON()

async function fetchJSON() {
    const response = await fetch("./js/temples.json")

    if(response.ok) {
        const data = await response.json()
        displayTemples(data);
    }
}


function displayTemples(data) {
    const array = data.temples 

    array.forEach(temple => {
        // Create elements.
        const section = document.createElement('section')
        const image = document.createElement('img')
        const name = document.createElement('p')
        const likeButton = document.createElement('a')
        const address = document.createElement('p')
        const phone = document.createElement('p')
        const servicesTitle = document.createElement('p')
        const services = document.createElement('ul')
        const closuresTitle = document.createElement('p')
        const closures = document.createElement('ul')

        section.classList.add("temple")

        image.src = temple.image
        image.alt = temple.name
        image.classList.add('temple-image')
    
        name.innerHTML = temple.name
        name.classList.add('temple-name')

        likeButton.href = "#"
        likeButton.innerHTML = `\&hearts;`
        likeButton.classList.add('temple-like-button')
        likeButton.setAttribute('id', temple.name.split(' ').join('').toLowerCase());
        likeButton.addEventListener('click', storeLike)

        if(likeButton.id in window.localStorage) {
            let item = localStorage.getItem(likeButton.id)
            if (item == 1) {
                likeButton.style.color = "red"
            } else {
                likeButton.style.color = "#333"
            }
        }
        
        // console.log(likeButton.accessKey)

        address.textContent = temple.address
        phone.textContent = temple.phone

        servicesTitle.textContent = "Services"

        temple.services.forEach(service => {
            const serviceItem = document.createElement('li')
            serviceItem.textContent = service
            services.appendChild(serviceItem)
        })

        closuresTitle.textContent = "Closures"

        temple.closures.forEach(closure => {
            const closureItem = document.createElement('li')
            closureItem.textContent = closure
            closures.appendChild(closureItem)
        })

        section.appendChild(image)
        section.appendChild(name)
        section.appendChild(likeButton)
        section.appendChild(address)
        section.appendChild(phone)
        section.appendChild(servicesTitle)
        section.appendChild(services)
        section.appendChild(closuresTitle)
        section.appendChild(closures)

        document.querySelector('#temples-container').appendChild(section)
    });
}


function storeLike(event) {
    event.preventDefault();

    if (event.target.id in window.localStorage) {
        let item = localStorage.getItem(event.target.id)
        if (item == 0) {
            event.target.style.color = "red"
            localStorage.setItem(event.target.id, 1)
        } else {
            event.target.style.color = "#333"
            localStorage.setItem(event.target.id, 0)
        }
    } else {
        event.target.style.color = "red"
        localStorage.setItem(event.target.id, 1)
    }
}

