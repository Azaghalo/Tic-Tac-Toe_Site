// variaveis do jogo
let board = ["", "", "", "", "", "", "", "", ""]
let playerTurn = 0
let draw = false
let gameOver = false
let scores = [0,0]

let symbols = ["x", "o"]

let winConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let winningSeq = [0,0,0]


function HandleMove(position){

    if(gameOver || draw){
        return
    }

    if(board[position] == ""){

        board[position] = symbols[playerTurn]

        gameOver = WinningMove()

        playerTurn = (playerTurn == 0) ? 1 : 0

    }

    return gameOver
}

function WinningMove(){

    for(let i = 0; i < winConditions.length; i++){

        let seq = winConditions[i];

        let pos1 = seq[0]
        let pos2 = seq[1]
        let pos3 = seq[2]

        if(board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != ""){
            winningSeq = [pos1, pos2, pos3]
            scores[playerTurn] += 1
            return true
        }

    }

    return false

}

function CheckDraw(){

    if(gameOver || draw){
        return
    }

    for(let i = 0; i < board.length; i++){
        if(board[i] == "" || gameOver){
            return false
        }
    }
    draw = true
    return true
}

function ResetGame(){

    board = ["", "", "", "", "", "", "", "", ""]
    playerTurn = 0
    draw = false
    gameOver = false

}