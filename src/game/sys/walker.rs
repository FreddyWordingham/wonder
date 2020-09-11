//! Walking travel system.

use crate::comp::*;
use specs::{Join, ReadStorage, System, WriteStorage};

#[allow(clippy::module_name_repetitions)]

/// Walk left moving objects left one tile.
pub struct LeftWalker {}

impl<'a> System<'a> for LeftWalker {
    type SystemData = (ReadStorage<'a, LeftMover>, WriteStorage<'a, Position>);

    #[inline]
    fn run(&mut self, (lefty, mut pos): Self::SystemData) {
        for (_lefty, pos) in (&lefty, &mut pos).join() {
            pos.x -= 1;
            if pos.x < 0 {
                pos.x = 79;
            }
        }
    }
}
