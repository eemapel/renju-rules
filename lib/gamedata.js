/*jshint asi: true*/

var gameGlobal = require('./gameglobal')

function gameData() {
    this.global = new gameGlobal()
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

module.exports = gameData
