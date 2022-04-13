// Resume Button
var modal = document.querySelector("#resumeModal");
var button = document.querySelector("#resumeButton");
var close = document.querySelector(".close");
function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}

// audio
var gbybr = document.querySelector("#ab")
var garden = document.querySelector("#garden")

document.querySelector("#playAB").addEventListener("click", function() {
    if (gbybr.currentTime > 0 && gbybr.paused == false && gbybr.ended == false) {
        console.log("Pause GBYBR")
        gbybr.pause()
        document.querySelector("#playAB").innerHTML = '<i class="fa-solid fa-play fa-4x"></i>'
        gbybr.currentTime = 0
    }
    else {
        console.log("Play GBYBR")
        gbybr.play()
        document.querySelector("#playAB").innerHTML = '<i class="fa-solid fa-stop fa-4x"></i>'
        
    }
})

document.querySelector("#playGarden").addEventListener("click", function() {
    if (garden.currentTime > 0 && garden.paused == false && garden.ended == false) {
        console.log("Pause Garden")
        garden.pause()
        document.querySelector("#playGarden").innerHTML = '<i class="fa-solid fa-play fa-4x"></i>'
        garden.currentTime = 0
    }
    else {
        console.log("Play Garden")
        garden.play()
        document.querySelector("#playGarden").innerHTML = '<i class="fa-solid fa-stop fa-4x"></i>'
    }
})


