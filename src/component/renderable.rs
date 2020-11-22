//! Position component.

use rltk::RGB;
use specs::{Component, DenseVecStorage};
use specs_derive::Component;

/// Rendering data.
#[derive(Component)]
struct Renderable {
    /// Character.
    glyph: rltk::FontCharType,
    /// Character colour.
    fg: RGB,
    /// Background colour.
    bg: RGB,
}
