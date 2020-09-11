//! Main test function.

use rltk::RltkBuilder;
use wonder::State;

fn main() -> rltk::BError {
    let context = RltkBuilder::simple80x50()
        .with_title("Roguelike Tutorial")
        .build()?;
    let gs = State::new();
    rltk::main_loop(context, gs)
}
