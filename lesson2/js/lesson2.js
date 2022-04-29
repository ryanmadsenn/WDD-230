document.onload = lastUpdated()

function lastUpdated() {
    document.getElementById("year").textContent = new Date().getFullYear()
    document.getElementById("last-updated").textContent = "Last Updated: " + document.lastModified
}