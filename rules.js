#!/usr/bin/env node

/*
 * A helper library with functions to verify whether a given Renju move is
 * valid according to the rules.
 */

/*jshint asi: true*/

var gameData = require('./lib/gamedata')
var fileTools = require('./lib/filetools')

// If no arguments given, exit
if (process.argv.length < 3)
{
    console.log("Not enough arguments, exiting!")
    process.exit(1)
}

fileName = process.argv[2]

var ft = new fileTools()

var match = new gameData()
match.setBoard(ft.readFile(fileName))

console.log(match.showMoveCount())
ft.show(match.getBoard())

