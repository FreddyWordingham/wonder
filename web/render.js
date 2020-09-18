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
    render_tiles(canvas, state, tile_map);
    render_entities(canvas, state, ents_map);
}


/// -- Components --
/// Render the background tiles.
function render_tiles(canvas, state, tile_map) {
    console.log("Rendering tiles");

    let tile = tile_map[' '].front;
    for (let i = 0; i < num_tiles_x; ++i) {
        for (let j = 0; j < num_tiles_y; ++j) {
            draw_tile(canvas, tile, i, j);
        }
    }
}

/// Render the entities.
function render_entities(canvas, state, ents_map) {
    let ent_count = state.update_pos_buff();
    console.log("Rendering ", ent_count, " entites");

    const pos_ptr = state.read_pos_buff();
    const pos = new Int32Array(memory.buffer, pos_ptr, ent_count * 2);
    // const kind_ptr = state.read_kind_buff();
    // const kind = new Int32Array(memory.buffer, kind_ptr, ent_count);
    const kind = ['d', '*', '*', '*', '*', '*', '*', '*'];

    for (let i = 0; i < ent_count; ++i) {
        const x = pos[2 * i];
        const y = pos[(2 * i) + 1];
        const k = kind[i];
        draw_tile(canvas, ents_map[k].front, x, y);
    }
}
