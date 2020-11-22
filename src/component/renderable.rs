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

impl Renderable {
    /// Construct a new instance.
    #[inline]
    #[must_use]
    pub fn new(glyph: FontCharType, fg: RGB, bg: RGB) -> Self {
        Self { glyph, fg, bg }
    }
}
