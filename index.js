let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let sumHome = 0
let sumGuest = 0

localStorage.setItem("sumHome", sumHome)
localStorage.setItem("sumGuest", sumGuest)

document.getElementById('addOneHome').addEventListener('click', function() {
    sumHome++
    localStorage.setItem("sumHome", sumHome)
    scoreHome.innerHTML = localStorage.getItem("sumHome")
})

document.getElementById('addTwoHome').addEventListener('click', function(){
    sumHome += 2
    localStorage.setItem("sumHome", sumHome)
    scoreHome.innerHTML = localStorage.getItem("sumHome")
})

document.getElementById('addThreeHome').addEventListener('click', function(){
    sumHome += 3
    localStorage.setItem("sumHome", sumHome)
    scoreHome.innerHTML = localStorage.getItem("sumHome")
})

document.getElementById('addOneGuest').addEventListener('click', function(){
    sumGuest++
    localStorage.setItem("sumGuest", sumGuest)
    scoreGuest.innerHTML = localStorage.getItem("sumGuest")
})

document.getElementById('addTwoGuest').addEventListener('click', function(){
    sumGuest += 2
    localStorage.setItem("sumGuest", sumGuest)
    scoreGuest.innerHTML = localStorage.getItem("sumGuest")
})

document.getElementById('addThreeGuest').addEventListener('click', function(){
    sumGuest += 3
    localStorage.setItem("sumGuest", sumGuest)
    scoreGuest.innerHTML = localStorage.getItem("sumGuest")
})

document.getElementById('new-game').addEventListener('click', function(){
    sumHome = 0
    sumGuest = 0
    localStorage.setItem("sumGuest", 0)
    localStorage.setItem("sumHome", 0)
    scoreHome.innerHTML = localStorage.getItem("sumHome")
    scoreGuest.innerHTML = localStorage.getItem("sumGuest")
})