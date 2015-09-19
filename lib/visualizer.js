// visualizer.js
var exports = module.exports = {}

var colors = require('colors')
var b = require('./board')
var wlog = require('wlog')

// Global constants
var C = require('./constants')

wlog.tag("VIS")

module.exports = function printBoard(board) {
    if (typeof board === 'undefined') {
        wlog.err("board array undefined")
    }

    if (board.length !== b.getTotalSquares()) {
        wlog.err("invalid board array length: " + board.length)
    }

    for (var i = 0; i < board.length; i++) {

        if (i % b.getBoardSize() === 0)
            process.stdout.write("\n")

        switch (board[i]) {
            case C.EMPTY:
                // Print middle dot
                process.stdout.write(String.fromCharCode(0x00b7) + " ")
                break
            case C.BLACK:
                process.stdout.write("X".green + " ")
                break
            case C.WHITE:
                process.stdout.write("O".red + " ")
                break
            default:
                wlog.err("Illegal value in array index " + i + " : " + board[i])
        }
    }
    process.stdout.write("\n")
}

