use arctk::game::{Map, State};
use rltk::{main_loop, GameState, Rltk, RltkBuilder, VirtualKeyCode, RGB};
use specs::prelude::*;
use specs_derive::*;
use std::cmp::{max, min};

fn main() -> rltk::BError {
    // use rltk::RltkBuilder;
    // let context = RltkBuilder::simple80x50()
    //     .with_title("Roguelike Tutorial")
    //     .build()?;
    // let mut gs = State { ecs: World::new() };
    // gs.ecs.register::<Position>();
    // gs.ecs.register::<Renderable>();
    // gs.ecs.register::<Player>();

    // gs.ecs.insert(new_map());

    // gs.ecs
    //     .create_entity()
    //     .with(Position { x: 40, y: 25 })
    //     .with(Renderable {
    //         glyph: rltk::to_cp437('@'),
    //         fg: RGB::named(rltk::YELLOW),
    //         bg: RGB::named(rltk::BLACK),
    //     })
    //     .with(Player {})
    //     .build();

    // rltk::main_loop(context, gs)

    let width = 80;
    let height = 50;

    let context = RltkBuilder::simple(width, height)?
        .with_title("Roguelike - Wonder")
        .build()?;
    let mut gs = State::new(Map::new([width, height]));

    gs.add_player((width / 2) as i32, (height / 3) as i32);
    for i in 0..10 {
        gs.add_enemy(i as i32 * 3, (2 * height as i32) / 3);
    }

    main_loop(context, gs)
}
