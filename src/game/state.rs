//! Game state.

use crate::component::{Position, Renderable};
use rltk::{GameState, Rltk, RGB};
use specs::{Builder, World, WorldExt};

/// Game state.
pub struct State {
    /// Entity-Component-System
    ecs: World,
}

impl State {
    /// Construct a new instance.
    #[inline]
    #[must_use]
    pub fn new() -> Self {
        let mut ecs = World::new();
        ecs.register::<Position>();
        ecs.register::<Renderable>();

        Self { ecs }
    }

    /// Add an enemy entity.
    #[inline]
    #[must_use]
    pub fn add_enemy(&mut self, x: i32, y: i32) {
        self.ecs
            .create_entity()
            .with(Position::new(x, y))
            .with(Renderable::new(
                "*",
                RGB::named(rltk::RED),
                RGB::named(rltk::BLACK),
            ))
            .build();
    }
}

impl Default for State {
    fn default() -> Self {
        Self::new()
    }
}

impl GameState for State {
    #[inline]
    fn tick(&mut self, ctx: &mut Rltk) {
        ctx.cls();
        ctx.print(1, 1, "Hello Rust World");
    }
}
