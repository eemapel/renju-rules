function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

// Board properties
define("BOARDSIZE", 15)

// Board square properties
define("EMPTY", 0)
define("BLACK", 1)
define("WHITE", 2)
define("WALL", 3)

// Position formats
define("POSTYPE_DOTXY", 0)

