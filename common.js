// common.js
// =========
module.exports = {
    dim: function () {
        console.log("Function dim called");
    },
    clearboard: function () {
        // whatever
    },
    setMove: function(board, idx, player) {
        board[idx] = player;
    }
};
