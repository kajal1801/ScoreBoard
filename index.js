let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let sumHome = 0
let sumGuest = 0

localStorage.setItem("sumHome", sumHome)
localStorage.setItem("sumGuest", sumGuest)

function addOneHome(){
    sumHome++
    localStorage.setItem("sumHome", sumHome)
    scoreHome.innerHTML = localStorage.getItem("sumHome")
}

function addTwoHome(){
    sumHome += 2
    localStorage.setItem("sumHome", sumHome)
    scoreHome.innerHTML = localStorage.getItem("sumHome")
}

function addThreeHome(){
    sumHome += 3
    localStorage.setItem("sumHome", sumHome)
    scoreHome.innerHTML = localStorage.getItem("sumHome")
}

function addOneGuest(){
    sumGuest++
    localStorage.setItem("sumGuest", sumGuest)
    scoreGuest.innerHTML = localStorage.getItem("sumGuest")
}

function addTwoGuest(){
    sumGuest += 2
    localStorage.setItem("sumGuest", sumGuest)
    scoreGuest.innerHTML = localStorage.getItem("sumGuest")
}

function addThreeGuest(){
    sumGuest += 3
    localStorage.setItem("sumGuest", sumGuest)
    scoreGuest.innerHTML = localStorage.getItem("sumGuest")
}

function newGame(){
    sumHome = 0
    sumGuest = 0
    localStorage.setItem("sumGuest", 0)
    localStorage.setItem("sumHome", 0)
    scoreHome.innerHTML = localStorage.getItem("sumHome")
    scoreGuest.innerHTML = localStorage.getItem("sumGuest")
}