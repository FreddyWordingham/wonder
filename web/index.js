import {
    draw_rect
} from "./draw";
// import {
//     Universe
// } from "wonder";
// import {
//     memory
// } from "wonder/wonder_bg";
import {
    toggle_forms
} from "./ui";



//  == HANDLES ==
/// -- Forms --
const top_form = document.getElementById("top_form");
const bottom_form = document.getElementById("bottom_form");



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



/// == START ==
console.log("Hello world!");

const canvas = init_canvas("main_canvas", 800, 800);
console.log(canvas.width);
console.log(canvas.height);

canvas.ctx.fillStyle = "green";
draw_rect(canvas, 0.4, 0.4, 0.2, 0.2);
