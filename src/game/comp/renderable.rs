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
}
