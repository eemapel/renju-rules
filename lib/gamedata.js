var gameGlobal = require('./board')

function gameData() {
    this.board = []
    this.moveCount = 0
    this.gameStarted = false
}

gameData.prototype.nextMove = function () {
    this.moveCount++
    if (this.moveCount > this.global.getTotalSquares()) {
        console.log("[ERROR] Move Count too high: ", this.moveCount)
    }
}

gameData.prototype.showMoveCount = function () {
    return this.moveCount
}

gameData.prototype.start = function () {
    if (this.gameStarted === true)
        console.log("[WARNING] This game has already been started")
    else
        this.gameStarted = true
}

gameData.prototype.stop = function () {
    if (this.gameStarted === false)
        console.log("[WARNING] This game has already been stopped")
    else
        this.gameStarted = false
}

gameData.prototype.setBoard = function (boardArray) {
    this.board = boardArray.slice()
}

gameData.prototype.getBoard = function () {
    if (this.board) {
        return this.board
    } else {
        console.log("[ERROR] Board not populated")
        return 0
    }
}

module.exports = gameData

