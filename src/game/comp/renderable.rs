//! Location component.

use rltk::{to_cp437, FontCharType, RGBA};
use specs::prelude::*;
use specs_derive::Component;

/// Drawable information.
#[derive(Component)]
pub struct Renderable {
    /// Character.
    pub glyph: FontCharType,
    /// Foreground colour.
    pub fg: RGBA,
    /// Background colour.
    pub bg: RGBA,
}

impl Renderable {
    /// Construct a new instance.
    #[inline]
    #[must_use]
    pub fn new(glyph: char, fg: (u8, u8, u8), bg: (u8, u8, u8)) -> Self {
        Self {
            glyph: to_cp437(glyph),
            fg: RGBA::named(fg),
            bg: RGBA::named(bg),
        }
    }
}
