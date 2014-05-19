#!/usr/bin/env node

/*
 * A helper library with functions to verify whether a given Renju move is 
 * valid according to the rules.
 */

var fs = require("fs")
var common = require('./common');

// Global array for board
var board = new Array();

var Color =
{
    Empty : 0,
    Black : 1,
    White : 2,
    Wall : 3
}

// If no arguments given, exit
if (process.argv.length < 3)
{
    console.log("Not enough arguments, exiting!");
    process.exit(1);
}

fileName = process.argv[2];

fs.exists(fileName, function(exists) {
    if (exists) {
        fs.stat(fileName, function(error, stats) {
            fs.open(fileName, "r", function(error, fd) {
                var buffer = new Buffer(stats.size);
                fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
                    storeData(buffer.toString("utf8", 0, buffer.length));
                });

                fs.close(fd);
            });
        });
    }
    else {
        console.log("File given as parameter not found!");
        process.exit(1);
    }
});

function storeData(data) {
	var lines = data.split('\n');
    for(var i = 0; i < lines.length - 1; i++) {
        var row = lines[i];

        if (row.length != 15) {
            console.log("Incorrect row length in position file!");
            process.exit(1);
        }

        for (var j = 0; j < row.length; j++) {
            switch(row[j]) {
                case ' ':
                case '.':
                    board.push(Color.Empty);
                    break;
                case 'x':
                case 'X':
                    board.push(Color.Black);
                    break;
                case 'o':
                case 'O':
                    board.push(Color.White);
                    break;
                default:
                    console.log("Illegal character in position file!");
                    process.exit(1);
            }
        }
    }
}

common.dim();
