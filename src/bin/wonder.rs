use arctk::game::{Map, State};
use rltk::{main_loop, RltkBuilder};

fn main() -> rltk::BError {
    // Rendering window.
    let width = 80;
    let height = 50;
    let context = RltkBuilder::simple(width, height)?
        .with_title("Roguelike - Wonder")
        .build()?;

    // Map to play.
    let map = Map::new_random([width, height]);
    // Game state.
    let mut gs = State::new(map);

    // Add entities.
    gs.add_player((width / 2) as i32, (height / 3) as i32);
    for i in 0..10 {
        gs.add_enemy(i as i32 * 3, (2 * height as i32) / 3);
    }

    // Run the main loop.
    main_loop(context, gs)
}
