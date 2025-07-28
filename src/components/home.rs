use crate::Route;
use dioxus::prelude::*;

#[component]
pub fn Home() -> Element {
    rsx! {
        div {
            id: "home",
            h1 {"Tim Forrer"}
            p {"Physics doctoral student at the University of Tokyo."}
            p {"Outside of research, I'm interested in:"}
            ul {
                li { "Machine Learning" }
                li {  "Rust" }
                li { Link { to: Route::Gallery, "Photography" } }
                li { "Badminton" }
            }
        }
    }
}
