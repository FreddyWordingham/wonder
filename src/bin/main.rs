//! Main test function.

use rltk::*;
use wonder::comp::*;
use wonder::State;

fn main() -> rltk::BError {
    // Create rendering console.
    let context = RltkBuilder::simple80x50()
        .with_title("Roguelike Tutorial")
        .build()?;

    // Build universe.
    let mut state = State::new();

    // Populate it.
    state.add_thing(Position::new(0, 0), Renderable::new('@', YELLOW, BLACK));
    for i in 0..10 {
        state.add_thing(
            Position::new(i * 7 + 1, 20),
            Renderable::new('☺', RED, BLACK),
        );
    }

    // Run the main logic.
    rltk::main_loop(context, state)
}
