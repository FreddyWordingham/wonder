/// == FUNCTIONS ==
/// -- Loading --
/// Load the tile sprite map.
export function load_tile_map() {
    console.log("Loading tile sprites...");

    let map = new Map();
    map[' '] = load_sprite_set("./res/sprites/ground/0");
    map['w'] = load_sprite_set("./res/sprites/explode/1");

    console.log("Tile sprites loaded.");

    return map;
}

/// Load the entity sprite map.
export function load_ent_map() {
    console.log("Loading entity sprites...");

    let map = new Map();
    map['d'] = load_sprite_set("./res/sprites/dino");
    map['*'] = load_sprite_set("./res/sprites/explode/3");

    console.log("Entity sprites loaded.");

    return map;
}


/// -- Drawing --
/// Load a single sprite.
function load_sprite(path) {
    let img = new Image();
    img.onload = function () {
        console.log("Loaded image: ", path);
    };
    img.src = path;

    return img;
}

/// Load a set of sprites.
function load_sprite_set(path) {
    var sp = {
        front: load_sprite(path + "/front.png"),
        right: load_sprite(path + "/right.png"),
        back: load_sprite(path + "/back.png"),
        left: load_sprite(path + "/left.png"),
    }

    return sp;
}
