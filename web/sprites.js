/// == FUNCTIONS ==
/// -- Loading --
export function load_sprite_map() {
    console.log("Loading sprites...");

    let map = new Map();
    map['a'] = load_sprite_set("./res/sprites/dino");
    map['g'] = load_sprite_set("./res/sprites/ground/0");
    map['h'] = load_sprite_set("./res/sprites/ground/1");
    map['j'] = load_sprite_set("./res/sprites/ground/2");
    map['k'] = load_sprite_set("./res/sprites/ground/3");
    map['*'] = load_sprite_set("./res/sprites/explode/1");
    console.log("Sprites loaded.");

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
