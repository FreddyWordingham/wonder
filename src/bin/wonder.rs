use arctk::game::{cartographer, State};
use rltk::{main_loop, RandomNumberGenerator, RltkBuilder};

fn main() -> rltk::BError {
    // Rendering window.
    let width = 128;
    let height = 64;
    let context = RltkBuilder::simple(width, height)?
        .with_title("Roguelike - Wonder")
        .build()?;

    // Resources.
    let mut rng = RandomNumberGenerator::new();

    // Map generation.
    let map = cartographer::forest(&mut rng);
    let map = cartographer::caves(&mut rng);

    let spawn = map.player_spawn;
    let mut gs = State::new(map);

    // Add entities.
    gs.add_player(spawn.x, spawn.y);
    // for i in 0..10 {
    //     gs.add_enemy(i as i32 * 3, (2 * height as i32) / 3);
    // }

    // Run the main loop.
    main_loop(context, gs)
}
