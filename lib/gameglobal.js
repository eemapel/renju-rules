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

// Get the index on array if x and y coordinate given
gameGlobal.prototype.getIndex = function(x, y) {
    return (y - 1) * this.boardSize + x - 1
}

gameGlobal.prototype.getTotalSquares = function () {
    return this.boardSize * this.boardSize
}

// Get X-Coordinate if array index is given
gameGlobal.prototype.getX = function(index) {
    return index % this.boardSize + 1
}

// Get Y-Coordinate if array index is given
gameGlobal.prototype.getY = function(index) {
    return Math.floor(index / this.boardSize + 1)
}

module.exports = gameGlobal

