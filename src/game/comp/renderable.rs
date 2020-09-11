//! Location component.

use crate::{access, clone};
use rltk::{FontCharType, RGB};
use specs::prelude::*;
use specs_derive::Component;

/// Drawable information.
#[derive(Component)]
pub struct Renderable {
    /// Character.
    glyph: FontCharType,
    /// Foreground colour.
    fg: RGB,
    /// Background colour.
    bg: RGB,
}

impl Renderable {
    clone!(glyph, FontCharType);
    access!(fg, RGB);
    access!(bg, RGB);

    /// Construct a new instance.
    #[inline]
    #[must_use]
    pub fn new(glyph: char, fg: (u8, u8, u8), bg: (u8, u8, u8)) -> Self {
        Self {
            glyph: glyph as FontCharType,
            fg: RGB::named(fg),
            bg: RGB::named(bg),
        }
    }
}
