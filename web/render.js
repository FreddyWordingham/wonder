import {
    memory
} from "wonder/wonder_bg";
import {
    draw_sprite
} from "./draw";



/// == FUNCTIONS ==
/// -- Control --
export function render(canvas, state, sprite_map) {
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
    render_ents(canvas, state, sprite_map);
}


/// -- Components --
function render_ents(canvas, state, sprite_map) {
    let ent_count = state.update_pos_buff();

    const pos_ptr = state.read_pos_buff();
    const pos = new Int32Array(memory.buffer, pos_ptr, ent_count * 2);

    for (let i = 0; i < ent_count; ++i) {
        const x = pos[2 * i];
        const y = pos[(2 * i) + 1];

        const fx = x / 80.0;
        const fy = y / 50.0;

        draw_sprite(canvas, sprite_map['p'], fx, fy, 0.05, 0.05);
    }
}
