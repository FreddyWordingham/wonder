//! Location component.

use specs::prelude::*;
use specs_derive::Component;

/// Two-dimensional location.
#[derive(Component)]
pub struct Position {
    /// Horizontal position.
    pub x: i32,
    /// Vertical position.
    pub y: i32,
}

impl Position {
    /// Construct a new instance.
    #[inline]
    #[must_use]
    pub const fn new(x: i32, y: i32) -> Self {
        Self { x, y }
    }
}
