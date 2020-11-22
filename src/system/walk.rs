//! Walk-movement system

use crate::component::{LeftWalker, Position};
use specs::{Join, ReadStorage, System, WriteStorage};

/// Walking system.
pub struct Walk {}

impl Walk {
    /// Construct a new instance.
    #[inline]
    #[must_use]
    pub const fn new() -> Self {
        Self {}
    }
}

impl<'a> System<'a> for Walk {
    type SystemData = (ReadStorage<'a, LeftWalker>, WriteStorage<'a, Position>);

    fn run(&mut self, (lefty, mut pos): Self::SystemData) {
        for (_lefty, pos) in (&lefty, &mut pos).join() {
            pos.x -= 1;
            if pos.x < 0 {
                pos.x = 79;
            }
        }
    }
}
