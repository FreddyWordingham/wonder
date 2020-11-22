//! Position component.

use specs::{Component, VecStorage};

/// Spatial positioning.
struct Position {
    /// Horizontal component.
    x: i32,
    /// Vertical component.
    y: i32,
}

impl Component for Position {
    type Storage = VecStorage<Self>;
}
