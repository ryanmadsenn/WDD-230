// Add event listeners.
document.onload = checkWidth();
window.onload = updateLastVisit;
window.onresize = checkWidth;
document.getElementById('hamburger').addEventListener('click', dipslayMenu)

// Insert date into header.
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
document.querySelector(".date").textContent = fulldate

// Conditionally display hamburger menu icon or links depending on page width
function checkWidth() {
    var x = document.getElementById("nav-buttons");
    var window_width = window.innerWidth;
    var menu_icon = document.getElementById("hamburger");
    let logo = document.getElementById('nav-bar-logo')

    if (window_width < 1000) {
        menu_icon.style.display = "block"
        x.style.display = "none";
        // logo.style.display = "none";
    } else {
        menu_icon.style.display = "none";
        x.style.display = "block";
        
        // logo.style.display = "block";
    }
}

function dipslayMenu() {
    var x = document.getElementById("nav-buttons");

    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }    
}


// Conditionally display invitation if it is Monday or Tuesday.
function displayInviation() {
    invitation = document.getElementById('invitation')
    
    date = new Date()
    dow = date.getDay()

    if (dow == 1 || dow == 2) {
        invitation.style.display = 'block'
    } else {
        invitation.style.display = 'none'
    }
}

// Functions to change border radius on discover boxes on discover page.
function decreaseDisoverBoxBorderRadius(event){
    let num;

    if (event.target.id == "columbia-river-image"){
        num = 0
    } else if (event.target.id == "vineyard-image"){
        num = 1
    } else if (event.target.id == "badger-mountain-image") {
        num = 2
    } else if (event.target.id == "hanford-nuclear-site-image") {
        num = 3
    } else if (event.target.id == "toyota-center-image") {
        num = 4
    }

    if (num % 2 == 0) {
        box = document.getElementsByClassName('discover-box')
        box[num].style.borderBottomLeftRadius = "15px"
    } else {
        box = document.getElementsByClassName('discover-box')
        box[num].style.borderTopRightRadius = "15px"
    }
}

function increaseDiscoverBoxBorderRadius(){
    let num;

    if (event.target.id == "columbia-river-image"){
        num = 0
    } else if (event.target.id == "vineyard-image"){
        num = 1
    } else if (event.target.id == "badger-mountain-image") {
        num = 2
    } else if (event.target.id == "hanford-nuclear-site-image") {
        num = 3
    } else if (event.target.id == "toyota-center-image") {
        num = 4
    }

    if (num % 2 == 0) {
        box = document.getElementsByClassName('discover-box')
        box[num].style.borderBottomLeftRadius = "100px"
    } else {
        box = document.getElementsByClassName('discover-box')
        box[num].style.borderTopRightRadius = "100px"
    }
}


// Discover box event listeners.
let discoverImages = document.getElementsByClassName('discover-image')
for (let i = 0; i < discoverImages.length; i++) {
    discoverImages[i].addEventListener('mouseenter', decreaseDisoverBoxBorderRadius)
    discoverImages[i].addEventListener('mouseleave', increaseDiscoverBoxBorderRadius)
}

// Insert copyright year into footer and last modified date into footer.
document.getElementById("year").textContent = new Date().getFullYear()
document.getElementById("last-updated").textContent = "Last Updated: " + document.lastModified
displayInviation()


function updateLastVisit() {
    let date = new Date()
    let lastDate = new Date(window.localStorage.getItem('lastVisit'))
    
    let diff = date.getTime() - lastDate.getTime()

    let dayDiff = Math.round(diff / (1000 * 3600 * 24))

    document.getElementById('last-visit').textContent = "Last visit: " + dayDiff + " days ago"

    window.localStorage.setItem("lastVisit", date)
}


let imagesToLoad = document.querySelectorAll('img[data-src]');


const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
}


const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};


if('IntersectionObserver' in window) {
const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
    if(item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
    }
    });
}, imgOptions);

imagesToLoad.forEach((img) => {
    observer.observe(img);
});

} else {
imagesToLoad.forEach((img) => {
    loadImages(img);
});
}


// Put timestamp in form hidden field.
let dateTimeField = document.getElementById("form-datetime")
dateTimeField.value = new Date();