/// Toggle the form visibility.
export function toggle_forms(top, bottom) {
    console.log("Toggling form visibility...");

    if (top.style.display == "block") {
        top.style.display = "none";
        bottom.style.display = "none";
    } else {
        top.style.display = "block";
        bottom.style.display = "block";
    }
}
