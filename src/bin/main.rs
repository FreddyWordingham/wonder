//! Main test function.

use rltk::*;
use wonder::State;

fn main() -> rltk::BError {
    // Create rendering console.
    let context = RltkBuilder::simple80x50()
        .with_title("Roguelike Tutorial")
        .build()?;

    // Build universe.
    let mut state = State::new();

    // Populate it.
    state.add_player(40, 40);
    for i in 0..10 {
        state.add_monster(4 + i * 7, 20);
    }

    // Run the main logic.
    rltk::main_loop(context, state)
}
