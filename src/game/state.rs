//! Universe state structure.

use crate::{
    access,
    comp::{Position, Renderable},
};
use rltk::{GameState, Rltk};
use specs::{World, WorldExt};

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
}

impl GameState for State {
    #[inline]
    #[must_use]
    fn tick(&mut self, ctx: &mut Rltk) {
        ctx.cls();
        ctx.print(1, 1, "Hello Rust World");
    }
}
