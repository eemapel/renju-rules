/*jshint asi: true*/

// Global constants
var C = require('./constants')

function gameGlobal(size) {
    this.boardSize = size || C.BOARDSIZE

    // Currently non-standard board sizes not supported
    if (this.boardSize !== C.BOARDSIZE) {
        console.log("[Warning] Non-standard board sizes not yet supported")
        this.boardSize = C.BOARDSIZE
    }
}

gameGlobal.prototype.getBoardSize = function () {
    return this.boardSize
}

gameGlobal.prototype.getTotalSquares = function () {
    return this.boardSize * this.boardSize
}

module.exports = gameGlobal

