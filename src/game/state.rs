//! Game state.

use crate::component::{LeftWalker, Position, Renderable};
use rltk::{GameState, Rltk, RGB};
use specs::{Builder, Join, World, WorldExt};

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

    /// Add an player entity.
    #[inline]
    pub fn add_player(&mut self, x: i32, y: i32) {
        self.ecs
            .create_entity()
            .with(Position::new(x, y))
            .with(Renderable::new(
                'O',
                RGB::named(rltk::YELLOW),
                RGB::named(rltk::BLACK),
            ))
            .build();
    }

    /// Add an enemy entity.
    #[inline]
    pub fn add_enemy(&mut self, x: i32, y: i32) {
        self.ecs
            .create_entity()
            .with(Position::new(x, y))
            .with(Renderable::new(
                '*',
                RGB::named(rltk::RED),
                RGB::named(rltk::BLACK),
            ))
            .with(LeftWalker::new())
            .build();
    }
}

impl Default for State {
    #[inline]
    #[must_use]
    fn default() -> Self {
        Self::new()
    }
}

impl GameState for State {
    #[inline]
    fn tick(&mut self, ctx: &mut Rltk) {
        println!("Tick!");

        ctx.cls();

        let positions = self.ecs.read_storage::<Position>();
        let renderables = self.ecs.read_storage::<Renderable>();

        for (pos, render) in (&positions, &renderables).join() {
            ctx.set(pos.x, pos.y, render.fg, render.bg, render.glyph);
        }
    }
}
