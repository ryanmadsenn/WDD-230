window.onload = checkWidth;
window.onresize = checkWidth;

document.getElementById("year").textContent = new Date().getFullYear()
document.getElementById('last-updated').textContent = `Last updated: ${document.lastModified}`
document.getElementById("hamburger").addEventListener('click', displayMenu)

function checkWidth() {
    var windowWidth = window.innerWidth;
    var x = document.getElementById("links");
    var hamburger = document.getElementById("hamburger");

    if (windowWidth < 650) {
        hamburger.style.display = "block"
        x.style.display = "none";
    } else {
        hamburger.style.display = "none";
        x.style.display = "flex";
    }
}


function displayMenu() {
    const x = document.getElementById('links');

    if(x.style.display === "none") {
        x.style.display = "flex";
    } else if (x.style.display === "flex") {
        x.style.display = "none";
    }
}