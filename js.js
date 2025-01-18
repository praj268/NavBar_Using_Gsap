var menu = document.querySelector("#nav h1")
var close = document.querySelector("#full i")

var t = gsap.timeline()

t.to("#full", {
    right: 0,
    duration: 0.5
})
t.from("#full h4", {
    x: 150,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0
})
t.from("#full i", {
    opacity: 0,
})

t.pause()
menu.addEventListener("click", function() {
    t.play()
})

close.addEventListener("click", function() {
    t.reverse()
})