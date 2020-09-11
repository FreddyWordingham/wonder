//! Universe state structure.

use crate::{access, comp::*, ent::*, sys::*};
use ndarray::Array2;
use rltk::{GameState, Rltk, VirtualKeyCode, BLACK, RED, YELLOW};
use specs::{Builder, Join, RunNow, World, WorldExt};
use std::cmp::{max, min};
use wasm_bindgen::prelude::wasm_bindgen;

/// Universe state information.
#[wasm_bindgen]
pub struct State {
    /// Entity-component-system.
    ecs: World,
    /// Position data buffer.
    pos_buff: Array2<i32>,
}

impl State {
    access!(ecs, ecs_mut, World);
}

#[wasm_bindgen]
#[allow(clippy::missing_inline_in_public_items)]
impl State {
    /// Create a new instance.
    #[must_use]
    pub fn new() -> Self {
        let mut ecs = World::new();
        ecs.register::<Position>();
        ecs.register::<Renderable>();
        ecs.register::<LeftMover>();
        ecs.register::<Player>();

        Self {
            ecs,
            pos_buff: Array2::zeros([0, 0]),
        }
    }

    /// Update the position data buffer and get its length.
    #[must_use]
    pub fn update_pos_buff(&mut self) -> usize {
        let positions = self.ecs.read_storage::<Position>();
        let renderables = self.ecs.read_storage::<Renderable>();

        let list: Vec<_> = (&positions, &renderables)
            .join()
            .map(|(pos, _render)| [pos.x, pos.y])
            .collect();

        self.pos_buff = Array2::from(list);

        self.pos_buff.len() / 2
    }

    /// Get a pointer to the position buffer.
    #[must_use]
    pub fn read_pos_buff(&mut self) -> *const i32 {
        self.pos_buff.as_ptr()
    }

    /// Tick the state forward a number of times.
    pub fn progress(&mut self, n: i32) {
        for _ in 0..n {
            let mut lw = LeftWalker {};
            lw.run_now(&self.ecs);
            self.ecs.maintain();
        }
    }

    /// Add a player to the world.
    pub fn add_player(&mut self, x: i32, y: i32) {
        self.ecs
            .create_entity()
            .with(Position::new(x, y))
            .with(Renderable::new('@', YELLOW, BLACK))
            .with(Player {})
            .build();
    }

    /// Add a monster to the world.
    pub fn add_monster(&mut self, x: i32, y: i32) {
        self.ecs
            .create_entity()
            .with(Position::new(x, y))
            .with(Renderable::new('o', RED, BLACK))
            .with(LeftMover {})
            .build();
    }
}

impl GameState for State {
    #[inline]
    fn tick(&mut self, ctx: &mut Rltk) {
        player_input(self, ctx);
        self.progress(1);

        ctx.cls();
        ctx.print(1, 1, "Hello Rust World");

        let positions = self.ecs.read_storage::<Position>();
        let renderables = self.ecs.read_storage::<Renderable>();

        for (pos, render) in (&positions, &renderables).join() {
            ctx.set(pos.x, pos.y, render.fg, render.bg, render.glyph);
        }
    }
}

/// Handle player input.
#[inline]
fn player_input(state: &mut State, ctx: &mut Rltk) {
    // Player movement
    match ctx.key {
        None => {}
        Some(key) => match key {
            VirtualKeyCode::Left | VirtualKeyCode::A => try_move_player(-1, 0, state.ecs_mut()),
            VirtualKeyCode::Right | VirtualKeyCode::D => try_move_player(1, 0, state.ecs_mut()),
            VirtualKeyCode::Up | VirtualKeyCode::W => try_move_player(0, -1, state.ecs_mut()),
            VirtualKeyCode::Down | VirtualKeyCode::S => try_move_player(0, 1, state.ecs_mut()),
            _ => {}
        },
    }
}

/// Move the players.
#[inline]
fn try_move_player(delta_x: i32, delta_y: i32, ecs: &mut World) {
    let mut positions = ecs.write_storage::<Position>();
    let mut players = ecs.write_storage::<Player>();

    for (_player, pos) in (&mut players, &mut positions).join() {
        pos.x = min(79, max(0, pos.x + delta_x));
        pos.y = min(49, max(0, pos.y + delta_y));
    }
}
