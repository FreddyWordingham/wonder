//! Universe state structure.

use crate::{access, comp::*, ent::*, sys::*};
use rltk::{GameState, Rltk, VirtualKeyCode};
use specs::{Join, RunNow, World, WorldExt};
use std::cmp::{max, min};

/// Universe state information.
pub struct State {
    /// Entity-component-system.
    ecs: World,
}

impl State {
    access!(ecs, ecs_mut, World);

    /// Construct a new instance.
    #[inline]
    #[must_use]
    pub fn new() -> Self {
        let mut ecs = World::new();
        ecs.register::<Position>();
        ecs.register::<Renderable>();
        ecs.register::<LeftMover>();

        ecs.register::<Player>();

        Self { ecs }
    }

    /// Run the core systems.
    #[inline]
    fn run_systems(&mut self) {
        let mut lw = LeftWalker {};
        lw.run_now(&self.ecs);
        self.ecs.maintain();
    }
}

impl GameState for State {
    #[inline]
    fn tick(&mut self, ctx: &mut Rltk) {
        player_input(self, ctx);
        self.run_systems();

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
        None => {} // Nothing happened
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
