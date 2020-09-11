//! Universe state structure.

use crate::{access, comp::*, sys::*};
use rltk::{GameState, Rltk};
use specs::{Join, RunNow, World, WorldExt};

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
        self.run_systems();

        ctx.cls();
        ctx.print(1, 1, "Hello Rust World");

        let positions = self.ecs.read_storage::<Position>();
        let renderables = self.ecs.read_storage::<Renderable>();

        for (pos, render) in (&positions, &renderables).join() {
            ctx.set(pos.x(), pos.y(), render.fg(), render.bg(), render.glyph());
        }
    }
}
