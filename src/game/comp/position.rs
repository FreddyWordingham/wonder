//! Location component.

use crate::clone;
use specs::prelude::*;
use specs_derive::Component;

/// Two-dimensional location.
#[derive(Component)]
pub struct Position {
    /// Horizontal position.
    x: i32,
    /// Vertical position.
    y: i32,
}

impl Position {
    clone!(x, i32);
    clone!(y, i32);

    /// Construct a new instance.
    #[inline]
    #[must_use]
    pub fn new(x: i32, y: i32) -> Self {
        Self { x, y }
    }
}
