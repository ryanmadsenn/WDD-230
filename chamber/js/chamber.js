// Add event listeners.
document.onload = checkWidth();
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

// Insert copyright year into footer and last modified date into footer.
document.getElementById("year").textContent = new Date().getFullYear()
document.getElementById("last-updated").textContent = "Last Updated: " + document.lastModified
displayInviation()

