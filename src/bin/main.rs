//! Main test function.

use rltk::*;
use specs::{Builder, WorldExt};
use wonder::{comp::*, ent::*, State};

fn main() -> rltk::BError {
    // Create rendering console.
    let context = RltkBuilder::simple80x50()
        .with_title("Roguelike Tutorial")
        .build()?;

    // Build universe.
    let mut state = State::new();

    // Populate it.
    add_player(&mut state, 40, 40);
    for i in 0..10 {
        add_monster(&mut state, 4 + i * 7, 20);
    }

    // Run the main logic.
    rltk::main_loop(context, state)
}

/// Add a thing to the world.
#[inline]
fn add_player(state: &mut State, x: i32, y: i32) {
    state
        .ecs_mut()
        .create_entity()
        .with(Position::new(x, y))
        .with(Renderable::new('@', YELLOW, BLACK))
        .with(Player {})
        .build();
}

/// Add a thing to the world.
#[inline]
fn add_monster(state: &mut State, x: i32, y: i32) {
    state
        .ecs_mut()
        .create_entity()
        .with(Position::new(x, y))
        .with(Renderable::new('o', RED, BLACK))
        .with(LeftMover {})
        .build();
}
