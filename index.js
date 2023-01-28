let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")
let sumHome = 0
let sumGuest = 0

function addOneHome(){
    sumHome++
    scoreHome.innerHTML = sumHome
}

function addTwoHome(){
    sumHome += 2
    scoreHome.innerHTML = sumHome
}

function addThreeHome(){
    sumHome += 3
    scoreHome.innerHTML = sumHome
}

function addOneGuest(){
    sumGuest++
    scoreGuest.innerHTML = sumGuest
}

function addTwoGuest(){
    sumGuest += 2
    scoreGuest.innerHTML = sumGuest
}

function addThreeGuest(){
    sumGuest += 3
    scoreGuest.innerHTML = sumGuest
}

function newGame(){
    sumHome = 0
    sumGuest = 0
    
    scoreHome.innerHTML = sumHome
    scoreGuest.innerHTML = sumGuest
}