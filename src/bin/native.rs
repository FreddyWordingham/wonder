//! Datacube manipulation engine binary.

use arctk::{
    args,
    util::{
        banner::{section, title},
        dir,
    },
};
use rltk::{main_loop, RltkBuilder};
use std::{env::current_dir, path::PathBuf};
use wonder::game::State;

fn main() {
    let term_width = 80;
    title(term_width, "Wonder");

    section(term_width, "Initialisation");
    args!(bin_path: PathBuf);
    let cwd = current_dir().expect("Failed to determine current working directory.");
    // let (in_dir, out_dir) = dir::io_dirs(Some(cwd.join("input")), Some(cwd.join("output")))
    let (_in_dir, _out_dir) = dir::io_dirs(Some(cwd.clone()), Some(cwd.join("output")))
        .expect("Failed to initialise directories.");

    section(term_width, "Running");
    game();

    section(term_width, "Finished");
}

/// Run the main game loop.
fn game() {
    let context = RltkBuilder::simple80x50()
        .with_title("Roguelike - Wonder")
        .build()
        .expect("Failed to build RLTK window.");
    let gs = State::new();
    main_loop(context, gs).expect("Failed to run the main game loop.")
}
