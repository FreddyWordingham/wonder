import {
    draw_rect
} from "./draw";
import {
    load_sprite_map
} from "./sprites";
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
const sprite_map = load_sprite_map();
const canvas = init_canvas("main_canvas", 800, 500);

const state = State.new();
state.add_player(40, 40);
for (let i = 0; i < 10; ++i) {
    state.add_monster(4 + i * 7, 20);
}

play();
