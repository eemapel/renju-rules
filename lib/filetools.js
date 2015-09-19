/* Supported position formats
 * ==========================
 *
 * POSTYPE_DOTXY:
 * - File with exactly 15 rows and 15 columns
 * - Possible characters ".", "x", "o"
 *
 */

var fs = require("fs")
var colors = require('colors')

// Global constants
var C = require('./constants')

function fileTools() {
    this.board = []
}

fileTools.prototype.storeData = function (data) {
    var lines = data.split('\n')

    if (lines.length - 1 !== C.BOARDSIZE) {
        console.log("[ERROR] Incorrect amount of lines in position file: ", lines.length - 1)
        process.exit(1)
    }

    for (var i = 0; i < lines.length - 1; i++) {
        var row = lines[i]

            if (row.length !== C.BOARDSIZE) {
            console.log("[ERROR] Incorrect row length in position file: ", row.length)
            process.exit(1)
        }

        for (var j = 0; j < row.length; j++) {
            switch (row[j]) {
                case ' ':
                case '.':
                    this.board.push(C.EMPTY)
                    break;
                case 'x':
                case 'X':
                    this.board.push(C.BLACK)
                    break;
                case 'o':
                case 'O':
                    this.board.push(C.WHITE)
                    break;
                case 'D':
                    // This is used in unit tests and indicate spot for double
                    this.board.push(C.EMPTY)
                    break;
                default:
                    console.log("[ERROR] Illegal character in position file: " + row[j])
                    process.exit(1)
            }
        }
    }
}

fileTools.prototype.readFile = function (fileName) {
    if (fs.existsSync(fileName)) {
        var buffer = fs.readFileSync(fileName).toString();
        this.storeData(buffer)
    }
    else {
        console.log("[ERROR] File given as parameter not found")
        process.exit(1)
    }

    return this.board
}

module.exports = fileTools

