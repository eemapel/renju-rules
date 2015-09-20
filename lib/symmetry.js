// symmetry.js
var exports = module.exports = {}

var fs = require('fs')
var b = require('./board')
var wlog = require('wlog')

// Global constants
var C = require('./constants')

wlog.tag("SYM")

function flip(val) {
    return C.BOARDSIZE - val - 1
}

/* Function that rotates and/or flips given board.

   Mode options:
     0: no change
     1: rotated 90 degrees clock wise and flipped on x axis
     2: rotated 180 degrees
     3: rotated 90 degress clock wise
     4: flipped on x axis
     5: rotated 90 degrees counter-clock wise
     6: flipped on y axis
     7: rotated 90 degrees clock wise and flipped on y axis
*/
exports.rotator = function(data, mode) {
    var index, x, y
    var rotated = []

    if (data.length !== b.getTotalSquares()) {
        wlog.err("invalid array length received")
    }

    // If mode is 0 or not given, return as is
    if (!mode) {
        return data
    }

    for (i = 0; i < data.length; i++) {
        x = b.getX(i)
        y = b.getY(i)

        switch (mode) {
            case 1:
            case 2:
                x = flip(x)
            case 3:
            case 4:
                y = flip(y)
                break

            case 5:
            case 6:
                x = flip(x)
            case 7:
                break

            default:
                wlog.err("invalid mode given: " + mode)
        }

        if (mode % 2) {
            // Swap x and y
            var temp = x
            x = y
            y = temp
        }

        index = b.getIndex(x, y)

        if (index < 0 || index > b.getTotalSquares()) {
            wlog.err("invalid index " + index + " received with x: " + x + " and y: " + y)
        }

        // Fill the rotated array
        rotated[b.getIndex(x, y)] = data[i]
    }

    // Return the rotated array
    return rotated
}

/*
    Description: Function to calculate symmetry signature of given position

    Only the first 5 moves need to be considered for any opening rule in Renju.
    For each found move, its index is board array is record and extra bit
    assigned to record the color.

        10 bits
     xxxx xxxx xx
     \       /  |
       index   color

    To store all 5 moves 50 bits are needed. Javascript integers have 53 bit
    limit, so it'll fit there fine.

    If the symmetry signature is used to compare whether two different positions
    are symmetric, it needs to be compared to all possible rotations, that can
    be generated using rotator method.

    Return value:
    0   : If no signature can be given for the position
    sig : Symmetry signature value
*/
exports.signature = function(board) {
    var sig = 0
    var count = 0

    for (var i = 0; i < board.length; i++) {
        if (board[i] == C.BLACK || board[i] == C.WHITE) {
            if (count >= 5) {
                wlog.warn("symmetry signature cannot be calculated if more than 5 moves played")
                return 0
            }
            sig = (sig << 10) + (i << 2) + board[i]
            count++
        }
    }

    return sig
}
