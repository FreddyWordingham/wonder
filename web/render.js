import {
    memory
} from "wonder/wonder_bg";
import {
    clear_canvas,
    fill_canvas,
    draw_circle,
    draw_rect
} from "./draw";



/// == FUNCTIONS ==
/// -- Control --
export function render(canvas, state) {
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
    render_ents(canvas, state);
}


/// -- Components --
function render_ents(canvas, state) {
    let ent_count = state.update_pos_buff();

    const pos_ptr = state.read_pos_buff();
    const pos = new Int32Array(memory.buffer, pos_ptr, ent_count * 2);

    for (let i = 0; i < ent_count; ++i) {
        const x = pos[2 * i];
        const y = pos[(2 * i) + 1];

        canvas.ctx.lineWidth = 2;
        canvas.ctx.strokeStyle = "black";
        canvas.ctx.fillStyle = "blue";
        draw_circle(canvas, x / 80, y / 50, 20);
    }
}
