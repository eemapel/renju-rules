#!/usr/bin/env node

/*
 * A helper library with functions to verify whether a given Renju move is
 * valid according to the rules.
 */

/*jshint asi: true*/

var gameData = require('./lib/gamedata')
var fileTools = require('./lib/filetools')

// Global constants
var C = require('./lib/constants')

// If no arguments given, exit
if (process.argv.length < 3)
{
/// TEST
    var res = String.fromCharCode(9679)
    console.log(res.green)
/// TEST

    console.log("Not enough arguments, exiting!")
    process.exit(1)
}

fileName = process.argv[2]

var ft = new fileTools()
console.log(ft.readFile(fileName))

var match = new gameData()
match.nextMove()
console.log(match.showMoveCount())
console.log(C.WHITE)
