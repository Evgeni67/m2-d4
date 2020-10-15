const addPlayerToList = function(){
    let player = document.querySelector("#name")
    let nameOfPlayer = player.value
    let getList = document.querySelector("#listOfPlayers")
    let playerToAdd = document.createElement("li")
    playerToAdd.innerText = nameOfPlayer
    getList.appendChild(playerToAdd)
    let noPlayerMsg = document.querySelector("#noPlayersMsg")
    noPlayerMsg.style = "display:none"
}