//! Main test function.

use rltk::{RltkBuilder, BLACK, YELLOW};
use wonder::comp::*;
use wonder::State;

fn main() -> rltk::BError {
    let context = RltkBuilder::simple80x50()
        .with_title("Roguelike Tutorial")
        .build()?;

    let mut state = State::new();
    state.add_thing(Position::new(0, 0), Renderable::new('@', YELLOW, BLACK));

    rltk::main_loop(context, state)
}
