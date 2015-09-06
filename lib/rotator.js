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

    // Check the size of matrix is power of 2
    if (Math.sqrt(len) !== Math.floor(Math.sqrt(len))) {
        wlog.err("Given array can't form a square, is not power of two")
    }

}

