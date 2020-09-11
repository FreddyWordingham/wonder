//! Location component.

use crate::clone;
use rltk::{to_cp437, FontCharType, RGBA};
use specs::prelude::*;
use specs_derive::Component;

/// Drawable information.
#[derive(Component)]
pub struct Renderable {
    /// Character.
    glyph: FontCharType,
    /// Foreground colour.
    fg: RGBA,
    /// Background colour.
    bg: RGBA,
}

impl Renderable {
    clone!(glyph, FontCharType);
    clone!(fg, RGBA);
    clone!(bg, RGBA);

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
