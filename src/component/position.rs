//! Position component.

use specs::{Component, DenseVecStorage};
use specs_derive::Component;

/// Spatial positioning.
#[derive(Component)]
pub struct Position {
    /// Horizontal component.
    x: i32,
    /// Vertical component.
    y: i32,
}

impl Position {
    /// Construct a new instance.
    #[inline]
    #[must_use]
    pub fn new(x: i32, y: i32) -> Self {
        Self { x, y }
    }
}
