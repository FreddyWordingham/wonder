/// == FUNCTIONS ==
/// -- Loading --
export function load_symbol_map() {
    let map = new Map();

    map['p'] = human;
    map['g'] = goblin;

    map
}


/// -- Drawing --
/// Draw a human symbol.
function human(x, y, fg, bg) {
    console.log("Drawing human.");
}

/// Draw a goblin symbol.
function goblin(x, y, fg, bg) {
    console.log("Drawing goblin.");
}
