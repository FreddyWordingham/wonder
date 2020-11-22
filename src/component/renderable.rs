//! Position component.

use rltk::{FontCharType, RGB};
use specs::{Component, DenseVecStorage};
use specs_derive::Component;

/// Rendering data.
#[derive(Component)]
pub struct Renderable {
    /// Character.
    glyph: FontCharType,
    /// Character colour.
    fg: RGB,
    /// Background colour.
    bg: RGB,
}
