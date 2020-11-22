//! Game state.

use rltk::{GameState, Rltk};

/// Game state.
struct State {}

impl GameState for State {
    fn tick(&mut self, ctx: &mut Rltk) {
        ctx.cls();
        ctx.print(1, 1, "Hello Rust World");
    }
}
