export function clear_canvas(canvas) {
    canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export function fill_canvas(canvas) {
    canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export function draw_circle(canvas, fx, fy, rad) {
    const ctx = canvas.ctx;
    ctx.beginPath();
    ctx.arc(canvas.width * fx, canvas.height * (1.0 - fy), rad, 0, 2 * Math.PI, true);
    ctx.fill();
    ctx.stroke();
}

export function draw_rect(canvas, fx, fy, dx, dy) {
    const ctx = canvas.ctx;
    ctx.beginPath();
    ctx.fillRect(canvas.width * fx, canvas.height * (1.0 - fy), canvas.width * dx, -canvas.width * dy);
    ctx.stroke();
}
