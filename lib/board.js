// board.js
var exports = module.exports = {}

/*
    This library provides information related to board array.

    Board Array
    ===========

    This is a one dimensional array with size of playable squares. In Renju
    the square is actually an intersection where stones are placed. The total
    number of squares on standard size board is 225 (15 x 15). Indexes
    available on this array are 0 - 224.

    Coordinates
    ===========

    Coordinates X and Y range from 0 to 14 where origo is at upper left corner.

     0,0                             14,0
        + + + + + + + + + + + + + + +
        +                           +
        +                           +
        +                           +
        +                           +
        +                           +
        +                           +
        +                           +
        +                           +
        +                           +
        +                           +
        +                           +
        +                           +
        +                           +
        + + + + + + + + + + + + + + +
    14,0                             14,14

*/

// Global constants
var C = require('./constants')

exports.getBoardSize = function () {
    return C.BOARDSIZE
}

// Get the index on array if x and y coordinate given
exports.getIndex = function(x, y) {
    return y * C.BOARDSIZE + x
}

exports.getTotalSquares = function () {
    return C.BOARDSIZE * C.BOARDSIZE
}

// Get X-Coordinate if array index is given
exports.getX = function(index) {
    return index % C.BOARDSIZE
}

// Get Y-Coordinate if array index is given
exports.getY = function(index) {
    return Math.floor(index / C.BOARDSIZE)
}

