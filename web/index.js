import {
    clear_canvas,
    draw_tile
} from "./draw";
import {
    load_ent_map,
    load_tile_map
} from "./sprites";
import {
    magnification,
    num_tiles_x,
    num_tiles_y,
    render,
    sprite_height,
    sprite_ratio,
    sprite_width
} from "./render";
import {
    State
} from "wonder";
import {
    toggle_forms
} from "./ui";



/// == HANDLES ==
/// -- Forms --
/// Form above canvas.
const top_form = document.getElementById("top_form");
/// Form below canvas.
const bottom_form = document.getElementById("bottom_form");



/// == GLOBALS ==
/// -- Time --
/// Game loop handle.
var interval = null;



/// == LISTENERS ==
/// -- Buttons --
/// Check for time button click.
time_button.addEventListener("click", event => {
    if (is_paused()) {
        play();
    } else {
        pause();
    }
});


/// -- Keypress --
/// Handle a keypress.
document.body.onkeyup = function (e) {
    console.log("Registered keypress: ", e.keyCode);

    if (e.keyCode == 32) { // spacebar.
        if (is_paused()) {
            play();
        } else {
            pause();
        }
    } else if (e.keyCode == 27) { // escape.
        toggle_forms(top_form, bottom_form);
    } else if (e.keyCode == 82) { // 'r'.
    }
}



/// == FUNCTIONS ==
/// -- Initialisation --
/// Initialise a canvas object.
function init_canvas(id, width, height) {
    console.log("Initialising canvas...");

    const canvas = document.getElementById(id);
    canvas.width = width;
    canvas.height = height;

    return {
        width,
        height,
        ctx: canvas.getContext('2d')
    }
}


/// -- Time --
/// Check if time is paused.
function is_paused() {
    return interval === null;
};

/// Start time.
function play() {
    console.log("PLAY");
    time_button.textContent = "pause";
    interval = setInterval(tick, 1000);
};

/// Stop time.
function pause() {
    console.log("PAUSE");
    time_button.textContent = "start";
    clearInterval(interval);
    interval = null;
};

/// Tick forward one iteration.
function tick() {
    console.log("*tick*");
    state.progress(1);
    render(canvas, state, tile_map);
}



/// == START ==
/// -- Initialisation --
/// Required horizontal canvas resolution.
const num_pix_x = magnification * (num_tiles_x * sprite_width);
/// Required vertical canvas resolution.
const num_pix_y = magnification * ((num_tiles_y + (sprite_ratio - 1)) * sprite_height);




/// -- Main --
//  Initialise the canvas.
const canvas = init_canvas("main_canvas", num_pix_x, num_pix_y);
const ent_map = load_ent_map();
const tile_map = load_tile_map();

var state = State.new();
play();
