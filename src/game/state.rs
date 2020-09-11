//! Universe state structure.

use crate::{
    access,
    comp::{Position, Renderable},
};
use rltk::{GameState, Rltk};
use specs::{Builder, Join, World, WorldExt};

/// Universe state information.
pub struct State {
    /// Entity-component-system.
    ecs: World,
}

impl State {
    access!(ecs, World);

    /// Construct a new instance.
    #[inline]
    #[must_use]
    pub fn new() -> Self {
        let mut ecs = World::new();
        ecs.register::<Position>();
        ecs.register::<Renderable>();

        Self { ecs }
    }

    /// Add a thing to the world.
    #[inline]
    pub fn add_thing(&mut self, pos: Position, rend: Renderable) {
        self.ecs.create_entity().with(pos).with(rend).build();
    }
}

impl GameState for State {
    #[inline]
    fn tick(&mut self, ctx: &mut Rltk) {
        ctx.cls();
        ctx.print(1, 1, "Hello Rust World");

        let positions = self.ecs.read_storage::<Position>();
        let renderables = self.ecs.read_storage::<Renderable>();

        for (pos, render) in (&positions, &renderables).join() {
            ctx.set(pos.x(), pos.y(), render.fg(), render.bg(), render.glyph());
        }
    }
}
