//! Left-liking component.

use specs::{Component, DenseVecStorage};
use specs_derive::Component;

/// Tendency to move left when possible.
#[derive(Component)]
pub struct LeftMover {}

impl LeftMover {
    /// Construct a new instance.
    #[inline]
    #[must_use]
    pub const fn new() -> Self {
        Self {}
    }
}
