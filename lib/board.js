// board.js
var exports = module.exports = {}

// Global constants
var C = require('./constants')

exports.getBoardSize = function () {
    return C.BOARDSIZE
}

// Get the index on array if x and y coordinate given
exports.getIndex = function(x, y) {
    return (y - 1) * C.BOARDSIZE + x - 1
}

exports.getTotalSquares = function () {
    return C.BOARDSIZE * C.BOARDSIZE
}

// Get X-Coordinate if array index is given
exports.getX = function(index) {
    return index % C.BOARDSIZE + 1
}

// Get Y-Coordinate if array index is given
exports.getY = function(index) {
    return Math.floor(index / C.BOARDSIZE + 1)
}

