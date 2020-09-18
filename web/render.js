import {
    memory
} from "wonder/wonder_bg";
import {
    draw_tile
} from "./draw";



/// == GLOBALS ==
/// -- Viewing --
/// Known sprite width.
export const sprite_width = 64;
/// Known sprite height.
export const sprite_height = 46;
/// Maximum sprite tile height.
export const sprite_ratio = 4;
/// Number of horizontal tiles.
export const num_tiles_x = 17;
/// Number of vertical tiles.
export const num_tiles_y = 21;
/// Sprite magnification.
export const magnification = 1;



/// == FUNCTIONS ==
/// -- Control --
/// Call all the sub-rendering components.
export function render(canvas, state, tile_map, ents_map) {
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
    // render_entities(canvas, state, ents_map);
    render_tiles(canvas, state, tile_map);
}


/// -- Components --
/// Render the background tiles.
function render_tiles(canvas, state, tile_map) {
    console.log("Rendering tiles");

    let tile = tile_map[' '].right;
    for (let i = 0; i < num_tiles_x; ++i) {
        for (let j = 0; j < num_tiles_y; ++j) {
            draw_tile(canvas, tile, i, j);
        }
    }
}

/// Render the entities.
// function render_tiles(canvas, state, tile_map) {
//     console.log("Rendering tiles");
//     // let ent_count = state.update_pos_buff();

//     const pos_ptr = state.read_pos_buff();
//     const pos = new Int32Array(memory.buffer, pos_ptr, ent_count * 2);

//     // for (let i = 0; i < ent_count; ++i) {
//     //     const x = pos[2 * i];
//     //     const y = pos[(2 * i) + 1];

//     //     const fx = x / 80.0;
//     //     const fy = y / 50.0;

//     //     draw_sprite(canvas, sprite_map['p'], fx, fy, 0.05, 0.05);
//     // }


//     let tile = tile_map[' '].right;
//     for (let i = 0; i < num_tiles_x; ++i) {
//         for (let j = 0; j < num_tiles_y; ++j) {
//             draw_tile(canvas, tile, i, j);
//         }
//     }
// }
