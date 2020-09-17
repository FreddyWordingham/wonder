import {
    draw_tile
} from "./draw";
// import {
//     load_sprite_map
// } from "./sprites";
import {
    render
} from "./render";
import {
    State
} from "wonder";
import {
    toggle_forms
} from "./ui";



/// == HANDLES ==
/// -- Forms --
const top_form = document.getElementById("top_form");
const bottom_form = document.getElementById("bottom_form");



/// == GLOBALS ==
/// -- Time --
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
    interval = setInterval(tick, 100);
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
    render(canvas, state, sprite_map);
}



/// == START ==
/// -- Initialisation --
const num_tiles_x = 17;
const num_tiles_y = 21;
const sprite_width = 64;
const sprite_height = 46;
const num_pix_x = num_tiles_x * sprite_width;
const num_pix_y = num_tiles_y * sprite_height;
const canvas = init_canvas("main_canvas", num_pix_x, num_pix_y);

var sprite = new Image();
sprite.onload = function () {
    console.log("Loaded image.");
    var t0 = performance.now()

    for (let i = 3; i < (num_tiles_x - 3); ++i) {
        for (let j = 3; j < (num_tiles_y - 3); ++j) {
            draw_tile(canvas, sprite, i, j);
        }
    }


    var t1 = performance.now()
    console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
};
sprite.src = "res/sprites/blocks_front.png";



// const sprite_map = load_sprite_map();

// const state = State.new();
// state.add_player(40, 40);
// for (let i = 0; i < 10; ++i) {
//     state.add_monster(4 + i * 7, 20);
// }

// play();
