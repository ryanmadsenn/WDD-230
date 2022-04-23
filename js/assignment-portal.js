document.onload = lastUpdated()

function lastUpdated() {
    console.log("updated")
    var lastUpdated = document.lastModified
    var lastUpdatedMessage = document.getElementById("last-updated")
    lastUpdatedMessage.textContent = "Last Updated: " + lastUpdated
}