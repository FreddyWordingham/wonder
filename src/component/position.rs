//! Position component.

use specs::{Component, DenseVecStorage};
use specs_derive::Component;

/// Spatial positioning.
#[derive(Component)]
struct Position {
    /// Horizontal component.
    x: i32,
    /// Vertical component.
    y: i32,
}
