// visualizer.js
var exports = module.exports = {}

var colors = require('colors')
var symmetry = require('./symmetry')
var wlog = require('wlog')

// Global constants
var C = require('./constants')

wlog.tag("VIS")

module.exports = function printBoard(board) {
    if (typeof board === 'undefined') {
        console.log("[ERROR] boardArray undefined!")
        process.exit(1)
    }

    var len = board.length

    for (var i = 0; i < len; i++) {

        if (i % symmetry.side(len) === 0)
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

