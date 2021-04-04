
let players = [0x1F525,0x1F30A]

document.addEventListener("DOMContentLoaded",()=>{

    let squares = document.querySelectorAll(".square")
    let p1Score = document.getElementById("p1Score")
    let p2Score = document.getElementById("p2Score")

    squares.forEach((square)=>{

        square.addEventListener("click", HandleClick)

    })

})

function HandleClick(event){

    let square = event.target
    let position = square.id
    
    if (HandleMove(position)){
        ShowWinnerSeq()
        UpdateScore()
        setTimeout(() =>{
            
            alert("The Game is over!\n" + String.fromCodePoint(players[playerTurn]) + " Won!")

        }, 500)
    } else if(CheckDraw()){
        setTimeout(() =>{
            
            alert("The Game is over!\n" + "It was a draw")

        }, 10)
    }

    UpdateSquare(position)

}


function UpdateSquare(pos){

    let square = document.getElementById(pos.toString())
    let symbol = board[pos]
    square.innerHTML = `<div class="${symbol}"></div>`

}

function Restart(){
    ClearBoard()
    ResetGame()
}

function ClearBoard(){

    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{

        let position = square.id
        let symbol = ""

        square.innerHTML = `<div class="${symbol}"></div>`
        square.style.backgroundColor = 'rgba(21, 28, 49, 0.664)';   

    })

}

function ShowWinnerSeq(){

    let squares = document.querySelectorAll(".square")

    winningSeq.forEach((box)=>{
        if(playerTurn == 1){
            squares[box].style.backgroundColor = 'rgba(3, 48, 145, 0.5)';
        }else{
            squares[box].style.backgroundColor = 'rgba(255, 114, 71, 0.4)';
        }     
    })
}

function UpdateScore(){
    p1Score.innerHTML = scores[0].toString()
    p2Score.innerHTML = scores[1].toString()
}