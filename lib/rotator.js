var fs = require('fs')
var wlog = require('wlog')

wlog.tag("ROTATOR")

/* Function that rotates given matrix clockwise.
   Angles 4-7 are also mirrored vertically before rotation.

   Angle options:
   * angle 0: no change
   * angle 1: rotated 90 degrees
   * angle 2: rotated 180 degrees
   * angle 3: rotated 270 degrees
   * angle 4: vertical mirror of angle 0 / horizontal mirror of angle 2
   * angle 5: angle 4 rotated 90 degrees
   * angle 6: angle 4 rotated 180 degrees
   * angle 7: angle 4 rotated 270 degrees
*/
var rotator = function(matrix, angle, cb) {
    var len = matrix.length
    var side = Math.sqrt(len)

    var transformed = ""
    // Check the size of matrix is power of 2
    if (side !== Math.floor(side)) {
        wlog.err("Given array can't form a square, is not power of two. Lenth of array: "+ len)
    }

    square_printer(matrix, side)

    for (var i = 0; i < side; i++) {
        for (var j = 0; j < side; j++) {
            transformed += matrix.slice(j * side + i, j * side + i + 1)
        }
    }
    console.log("")
    square_printer(transformed, side)

    transformed = ""
    for (var i = 0; i < side; i++) {
        for (var j = 0; j < side; j++) {
            transformed += matrix.slice(j * side + side - i - 1, j * side + side - i)
        }
    }
    console.log("")
    square_printer(transformed, side)

    var transformed2 = ""
    for (var i = 0; i < side; i++) {
        for (var j = 0; j < side; j++) {
            transformed2 += transformed.slice(j * side + i, j * side + i + 1)
        }
    }
    console.log("")
    square_printer(transformed2, side)

    transformed3 = ""
    for (var i = 0; i < side; i++) {
        for (var j = 0; j < side; j++) {
            transformed3 += transformed.slice(j * side + side - i - 1, j * side + side - i)
        }
    }
    console.log("")
    square_printer(transformed3, side)

    var transformed4 = ""
    for (var i = 0; i < side; i++) {
        for (var j = 0; j < side; j++) {
            transformed4 += transformed3.slice(j * side + i, j * side + i + 1)
        }
    }
    console.log("")
    square_printer(transformed4, side)

    var transformed5 = ""
    for (var i = 0; i < side; i++) {
        for (var j = 0; j < side; j++) {
            transformed5 += transformed3.slice(j * side + side - i - 1, j * side + side - i)
        }
    }
    console.log("")
    square_printer(transformed5, side)

    var transformed6 = ""
    for (var i = 0; i < side; i++) {
        for (var j = 0; j < side; j++) {
            transformed6 += transformed5.slice(j * side + i, j * side + i + 1)
        }
    }
    console.log("")
    square_printer(transformed6, side)

}

var square_printer = function(matrix, len) {
    for (var i = 0; i < len * len; i += len) {
        console.log(matrix.slice(i, i + len))
    }
}

var filename = process.argv[2]

fs.readFile(process.argv[2], function(err, text) {
    if (err) {
        wlog.err("File cannot be opened")
    }
    // remove newlines and send to rotator function
    rotator(text.toString().replace(/(\r\n|\n|\r)/gm,""))
})
